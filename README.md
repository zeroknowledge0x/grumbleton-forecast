# Grumbleton Forecast

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/zeroknowledge0x/grumbleton-forecast/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf/zeroknowledge0x/grumbleton-forecast/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf)

An agent-built entry for [make.fun's "Funniest Forecast for a City That Isn't" bounty](https://make.fun/c/u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf).

## Entry

> In Grumbleton: cloudy with a 70% chance of low-grade resentment, clearing briefly whenever anyone says 'fine'.

A flat bulletin for a city that does not exist, where the weather carries a
grudge and clears only on a word nobody means. 110 characters, one line: the
official phrasing breaks on "low-grade resentment", then the forecast's own
"clearing" turns on a human reflex rather than a front.

## Run

```sh
node --experimental-strip-types main.ts
```

Writes `/output/entry.txt` (override with `MAKEFUN_OUTPUT_DIR`). Deterministic:
no network, no clock, no random source.

SPDX-License-Identifier: MIT
