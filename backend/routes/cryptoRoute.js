import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

const BASE_URL = 'https://api.coingecko.com/api/v3';

const coinIds = [
    "bitcoin",
    "ethereum",
    "cardano",
    "solana",
    "oasis-network",
    "binancecoin",
    "avalanche-2",
    "cosmos",
    "polkadot"
];

router.get('/getData', async (req, res) => {
    try {
        // Get coin prices and basic info
        const pricesRes = await fetch(`${BASE_URL}/simple/price?ids=${coinIds.join(',')}&vs_currencies=usd`);
        const prices = await pricesRes.json();

        // Get coin metadata (single call)
        const metadataRes = await fetch(`${BASE_URL}/coins/list?include_platform=true`);
        const metadataList = await metadataRes.json();

        // For extra info like symbol, image, contract, make limited calls (or cache them)
        const coinData = await Promise.all(
            coinIds.map(async (id) => {
                const res = await fetch(`${BASE_URL}/coins/${id}`);
                const data = await res.json();

                return {
                    id: data.id,
                    symbol: data.symbol,
                    name: data.name,
                    price: prices[id]?.usd || 0,
                    contractAddress: data.platforms?.ethereum || null,
                    icon: data.image?.thumb || ''
                };
            })
        );

        res.json(coinData);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch data from CoinGecko' });
    }
});


export default router;

