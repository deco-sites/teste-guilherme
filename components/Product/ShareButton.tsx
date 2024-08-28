const ShareButton = () => {
  const shareOnWhatsApp = () => {
    const message = encodeURIComponent("Confira este produto incrível!");
    const url = "https://example.com/product-page";
    globalThis.open(`https://wa.me/?text=${message} ${url}`, "_blank");
  };

  return (
    <button
      onClick={shareOnWhatsApp}
      className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
    >
      Compartilhar no WhatsApp
    </button>
  );
};

export default ShareButton;
