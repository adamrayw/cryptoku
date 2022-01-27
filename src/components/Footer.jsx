export default function Footer() {
    return (
        <>
            <div className="bg-gray-600">
                <p className="text-xs max-w-7xl mx-auto  p-6 text-gray-100 tracking-wider">All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms (“Site”) is for your general information only, procured from third party sources. We make no warranties of any kind in relation to our content, including but not limited to accuracy and updatedness. No part of the content that we provide constitutes financial advice, legal advice or any other form of advice meant for your specific reliance for any purpose. Any use or reliance on our content is solely at your own risk and discretion. You should conduct your own research, review, analyse and verify our content before relying on them. Trading is a highly risky activity that can lead to major losses, please therefore consult your financial advisor before making any decision. No content on our Site is meant to be a solicitation or offer.</p>
            </div>
            <footer className="bg-gray-800 ">
                <div className="grid md:grid-cols-3 grid-cols-1 max-w-7xl mx-auto px-6 py-10 gap-x-10 md:gap-y-0 gap-y-6">
                    <div className="text-left">
                        <h1 className="text-white font-bold text-4xl mb-4">Cryptoku</h1>
                        <p className="text-gray-400">Cryptoku provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics.</p>
                    </div>
                    <div className="text-left grid md:grid-cols-3 grid-cols-1 gap-x-8 md:gap-y-0 gap-y-6">
                        <div>
                            <h5 className="font-semibold text-white mb-4">About Cryptoku</h5>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li>
                                    <a href="/" className="hover:text-white transition-all">About us</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Methodology</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Careers</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Branding Guide</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Request Form</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Advertising</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-white mb-4">For Developers</h5>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Developer API</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Widgets</a>
                                </li>

                            </ul>
                            <h5 className="font-semibold text-white mb-4 mt-6">Donations</h5>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Bitcoin</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Ethereum</a>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-white mb-4">Community</h5>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Twitter</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Telegram Chat</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Telegram News</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Instagram</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Reddit</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Discord</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Facebook</a>
                                </li>
                                <li>
                                    <a href="/" className="hover:text-white transition-all">Youtube</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-left">
                        <h5 className="font-semibold text-white mb-4">Interested to stay up-to-date with cryptocurrencies?</h5>
                        <p className="text-gray-400 transition-all">Get the latest crypto news, updates, and reports by subscribing to our free newsletter.</p>
                        <input type="text" className="w-full mt-4 focus:ring-2 transition-all focus:ring-gray-300 px-4 py-2 rounded-lg bg-white border" placeholder="Enter Your Email" />
                        <button className="rounded-lg mt-4 text-sm bg-white text-gray-800 hover:bg-gray-900 hover:text-white transition-all px-4 py-2">Subscribe</button>
                    </div>
                </div>
            </footer>
        </>
    )
}