## ADR-0006 - Decide on how we will handle downloadable files

### Context

One of the requirements for phase 1 is to have resources available to download, such as articles, video, audio, etc. However, these need to be hosted/kept somewhere, and where it will be kept will greatly impact how they are implemented on our site.

Some possibilities include:
- Keep files in our public folder, using Vercel to host and hold these files
- Find a separate hosting website to use

Additionally, we need to figure out how we want to keep access to our files in the codebase. For example, would it be in
/public/audio/topic/<topicName>-<filename>? or /public/topic/<topicName>/audio/<filename> .. etc

### Decision

Regarding the code structure, since topics will most likely have multiple files (videos, audio, pictures), they should be kept by topic. So structure will be:
/public/topic
../<topicName>/audio or ../<topicName>/video etc.
../misc/audio

The misc is for resources without a topic.

### Status

PROPOSED

### Consequences

{Summary of the consequences of this decision, both positive and negative}

### Additional Information

{Any additional information that may be relevant}
