export default function VideoModal({ isTrue, iframeSrc, handelClose }) {
  return (
    <div className={`cs_video_popup ${isTrue ? "active" : ""}`}>
      <div className="cs_video_popup-overlay"></div>
      <div className="cs_video_popup-content">
        <div className="cs_video_popup-layer"></div>
        <div className="cs_video_popup-container">
          <div className="cs_video_popup-align">
            {/* Bootstrap 5 ratio instead of embed-responsive */}
            <div className="ratio ratio-16x9">
              <iframe
                src={iframeSrc}
                title="Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div
            className="cs_video_popup-close"
            onClick={handelClose}
            role="button"
          ></div>
        </div>
      </div>
    </div>
  );
}
