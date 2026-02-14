export async function analyzeResumeText(
    resumeText: string, prompt: string
): Promise<any> {
    const res = await fetch(
        'https://api.groq.com/openai/v1/chat/completions',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'openai/gpt-oss-120b',
                temperature: 0.7,
                max_tokens: 3000,
                messages: [
                    { role: 'system', content: prompt },
                    { role: 'user', content: `CV:\n\n${resumeText}` },
                ],
            }),
        }
    )

    const data = await res.json()
    const content = data?.choices?.[0]?.message?.content

    if (!content) {
        throw new Error('Resposta vazia da API')
    }

    return (content)
}
