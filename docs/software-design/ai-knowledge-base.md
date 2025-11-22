---
sidebar_position: 1
---

# Gnomicon Knowledge Base
**Gnomicon** is the central knowledge engine of **GnomeNet**, responsible for storing, organizing, and retrieving all forms of personal information: notes, documents, photos, extracted text, summaries, and structured facts.  
It acts as the living, growing “mind” of the entire system.

## Responsibilities
### Data Storage
Utilizes Minio for scalable and efficient storage of all knowledge assets: pdf, png, jpg, svg, docx, md, mdx, csv, etc.

### Data Labeling
Utilizes various AI models to automatically tag and label data for easy retrieval. Labels and tags are stored within postgresql database with reference to original document stored within minio.

### Fact Storage
Stores structured facts and information extracted from unstructured data using postgresql. Facts will include pgvector embeddings as well as jsonb metadata objects. Stored with reference to original document stored within minio.

### Data Summarization
Generates concise summaries of documents and notes using AI models to facilitate quick understanding and retrieval. Summaries are stored within postgresql database with reference to original document stored within minio.


## Technologies
- **Minio**: Object storage for all knowledge assets.
