
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Sei l'assistente virtuale di "Salsedine Milazzo", una splendida casa vacanze situata a Milazzo, Sicilia, a pochi passi dal mare.
Il tuo obiettivo è aiutare i potenziali ospiti a conoscere la casa e la zona di Milazzo.
Informazioni chiave:
- Posizione: Milazzo, vicino alla spiaggia di Ponente.
- Vista: Vista sul mare e sulle Isole Eolie.
- Camere: 2 camere da letto matrimoniali, divano letto in soggiorno (max 6 persone).
- Servizi: WiFi veloce, Aria condizionata, Cucina attrezzata, Terrazza panoramica, Parcheggio privato.
- Attività: Escursioni alle Isole Eolie (partenza dal porto di Milazzo), visita al Castello di Milazzo, Piscina di Venere al Capo.
- Tono: Accogliente, professionale, siciliano ma moderno.
Rispondi sempre in Italiano. Se ti chiedono prezzi, di' che variano in base alla stagione e di usare il form di contatto.
`;

export const getConciergeResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Mi dispiace, c'è stato un errore. Riprova più tardi.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Al momento il mio servizio è limitato. Per favore, usa il modulo di contatto per scriverci direttamente!";
  }
};
