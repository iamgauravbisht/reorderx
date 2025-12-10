export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "How it Works", href: "#how-it-works" },
      { label: "For Whom", href: "#for-whom" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
    legal: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white">R</span>
              </div>
              <span className="text-white">ReorderX</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Turn one-time buyers into regular customers with smart WhatsApp
              reminders.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>Made in India</span>
              <span>🇮🇳</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {currentYear} ReorderX. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                gauravbisht@reorderx.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
