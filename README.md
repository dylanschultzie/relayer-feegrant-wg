# IBC Relayer Feegrant Working Group

This repository is the implementation of [Cosmoshub Proposal #862](https://www.mintscan.io/cosmos/proposals/862): Cosmos Hub IBC Relayer gas cost restitution using FeeGrants

It hosts automation to maintain IBC Relayer `feegrant` allowances my a multisig account.

## Onboarding steps
- Add your operator account to all official paths that you relay on. You can either do this completing a new [onboarding issue](https://github.com/cryptocrew-validators/relayer-feegrant-wg/issues/new?assignees=&labels=operator-onboarding&projects=&template=operator_onboarding.md&title=Operator+Onboarding%3A+%5BYour+Name%5D) or by [directly opening a PR](https://github.com/cryptocrew-validators/relayer-feegrant-wg/compare)
- Upon submission, your PR will be reviewed by the maintainers of this repository.
- Period spend limits (daily spend limits) are frequently evaluated. 

## Relayer Tier system

| Tier | Period Spend Limit | Evaluation criteria |
| ---- | ------------------ | ------------------- |
| `Tier 1` | 50 ATOM | Top 10 accounts by effected packets confirmed during the past 30d |
| `Tier 2` | 5 ATOM | All other accounts |

## Governance Team & Monitoring Framework

The Governance Committee, composed of feegrant multisig members, holds the authority to review and withdraw whitelisting privileges on a regular basis. Additionally, this committee is empowered to assess and modify the onboarding guidelines as necessary. Reasons for revocation include, but are not limited to: excessive or inappropriate transactions (spamming), non-compliance with onboarding standards (such as batch delay and efficiency), utilization of feegrants for purposes unrelated to IBC, and exploitation of any inadvertent misconfigurations by the multisig.

The Governance Committee consists of:

- Clemens (CryptoCrew): `cosmos1705swa2kgn9pvancafzl254f63a3jda9ngdnc7`
- Ghazni (StakeCito): `cosmos1qm5agp78atuf9pyalsq4w30mzc3lxtj0vgq2qe`
- luisqa (Interbloc): `cosmos1ze09kc5ackut7wc4pf38lysu45kfz3ms86w3em`
- tricky (CosmosSpaces): `cosmos1a8x3fn37gjnglcr25fsfyr6c5m4ed5euwvae2n`
- Ertemann (Lavender.Five Nodes): `cosmos1xfl6qve3plepgk7wlgxypem5ngntavrnkng3vz`

**Feegrant Multisig Address:** `cosmos14r8ff03jkyac2fukjtfrfgaj8ehjlhds5ec2zp`

## Operators

| Name | Address | Total Paths | Discord | Telegram | Period Spend Limit | Active Period Spend Limit |
|------|---------|-------------|---------|----------|--------------------|---------------------------|
| Cosmos Spaces | `cosmos1ks0qeq9vyt9l7vgasaajd49ff0k8klure6ez4n` | 11 | [`.tricky_.`](https://discordapp.com/users/.tricky_.) | [`Char1esBark1ey`](https://t.me/Char1esBark1ey) | 50.0 | 50.0 |
| Crosnest | `cosmos1l267dmlmprhu4p5aqslf50f495vjqlg3a52yjt` | 7 | [`galadrin_crosnest`](https://discordapp.com/users/galadrin_crosnest) | [`crosnest_com`](https://t.me/crosnest_com) | 50.0 | 50.0 |
| Architect Nodes | `cosmos1cx82d7pm4dgffy7a93rl6ul5g84vjgxk8xxrnv` | 7 | [`architectnodes`](https://discordapp.com/users/architectnodes) | [`social244305_Architect_Nodes`](https://t.me/social244305_Architect_Nodes) | 50.0 | 50.0 |
| Crosnest | `cosmos19kzuzfmmy9wjr3cl0ss8wjzjup9g49hqxg9e2y` | 6 | [`galadrin_crosnest`](https://discordapp.com/users/galadrin_crosnest) | [`crosnest_com`](https://t.me/crosnest_com) | 50.0 | 50.0 |
| Crosnest | `cosmos19pjtx7dah2fquf7udyxjv94h0eraha789k37ff` | 5 | [`galadrin_crosnest`](https://discordapp.com/users/galadrin_crosnest) | [`crosnest_com`](https://t.me/crosnest_com) | 50.0 | 50.0 |
| IcyCRO | `cosmos1nna7k5lywn99cd63elcfqm6p8c5c4qcug4aef5` | 4 | [`zanglang`](https://discordapp.com/users/zanglang) | [`zanglang`](https://t.me/zanglang) | 50.0 | 50.0 |
| IcyCRO | `cosmos1p7d8mnjttcszv34pk2a5yyug3474mhffasa7tg` | 3 | [`zanglang`](https://discordapp.com/users/zanglang) | [`zanglang`](https://t.me/zanglang) | 50.0 | 50.0 |
| Decentrio | `cosmos1w0f29w3hst8hzhr2cv30cfjvqp70yyp9wgr3pv` | 3 | [`dunguyen29`](https://discordapp.com/users/dunguyen29) | [`dunguyen_29`](https://t.me/dunguyen_29) | 50.0 | 50.0 |
| Cosmos Spaces | `cosmos1558hpgzv2jt6rkuccaklxhgtj8mcleq0s2zcsl` | 2 | [`.tricky_.`](https://discordapp.com/users/.tricky_.) | [`Char1esBark1ey`](https://t.me/Char1esBark1ey) | 50.0 | 50.0 |
| Architect Nodes | `cosmos1w8kzcqk25vr0fx0k7yxn2vjw49qerut2tfv8up` | 2 | [`architectnodes`](https://discordapp.com/users/architectnodes) | [`social244305_Architect_Nodes`](https://t.me/social244305_Architect_Nodes) | 50.0 | 50.0 |
| CryptoCrew | `cosmos1f269n4mrg0s8tqveny9huulyamvdv97n094dgm` | 1 | [`ccclaimens`](https://discordapp.com/users/ccclaimens) | [`clemensg`](https://t.me/clemensg) | 50.0 | 50.0 |
| Cosmos Spaces | `cosmos1kgs9ml9hc085k6pm36z6wlnjc3c8zv99myau2w` | 1 | [`.tricky_.`](https://discordapp.com/users/.tricky_.) | [`Char1esBark1ey`](https://t.me/Char1esBark1ey) | 50.0 | 50.0 |
| Architect Nodes | `cosmos1ln3l6waaqdjcskt3ztzqlzkpvmzp7zw4ky2xgp` | 1 | [`architectnodes`](https://discordapp.com/users/architectnodes) | [`social244305_Architect_Nodes`](https://t.me/social244305_Architect_Nodes) | 50.0 | 50.0 |
| CryptoCrew | `cosmos1yghndrffay859ma2ue4pa2cltw640vtayerdla` | 1 | [`@ccclaimens`](https://discordapp.com/users/@ccclaimens) | [`@clemensg`](https://t.me/@clemensg) | 50.0 | 50.0 |
| Cosmos Spaces | `cosmos126pkrcvytfvsvrdm7x4wme5y780amvwwarzezc` | 1 | [`.tricky_.`](https://discordapp.com/users/.tricky_.) | [`Char1esBark1ey`](https://t.me/Char1esBark1ey) | 50.0 | 50.0 |
| Decentrio | `cosmos1sk76c20mkypkm8mmrza09nnkq9vkqn4atn60qj` | 1 | [`dunguyen29`](https://discordapp.com/users/dunguyen29) | [`dunguyen_29`](https://t.me/dunguyen_29) | 50.0 | 50.0 |

## Paths

<details><summary>akash-cosmoshub</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `akash1ks0qeq9vyt9l7vgasaajd49ff0k8klur5p59vf` | `cosmos1ks0qeq9vyt9l7vgasaajd49ff0k8klure6ez4n` | 0.0 | 0.0 |
</details>

<details><summary>archway-cosmoshub</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Crosnest | `archway1l267dmlmprhu4p5aqslf50f495vjqlg3glkqcu` | `cosmos1l267dmlmprhu4p5aqslf50f495vjqlg3a52yjt` | 0.0 | 0.0 |
</details>

<details><summary>aura-cosmoshub</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Crosnest | `aura19pjtx7dah2fquf7udyxjv94h0eraha787qxuts` | `cosmos19pjtx7dah2fquf7udyxjv94h0eraha789k37ff` | 0.0 | 0.0 |
</details>

<details><summary>axelar-cosmoshub</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `axelar1558hpgzv2jt6rkuccaklxhgtj8mcleq05y5sm7` | `cosmos1558hpgzv2jt6rkuccaklxhgtj8mcleq0s2zcsl` | 0.0 | 0.0 |
| Crosnest | `axelar19kzuzfmmy9wjr3cl0ss8wjzjup9g49hqzxn3p9` | `cosmos19kzuzfmmy9wjr3cl0ss8wjzjup9g49hqxg9e2y` | 0.0 | 0.0 |
| IcyCRO | `axelar1nna7k5lywn99cd63elcfqm6p8c5c4qcuvmt3z4` | `cosmos1nna7k5lywn99cd63elcfqm6p8c5c4qcug4aef5` | 0.0 | 0.0 |
</details>

<details><summary>bitsong-cosmoshub</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Architect Nodes | `bitsong16arskkjeeq9jnvwfe78n8m9y06jkj9kp2vc6vn` | `cosmos1cx82d7pm4dgffy7a93rl6ul5g84vjgxk8xxrnv` | 0.0 | 0.0 |
</details>

<details><summary>composable-cosmoshub</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `centauri1ks0qeq9vyt9l7vgasaajd49ff0k8kluras573q` | `cosmos1ks0qeq9vyt9l7vgasaajd49ff0k8klure6ez4n` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-crescent</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `cosmos1ks0qeq9vyt9l7vgasaajd49ff0k8klure6ez4n` | `cre1ks0qeq9vyt9l7vgasaajd49ff0k8kluraj28q7` | 0.0 | 0.0 |
| Architect Nodes | `cosmos1w8kzcqk25vr0fx0k7yxn2vjw49qerut2tfv8up` | `cre1cx82d7pm4dgffy7a93rl6ul5g84vjgxkrw4xxp` | 0.0 | 0.0 |
| IcyCRO | `cosmos1nna7k5lywn99cd63elcfqm6p8c5c4qcug4aef5` | `cre1nna7k5lywn99cd63elcfqm6p8c5c4qcuvawuue` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-cryptoorgchain</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Crosnest | `cosmos19kzuzfmmy9wjr3cl0ss8wjzjup9g49hqxg9e2y` | `cro19kzuzfmmy9wjr3cl0ss8wjzjup9g49hq7ndqk4` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-emoney</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Crosnest | `cosmos19kzuzfmmy9wjr3cl0ss8wjzjup9g49hqxg9e2y` | `emoney19kzuzfmmy9wjr3cl0ss8wjzjup9g49hqftldae` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-evmos</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `cosmos1ks0qeq9vyt9l7vgasaajd49ff0k8klure6ez4n` | `evmos146sl9u5kgsa86mxk6zjhmwlnlxa7l7cwyvlhan` | 0.0 | 0.0 |
| Architect Nodes | `cosmos1cx82d7pm4dgffy7a93rl6ul5g84vjgxk8xxrnv` | `evmos1tusg5d35w03v0s2u5tefvf5yclguye09ctw6zu` | 0.0 | 0.0 |
| IcyCRO | `cosmos1p7d8mnjttcszv34pk2a5yyug3474mhffasa7tg` | `evmos1lldjhjnn32e8vek7cxe9g05nf8j74y0xa6dt3p` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-injective</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `cosmos1ks0qeq9vyt9l7vgasaajd49ff0k8klure6ez4n` | `inj146sl9u5kgsa86mxk6zjhmwlnlxa7l7cwvyea4r` | 0.0 | 0.0 |
| Crosnest | `cosmos1l267dmlmprhu4p5aqslf50f495vjqlg3a52yjt` | `inj1lagtgtck8627009uw39rlmsa6ty5dhwwuujq3m` | 0.0 | 0.0 |
| Decentrio | `cosmos1w0f29w3hst8hzhr2cv30cfjvqp70yyp9wgr3pv` | `inj1n2wzhz0zvrpzjvwfjva6shq0lxyy0d8atf4f5f` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-juno</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `cosmos1ks0qeq9vyt9l7vgasaajd49ff0k8klure6ez4n` | `juno1ks0qeq9vyt9l7vgasaajd49ff0k8klur0g6ej0` | 0.0 | 0.0 |
| Crosnest | `cosmos19pjtx7dah2fquf7udyxjv94h0eraha789k37ff` | `juno19pjtx7dah2fquf7udyxjv94h0eraha78nyj9w4` | 0.0 | 0.0 |
| Architect Nodes | `cosmos1w8kzcqk25vr0fx0k7yxn2vjw49qerut2tfv8up` | `juno1w8kzcqk25vr0fx0k7yxn2vjw49qerut2am0uma` | 0.0 | 0.0 |
| IcyCRO | `cosmos1p7d8mnjttcszv34pk2a5yyug3474mhffasa7tg` | `juno1nna7k5lywn99cd63elcfqm6p8c5c4qcu787zwg` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-kava</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Crosnest | `cosmos19pjtx7dah2fquf7udyxjv94h0eraha789k37ff` | `kava19pjtx7dah2fquf7udyxjv94h0eraha78er9rlw` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-kichain</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Crosnest | `cosmos19kzuzfmmy9wjr3cl0ss8wjzjup9g49hqxg9e2y` | `ki19kzuzfmmy9wjr3cl0ss8wjzjup9g49hqh95kws` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-kujira</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `cosmos1558hpgzv2jt6rkuccaklxhgtj8mcleq0s2zcsl` | `kujira1558hpgzv2jt6rkuccaklxhgtj8mcleq0pzqqa4` | 0.0 | 0.0 |
| Crosnest | `cosmos1l267dmlmprhu4p5aqslf50f495vjqlg3a52yjt` | `kujira1l267dmlmprhu4p5aqslf50f495vjqlg3vugulp` | 0.0 | 0.0 |
| IcyCRO | `cosmos1nna7k5lywn99cd63elcfqm6p8c5c4qcug4aef5` | `kujira1nna7k5lywn99cd63elcfqm6p8c5c4qcuealpy7` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-lumnetwork</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Crosnest | `cosmos19kzuzfmmy9wjr3cl0ss8wjzjup9g49hqxg9e2y` | `lum19kzuzfmmy9wjr3cl0ss8wjzjup9g49hqnzcsls` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-neutron</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `cosmos1ks0qeq9vyt9l7vgasaajd49ff0k8klure6ez4n` | `neutron1ks0qeq9vyt9l7vgasaajd49ff0k8klura9sq05` | 0.0 | 0.0 |
| IcyCRO | `cosmos1nna7k5lywn99cd63elcfqm6p8c5c4qcug4aef5` | `neutron1nna7k5lywn99cd63elcfqm6p8c5c4qcuv25mnn` | 0.0 | 0.0 |
| CryptoCrew | `cosmos1yghndrffay859ma2ue4pa2cltw640vtayerdla` | `neutron1yghndrffay859ma2ue4pa2cltw640vtaqx2096` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-noble</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `cosmos1ks0qeq9vyt9l7vgasaajd49ff0k8klure6ez4n` | `noble1ks0qeq9vyt9l7vgasaajd49ff0k8klur3ev2da` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-omniflixhub</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Crosnest | `cosmos19kzuzfmmy9wjr3cl0ss8wjzjup9g49hqxg9e2y` | `omniflix19kzuzfmmy9wjr3cl0ss8wjzjup9g49hqmk5qa6` | 0.0 | 0.0 |
| Architect Nodes | `cosmos1cx82d7pm4dgffy7a93rl6ul5g84vjgxk8xxrnv` | `omniflix1cx82d7pm4dgffy7a93rl6ul5g84vjgxk6ch6yj` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-osmosis</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| CryptoCrew | `cosmos1f269n4mrg0s8tqveny9huulyamvdv97n094dgm` | `osmo1f269n4mrg0s8tqveny9huulyamvdv97n87xa7f` | 0.0 | 0.0 |
| Cosmos Spaces | `cosmos1kgs9ml9hc085k6pm36z6wlnjc3c8zv99myau2w` | `osmo1kgs9ml9hc085k6pm36z6wlnjc3c8zv99nlwvuu` | 0.0 | 0.0 |
| Crosnest | `cosmos19pjtx7dah2fquf7udyxjv94h0eraha789k37ff` | `osmo19pjtx7dah2fquf7udyxjv94h0eraha78ddzwlm` | 0.0 | 0.0 |
| Architect Nodes | `cosmos1cx82d7pm4dgffy7a93rl6ul5g84vjgxk8xxrnv` | `osmo1cx82d7pm4dgffy7a93rl6ul5g84vjgxk0a4n97` | 0.0 | 0.0 |
| Decentrio | `cosmos1w0f29w3hst8hzhr2cv30cfjvqp70yyp9wgr3pv` | `osmo1w0f29w3hst8hzhr2cv30cfjvqp70yyp9xnsph7` | 0.0 | 0.0 |
| Decentrio | `cosmos1sk76c20mkypkm8mmrza09nnkq9vkqn4atn60qj` | `osmo1sk76c20mkypkm8mmrza09nnkq9vkqn4argflkq` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-persistence</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Crosnest | `cosmos1l267dmlmprhu4p5aqslf50f495vjqlg3a52yjt` | `persistence1l267dmlmprhu4p5aqslf50f495vjqlg3ncvhu0` | 0.0 | 0.0 |
| Architect Nodes | `cosmos1cx82d7pm4dgffy7a93rl6ul5g84vjgxk8xxrnv` | `persistence1cx82d7pm4dgffy7a93rl6ul5g84vjgxkf2qsag` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-quicksilver</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `cosmos1ks0qeq9vyt9l7vgasaajd49ff0k8klure6ez4n` | `quick1ks0qeq9vyt9l7vgasaajd49ff0k8klurj7fsvp` | 0.0 | 0.0 |
| Crosnest | `cosmos1l267dmlmprhu4p5aqslf50f495vjqlg3a52yjt` | `quick1l267dmlmprhu4p5aqslf50f495vjqlg3ks6kte` | 0.0 | 0.0 |
| Architect Nodes | `cosmos1cx82d7pm4dgffy7a93rl6ul5g84vjgxk8xxrnv` | `quick1cx82d7pm4dgffy7a93rl6ul5g84vjgxkvzk327` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-stride</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `cosmos1ks0qeq9vyt9l7vgasaajd49ff0k8klure6ez4n` | `stride1ks0qeq9vyt9l7vgasaajd49ff0k8klur63e7pl` | 0.0 | 0.0 |
| Crosnest | `cosmos1l267dmlmprhu4p5aqslf50f495vjqlg3a52yjt` | `stride1l267dmlmprhu4p5aqslf50f495vjqlg37l2cx8` | 0.0 | 0.0 |
| Cosmos Spaces | `cosmos126pkrcvytfvsvrdm7x4wme5y780amvwwarzezc` | `stride1558hpgzv2jt6rkuccaklxhgtj8mcleq0npzyyn` | 0.0 | 0.0 |
| Architect Nodes | `cosmos1cx82d7pm4dgffy7a93rl6ul5g84vjgxk8xxrnv` | `stride1cx82d7pm4dgffy7a93rl6ul5g84vjgxkydxl8q` | 0.0 | 0.0 |
| IcyCRO | `cosmos1p7d8mnjttcszv34pk2a5yyug3474mhffasa7tg` | `stride1nna7k5lywn99cd63elcfqm6p8c5c4qcut7a9ac` | 0.0 | 0.0 |
| Decentrio | `cosmos1w0f29w3hst8hzhr2cv30cfjvqp70yyp9wgr3pv` | `stride1w0f29w3hst8hzhr2cv30cfjvqp70yyp9drrd4q` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-teritori</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Crosnest | `cosmos1l267dmlmprhu4p5aqslf50f495vjqlg3a52yjt` | `tori1l267dmlmprhu4p5aqslf50f495vjqlg3lqadfm` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-terra2</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Cosmos Spaces | `cosmos1ks0qeq9vyt9l7vgasaajd49ff0k8klure6ez4n` | `terra1ks0qeq9vyt9l7vgasaajd49ff0k8klurl7rzhn` | 0.0 | 0.0 |
| Crosnest | `cosmos19pjtx7dah2fquf7udyxjv94h0eraha789k37ff` | `terra19pjtx7dah2fquf7udyxjv94h0eraha78rjt7tf` | 0.0 | 0.0 |
</details>

<details><summary>cosmoshub-umee</summary>

| Name | Chain 1 Address | Chain 2 Address | Period Spend Limit | Active Period Spend Limit |
|------|-----------------|-----------------|--------------------|---------------------------|
| Architect Nodes | `cosmos1ln3l6waaqdjcskt3ztzqlzkpvmzp7zw4ky2xgp` | `umee1cx82d7pm4dgffy7a93rl6ul5g84vjgxk4smuh7` | 0.0 | 0.0 |
</details>
