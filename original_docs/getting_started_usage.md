---
title: Usage
weight: 1
layout: single
publishdate: 2021-01-04 04:00:00 +0000
authors:
  - "Evan Floden"
  - "Alain Coletta"
  - "Seqera Labs"

headline: 'Getting started with Tower'
description: 'Choose how you want to use Tower.'
menu:
  docs:
    parent: Getting Started
    weight: 2
---

<br>

# Usage

You can use Tower via either the **online GUI**, using the `-with-tower` option with the **Nextflow run command**, or through the **API**.


## Via online GUI

**1.** Create an account and login into Tower, available free of charge, at [tower.nf](https://tower.nf).

**2.** Create and configure a new [compute environment](/docs/compute-envs/overview/).

**3.** Start [launching pipelines](/docs/launch/).

## Via Nextflow run command

Create an account and login into Tower.

**1. Create a new token**

  You can access your tokens from the The *Settings* drop-down menu or directly from this [link](https://tower.nf/tokens):

  {{% pretty_screenshot img="/uploads/2021/01/usage_create_token.png" %}}

  <br>


**2. Name your token**

  {{% pretty_screenshot img="/uploads/2021/01/usage_name_token.png" %}}

  <br>

**3. Save your token safely**

  Copy and keep your new token in a safe place.

  {{% pretty_screenshot img="/uploads/2021/01/usage_token.png" %}}

  <br>

**4. Export your token**

Once your token has been created, open a terminal and type:

{{% highlight bash %}}
export TOWER_ACCESS_TOKEN=eyxxxxxxxxxxxxxxxQ1ZTE=
export NXF_VER=20.10.0
{{% /highlight %}}

Where `eyxxxxxxxxxxxxxxxQ1ZTE=` is the token you have just created.

{{% note "check your Nextflow version"%}}
Bearer token requires Nextflow version 20.10.0 or later, set with the second command above.
{{% /note %}}

**5. Run Nextflow with tower**

Run your Nextflow workflows as usual with the addition of the `-with-tower` command:

{{% highlight bash %}}
nextflow run hello.nf -with-tower
{{% /highlight %}}

You will see and be able to monitor your **Nextflow jobs** in Tower.

To configure and execute Nextflow jobs in **Cloud environments**, visit the [Compute environments section](/docs/compute-envs).

## API

To learn more about using the Tower API, visit to the [API section](/docs/api) in this documentation.
