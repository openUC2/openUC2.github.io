"""
Abbe demo: object (imaging plane) + Fourier plane with interactive pupil cutoff.
No contour objects, so it works across matplotlib versions.

pip install numpy matplotlib
python abbe_planes_demo.py
"""

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.widgets import Slider, RadioButtons
from matplotlib.patches import Circle, Rectangle


# -----------------------------
# Sample object (mesh / grating)
# -----------------------------
def make_mesh(N=512, pitch_px=28, duty=0.35, rotate_deg=0.0):
    y, x = np.mgrid[0:N, 0:N].astype(np.float32)
    x -= N / 2
    y -= N / 2

    th = np.deg2rad(rotate_deg)
    xr = x * np.cos(th) - y * np.sin(th)
    yr = x * np.sin(th) + y * np.cos(th)

    gx = (np.mod(xr / pitch_px, 1.0) < duty).astype(np.float32)
    gy = (np.mod(yr / pitch_px, 1.0) < duty).astype(np.float32)
    obj = gx * gy

    w = np.hanning(N).astype(np.float32)
    obj *= (0.25 + 0.75 * np.outer(w, w))

    obj -= obj.min()
    obj /= (obj.max() + 1e-9)
    return obj


# -----------------------------
# Fourier helpers
# -----------------------------
def fft2c(a):
    return np.fft.fftshift(np.fft.fft2(a))


def ifft2c(A):
    return np.fft.ifft2(np.fft.ifftshift(A))


def make_frequency_grid(N):
    u = np.arange(N) - N / 2
    U, V = np.meshgrid(u, u)
    R = np.sqrt(U**2 + V**2)
    return U, V, R


# -----------------------------
# Pupil masks
# -----------------------------
def mask_circular(R, cutoff):
    return (R <= cutoff).astype(np.float32)


def mask_rectangular(U, V, cutoff, aspect=1.0):
    aspect = max(1e-3, float(aspect))
    wx = cutoff * aspect
    wy = cutoff / aspect
    return ((np.abs(U) <= wx) & (np.abs(V) <= wy)).astype(np.float32)


def mask_darkfield(R, cutoff, stop):
    stop = min(stop, cutoff - 1e-6)
    return ((R <= cutoff) & (R >= stop)).astype(np.float32)


# -----------------------------
# Visualization scaling
# -----------------------------
def norm01(a):
    a = np.asarray(a)
    a = a - np.nanmin(a)
    return a / (np.nanmax(a) + 1e-12)


def logmag(A, eps=1e-9):
    return np.log10(np.abs(A) + eps)


def radial_profile_power(A, R):
    mag2 = np.abs(A) ** 2
    r = R.flatten()
    v = mag2.flatten()
    rmax = int(np.max(r))
    bins = np.arange(0, rmax + 2, 1)
    idx = np.digitize(r, bins) - 1

    prof = np.zeros(rmax + 1, dtype=np.float64)
    cnt = np.zeros(rmax + 1, dtype=np.float64)

    valid = (idx >= 0) & (idx <= rmax)
    np.add.at(prof, idx[valid], v[valid])
    np.add.at(cnt, idx[valid], 1.0)

    prof /= (cnt + 1e-12)
    prof = np.maximum(prof, 1e-30)
    return np.arange(rmax + 1), prof


def main():
    N = 512
    obj = make_mesh(N=N, pitch_px=28, duty=0.35, rotate_deg=0.0)

    U, V, R = make_frequency_grid(N)
    F = fft2c(obj)

    # Initial params
    cutoff0 = 80.0
    stop0 = 10.0
    aspect0 = 1.0
    mode0 = "circular"

    # Figure layout
    fig = plt.figure(figsize=(12, 7))
    gs = fig.add_gridspec(2, 3, height_ratios=[1, 1], width_ratios=[1, 1, 0.9])

    ax_obj = fig.add_subplot(gs[0, 0])
    ax_img = fig.add_subplot(gs[0, 1])
    ax_bfp = fig.add_subplot(gs[1, 0])
    ax_msk = fig.add_subplot(gs[1, 1])
    ax_prof = fig.add_subplot(gs[:, 2])

    plt.subplots_adjust(left=0.06, right=0.98, bottom=0.18, top=0.95, wspace=0.25, hspace=0.25)

    ax_obj.set_title("Object (sample plane)")
    ax_img.set_title("Image (after pupil filtering)")
    ax_bfp.set_title("Fourier plane (BFP): spectrum + passband overlay")
    ax_msk.set_title("Pupil mask (what passes)")

    ax_obj.imshow(obj, cmap="gray", vmin=0, vmax=1)
    ax_obj.axis("off")

    # Build initial mask
    def build_mask(mode, cutoff, stop, aspect):
        if mode == "circular":
            return mask_circular(R, cutoff)
        if mode == "rectangular":
            return mask_rectangular(U, V, cutoff, aspect=aspect)
        if mode == "darkfield":
            return mask_darkfield(R, cutoff, stop)
        return mask_circular(R, cutoff)

    mask = build_mask(mode0, cutoff0, stop0, aspect0)
    Ff = F * mask
    img = norm01(np.real(ifft2c(Ff)))

    im_img = ax_img.imshow(img, cmap="gray", vmin=0, vmax=1)
    ax_img.axis("off")

    # BFP: show original spectrum so orders remain visible, overlay passband
    im_bfp = ax_bfp.imshow(np.abs(F)**.5, cmap="gray")
    pass_overlay = np.ma.masked_where(mask < 0.5, mask)
    im_pass = ax_bfp.imshow(pass_overlay, cmap="winter", alpha=0.30, vmin=0, vmax=1)
    ax_bfp.axis("off")

    im_msk = ax_msk.imshow(mask, cmap="gray", vmin=0, vmax=1)
    ax_msk.axis("off")

    # Patch overlay (optional visual boundary) without contour
    cx = (N - 1) / 2
    cy = (N - 1) / 2

    patch_circ = Circle((cx, cy), radius=cutoff0, fill=False, linewidth=1.3, edgecolor="cyan")
    patch_rect = Rectangle((cx - cutoff0 * aspect0, cy - cutoff0 / aspect0),
                           2 * cutoff0 * aspect0, 2 * cutoff0 / aspect0,
                           fill=False, linewidth=1.3, edgecolor="cyan")
    patch_outer = Circle((cx, cy), radius=cutoff0, fill=False, linewidth=1.3, edgecolor="cyan")
    patch_inner = Circle((cx, cy), radius=stop0, fill=False, linewidth=1.3, edgecolor="cyan")

    for p in (patch_circ, patch_rect, patch_outer, patch_inner):
        ax_bfp.add_patch(p)

    patch_rect.set_visible(False)
    patch_outer.set_visible(False)
    patch_inner.set_visible(False)

    # Radial profile
    rr0, p0 = radial_profile_power(F, R)
    rr1, p1 = radial_profile_power(Ff, R)

    ax_prof.set_title("Fourier power vs radius")
    l0, = ax_prof.plot(rr0, p0, label="original")
    l1, = ax_prof.plot(rr1, p1, label="after mask")
    vline = ax_prof.axvline(cutoff0, linestyle="--")
    ax_prof.set_xlabel("radius in Fourier pixels")
    ax_prof.set_ylabel("mean |F|^2")
    ax_prof.set_yscale("log")
    ax_prof.legend(loc="upper right")

    # Controls
    ax_cut = fig.add_axes([0.10, 0.08, 0.55, 0.03])
    ax_stp = fig.add_axes([0.10, 0.04, 0.55, 0.03])
    ax_asp = fig.add_axes([0.10, 0.12, 0.55, 0.03])
    ax_rad = fig.add_axes([0.72, 0.04, 0.24, 0.12])

    s_cut = Slider(ax_cut, "cutoff", 2, N / 2 - 2, valinit=cutoff0, valstep=1)
    s_stp = Slider(ax_stp, "center stop", 0, N / 2 - 4, valinit=stop0, valstep=1)
    s_asp = Slider(ax_asp, "rect aspect (x/y)", 0.25, 4.0, valinit=aspect0)

    r_mode = RadioButtons(ax_rad, ("circular", "rectangular", "darkfield"), active=0)
    for t in r_mode.labels:
        t.set_fontsize(10)

    def update(_=None):
        nonlocal mask, Ff

        mode = r_mode.value_selected
        cutoff = float(s_cut.val)
        stop = float(s_stp.val)
        aspect = float(s_asp.val)

        if mode == "darkfield":
            stop = min(stop, cutoff - 1.0)
            stop = max(stop, 0.0)
            if abs(stop - s_stp.val) > 1e-6:
                s_stp.set_val(stop)
                return  # update will be called again

        mask = build_mask(mode, cutoff, stop, aspect)
        Ff = F * mask
        img = norm01(np.real(ifft2c(Ff)))

        im_img.set_data(img)
        im_msk.set_data(mask)

        pass_overlay = np.ma.masked_where(mask < 0.5, mask)
        im_pass.set_data(pass_overlay)

        # Boundary patches
        patch_circ.set_visible(mode == "circular")
        patch_rect.set_visible(mode == "rectangular")
        patch_outer.set_visible(mode == "darkfield")
        patch_inner.set_visible(mode == "darkfield")

        if mode == "circular":
            patch_circ.center = (cx, cy)
            patch_circ.radius = cutoff

        if mode == "rectangular":
            aspect = max(1e-3, aspect)
            wx = cutoff * aspect
            wy = cutoff / aspect
            patch_rect.set_xy((cx - wx, cy - wy))
            patch_rect.set_width(2 * wx)
            patch_rect.set_height(2 * wy)

        if mode == "darkfield":
            patch_outer.center = (cx, cy)
            patch_outer.radius = cutoff
            patch_inner.center = (cx, cy)
            patch_inner.radius = stop

        # Profile update
        rr0, p0 = radial_profile_power(F, R)
        rr1, p1 = radial_profile_power(Ff, R)
        l0.set_data(rr0, p0)
        l1.set_data(rr1, p1)
        vline.set_xdata([cutoff, cutoff])
        ax_prof.relim()
        ax_prof.autoscale_view()

        fig.canvas.draw_idle()

    s_cut.on_changed(update)
    s_stp.on_changed(update)
    s_asp.on_changed(update)
    r_mode.on_clicked(update)

    update()
    plt.show()


if __name__ == "__main__":
    main()
