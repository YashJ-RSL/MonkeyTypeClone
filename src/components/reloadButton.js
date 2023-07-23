const ReloadButton = () => (
  <div className="reload">
    <button
      onClick={() => {
        window.location.reload();
      }}
    >
      Reload
    </button>
  </div>
);

export default ReloadButton;
