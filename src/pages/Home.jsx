import Footer from "../components/Footer"
import TopCoins from "../components/TopCoins"


export default function List() {


    return (
        <>
            <TopCoins />
            <div className="text-left max-w-7xl my-20 mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div>
                    <h1 className="text-gray-800 font-bold text-4xl">What is cryptocurrency market cap?</h1>
                    <p className="leading-relaxed tracking-wide mt-4">Market cap is one of the most popular metrics in the industry that is used to gauge the value of an asset. The market cap of a cryptocurrency is calculated based on the coin's total circulating supply multiplied by the current price. For detailed examples on how the market capitalization of a coin is calculated, please view our methodology page.</p>
                </div>
                <div>
                    <h1 className="text-gray-800 font-bold text-4xl">How can I use market cap?</h1>
                    <p className="leading-relaxed tracking-wide mt-4">As a financial metric, market cap allows you to compare the total circulating value of one cryptocurrency with another. Large cap cryptocurrencies such as Bitcoin and Ethereum have a market cap of over $10 billion. They typically consist of protocols that have demonstrated track record, and have a vibrant ecosystem of developers maintaining and enhancing the protocol, as well as building new projects on top of them. From a trading perspective, large caps would typically be hosted on more exchanges, have higher liquidity, and are less volatile when compared against other mid and small cap cryptocurrencies.<br /><br /> While market cap is a simple and intuitive comparison metric, it is not a perfect point of comparison. Some cryptocurrency projects may appear to have inflated market cap through price swings and the tokenomics of their supply. As such, it is best to use this metric as a reference alongside other metrics such as trading volume, liquidity, fully diluted valuation, and fundamentals during your research process.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}