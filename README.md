# CryptoHub Intelligence Dashboard ✨

Este dashboard es una herramienta profesional de análisis de mercados de criptomonedas que integra sentimientos sociales, métricas de volumen y el motor de IA de **Gemini**.

## 🚀 Cómo ponerlo en marcha

### Opción 1: Publicar en GitHub Pages (Recomendado)
1. Crea un repositorio en GitHub llamado `crypto-dashboard`.
2. Sube el archivo `index.html`.
3. Ve a **Settings > Pages** y selecciona la rama `main` para publicar. GitHub te dará un enlace público.

### Opción 2: Uso Local
1. Descarga el archivo `index.html`.
2. Ábrelo en cualquier navegador (Chrome, Brave, Firefox).
3. **Nota**: Para que la IA funcione fuera del entorno de desarrollo original, deberás insertar tu propia API Key en la línea `const apiKey = "";` dentro del código de JavaScript.

## 🛠️ Funcionalidades del Dashboard
- **Scanner de Noticias**: Clasificación automática entre noticias válidas y spam (basado en emojis y patrones de especulación).
- **Monitor de Volumen**: Alerta roja dinámica en la hoja de datos (Live_Data) cuando el volumen diario supera el 20% del promedio semanal.
- **Análisis Narrativo con IA**: Botones integrados para solicitar a Gemini reportes sobre divergencias específicas o resúmenes macroeconómicos.
- **Diseño Responsivo**: Totalmente adaptado para móviles y tablets utilizando Tailwind CSS.

## 📊 Tecnologías
- **Tailwind CSS**: Diseño UI profesional, limpio y moderno.
- **Chart.js**: Visualizaciones de datos de sentimiento interactivas.
- **Gemini API**: Motor de inteligencia artificial integrado.