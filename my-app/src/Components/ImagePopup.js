// components/ImagePopup.js
export default function ImagePopup({ src, onClose }) {
  return (
    <div className="image-popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="Full view" className="image-popup" />
        <p className="exit-hint">Click anywhere to exit</p>
      </div>
    </div>
  );
}
