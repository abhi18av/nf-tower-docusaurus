---
title: Deployments
aliases:
  - "/docs/getting-started"
weight: 1
layout: single
publishdate: 2020-10-20 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Seqera Labs"

headline: "Getting started with Tower"
description: "Choose how you want to use Tower."
menu:
  docs:
    parent: Getting Started
    weight: 1
---

Tower can be accessed and/or deployed in three ways:

- **Hosted**: The hosted version of Tower is available free of charge at [tower.nf](https://tower.nf). This version is for individuals and organizations that want to get setup fast. It is the recommended way for users to become familiar with Tower. The service is hosted by Seqera Labs.

- **Community deployment**: Installation of the Tower community edition can be performed on a user's own system. The community edition has basic features for the monitoring of pipelines by an individual user.

- **Enterprise deployment**: Deployment of the fully-featured Tower application in an organization's own cloud or on-premise environment. This deployment option is supported by Seqera Labs and is recommended for production environments.

## Hosted

To try Tower, visit [tower.nf](https://tower.nf/login) and login with GitHub or Google credentials. The [Launching Pipelines](/docs/launch/) documentation section provides step-by-step instructions to start your first pipeline. The Hosted version of Tower has a limit of five concurrent workflow executions per user.

![](/uploads/2020/10/starting_tower_nf.png)

## Community

For more information on installing the Community version of Tower visit [our GitHub repository](https://github.com/seqeralabs/nf-tower) and follow our [deployment guide](/docs/installation/system-deployment/).

![](/uploads/2020/10/starting_tower_opensource.png)

## Enterprise

Tower Enterprise is installed within an organization's own cloud or on-premise environment. It includes:

- Monitoring, logging & observability
- Pipeline execution launchpad
- Cloud resource provisioning
- Pipeline actions and event-based execution
- LDAP & OpenID Authentication
- Enterprise role-based access control
- Fully featured API
- Support for Nextflow & Tower

To install the Tower in your organization, contact [Seqera Labs](https://seqera.io) for a demo and to discuss your requirements.

![](/uploads/2020/10/starting_tower_enterprise.png)
