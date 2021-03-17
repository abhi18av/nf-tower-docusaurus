---
title: Git Overview
aliases:
- "/docs/overview"
weight: 1
layout: single
publishdate: 2020-10-20 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Seqera Labs"
headline: "Git Integration"
description: 'Managing and connecting to Git repositories for Nextflow in Nextflow Tower.'

menu:
  docs:
    parent: Git Integration
    weight: 1
---
Nextflow has built-in support for [Git](https://git-scm.com) and integration with several Git-hosting platforms.

A data pipelines may be composed by many assets (source code scripts, deployment settings, dependency descriptors such as Conda or Docker files, documentation etc.).

By managing complex data pipelines as Git projects, all assets can be precisely tracked and deployed specifying a Git tag, release or commit id. This, combined with containerization, is key for **enabling replicable pipeline executions**. It also provides the ability to continuously test and validate pipelines as code evolves over time.

The following sections detail how to connect to public and private Git-hosting platforms to Tower:

  * [Public Git repositories](/git-public/)
  * [Private Git repositories](/git-private/)
