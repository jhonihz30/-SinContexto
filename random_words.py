import spacy
from wordfreq import top_n_list
import json
import random

print("🔄 Cargando modelo de español...")
nlp = spacy.load("es_core_news_sm")

print("📚 Obteniendo palabras más comunes en español...")
palabras = top_n_list("es", 5000)

print("🔍 Filtrando sustantivos...")
sustantivos = []

for palabra in palabras:
    doc = nlp(palabra)
    if doc and len(doc) > 0 and doc[0].pos_ == "NOUN":
        sustantivos.append(palabra)

# Barajar y limitar a 500
random.shuffle(sustantivos)
sustantivos = sustantivos[:500]

# Guardar en JSON
with open("sustantivos.json", "w", encoding="utf-8") as f:
    json.dump(sustantivos, f, ensure_ascii=False, indent=2)

print(f"✅ Listo! Generados {len(sustantivos)} sustantivos reales en 'sustantivos.json'")
