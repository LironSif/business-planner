import OpenAI from 'openai';
import dotenv from 'dotenv';
import readline from 'readline';  // Ensure readline is imported

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateBusinessPlan(req, res) {
    try {
        const { description } = req.body;
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: description }]
        });

        if (!response.choices || response.choices.length === 0) {
            throw new Error('No response from OpenAI.');
        }

        res.status(200).json({ message: response.choices[0].message.content });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate business plan', detail: error.message });
    }
}