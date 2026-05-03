# Live Music Models

Source: `https://arxiv.org/abs/2508.04651`
HTML: `https://ar5iv.labs.arxiv.org/html/2508.04651v3`
PDF: `https://arxiv.org/pdf/2508.04651`
Title: `Live Music Models`
Authors: `Lyria Team, Google DeepMind`
Submitted: `2025-08-06`
Latest version: `2025-11-05` (`v3`)
Ingested: `2026-05-03`
Extraction engine: `arXiv metadata + ar5iv HTML structured extraction`
Strategy: `canonical paper extraction and medium/full lesson normalization`

## Summary

The paper introduces "live music models": generative music systems that produce an uninterrupted stream of music in real time while responding continuously to synchronized user controls. The authors argue that most prior AI music systems are offline and turn-based: a user provides a prompt, waits, and receives a fixed audio clip. Live music instead asks for a continuous perception-action loop, closer to performing an instrument.

The paper presents two systems:

- `Magenta RealTime`, an open-weights live music model intended for local or developer-controlled use.
- `Lyria RealTime`, an API-based model with broader controls and access to the authors' strongest model.

The core technical framework is codec language modeling. Audio is converted into discrete tokens by the `SpectroStream` neural audio codec, and an encoder-decoder Transformer predicts new audio tokens chunk by chunk. The model is conditioned on high-level musical style embeddings produced by `MusicCoCa`, a joint audio-text embedding model.

## Definition Of Live Music Models

The authors distinguish live music models from ordinary offline music generators using three requirements:

1. real-time generation, meaning the model can produce audio at least as fast as playback needs;
2. causal streaming, meaning the stream continues as a function of past audio output and current user controls;
3. responsive controls, meaning user input influences the output with low enough delay to support interaction.

This makes the model closer to a live instrument or performance partner than a batch audio renderer.

## Magenta RealTime Architecture

Magenta RealTime has three main parts:

1. `MusicCoCa`, which maps text prompts and audio prompts into a shared style-embedding space;
2. `SpectroStream`, which tokenizes and reconstructs stereo audio using a neural codec;
3. an encoder-decoder language model that predicts audio tokens conditioned on past audio context and style tokens.

The system generates audio in two-second chunks. For each chunk, it computes a style embedding from the current text and/or audio prompts, uses recent audio context, predicts new SpectroStream tokens, and decodes those tokens back into audio.

To support indefinite streaming, the model uses chunk-based autoregression rather than generating one long sequence with a fixed absolute position. It also conditions on a coarser representation of past audio context while generating full-depth target tokens for the new chunk.

## Controls

The paper emphasizes synchronized user control. Users can steer the model using text prompts, audio prompts, or mixtures of both. Because MusicCoCa maps audio and text into a shared embedding space, the model can blend controls through weighted averages of embeddings.

The authors also introduce `audio injection`, where user audio is mixed into the model's context for the next generation step. The user audio is not simply played back. Instead, the model conditions on a context that includes it and may repeat, transform, or be influenced by its musical features.

## Experiments

The paper evaluates Magenta RealTime in two main ways:

- offline-style quality and text-adherence metrics on instrumental music generation;
- a transition evaluation where the conditioning signal changes gradually from one prompt to another.

On the Song Describer Dataset comparison reported in the paper, Magenta RealTime is a live model at 48 kHz with 760M parameters. It outperforms Stable Audio Open and MusicGen-stereo-large on Fréchet Distance and KL metrics, while its CLAP score sits between those baselines. The authors emphasize that this is notable because the model is live and has fewer parameters than the compared open models.

For prompt transitions, the generated audio embeddings track the changing conditioning embeddings while preserving musical continuity. The authors argue that the history of prompts becomes part of the expressive performance process, not merely a sequence of independent commands.

## Main Contributions

- Defines live music models as real-time, causal, controllable music generators.
- Releases Magenta RealTime as an open-weights live music model.
- Provides Lyria RealTime as a more powerful API-based system with extended controls.
- Uses a codec-language-modeling pipeline with SpectroStream tokens and MusicCoCa style conditioning.
- Demonstrates live text/audio steering, prompt interpolation, and audio injection.
- Shows competitive automatic metrics against offline open-weights music generation models while enabling a new live-interaction mode.

## Caveats

The paper's strongest claims are about a new interaction paradigm and strong automatic metrics, not a complete solution to evaluating live musical creativity. The authors note that direct human evaluation for live systems requires extensive use and play testing. Automatic audio metrics are useful but cannot fully capture expressiveness, controllability, latency feel, performance flow, or musician preference.

Future work includes reducing control latency further and training on multi-stem audio so models can become more like musical partners or live accompanists.
