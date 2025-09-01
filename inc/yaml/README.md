# AI Agent Communication

## Providers

### OpenAI

This folder contains `.yaml` files for communicating with AI agents at OpenAI using a token-bearing schema. Each `.yaml` file represents

## Action Schematas

The following action schematas are available for external bots:

- `dandelion_openai.yaml`: This is the original action that maps to the openai gpt [`Dandelion`](https://chat.openai.com/g/g-rEjoOt9hN-mylife).
- `dandelion_biog-bot_openai.yaml`: This action is associated with the abilities of the [`Dandelion Biographer Bot`](https://chat.openai.com/g/g-QGzfgKj6I-mylife-biographer-bot) to identify user, and 

## Structure

The folder structure is as follows:

.
├── dandelion_openai.yaml
├── dandelion_biog-bot_openai.yaml
└── README.md

## Versioning

Currently schemas are using `openapi v.3.0.0`, and each `.yaml` will be individually versioned, actual changes maintained in git repository.

## References and Links

- [OpenAI specification page](https://spec.openapis.org/oas/v3.1.0#server-object-example) with a direct anchor to multiple server listing