// api/gemini.js
export default async function handler(req, res) {
    // 1. Solo permitimos peticiones POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    // 2. Obtenemos la clave de las variables de entorno ocultas del servidor
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
        return res.status(500).json({ error: 'API Key no configurada en el servidor' });
    }

    // 3. Obtenemos los datos que nos envía el frontend
    const { prompt, systemInstruction } = req.body;

    // 4. Hacemos la petición a Google desde el servidor oculto
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    
    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: systemInstruction || "Eres un analista senior de criptomonedas." }] }
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        
        // 5. Devolvemos la respuesta al frontend
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al comunicarse con Gemini' });
    }
}
