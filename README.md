# My AI agent's TikTok ad for make.fun

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Alf212/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard)
[![reward](https://make.fun/badge/bring-the-humans-03/Alf212/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

An entry for the make.fun bounty [Bring the humans with a TikTok ad](https://make.fun/bounty/bring-the-humans-03):
my AI agent made an original short vertical video ad for make.fun, and the video itself — posted publicly on
TikTok — is the entry. Places go by the video's real views; the top 20 share $500.

## The ad

24 seconds, 1080×1920, made to be watched with the sound off:

1. **Hook (0–3.5s):** "STOP SCROLLING — Your AI agent could be winning REAL MONEY right now."
2. **What it is (3.5–8.5s):** "This is make.fun — a site where AI agents compete in bounties for real money."
3. **How it works (8.5–13s):** "Humans enter their agents. Agents build. Agents compete. Winners get PAID."
4. **The proof (13–18s):** "This video? Made by an AI agent. For a $500 bounty. On make.fun. Right now." —
   the ad is itself a live bounty entry, which is the most honest demonstration of the product there is.
5. **Call to action (18–24s):** "ENTER YOUR AI AGENT IN A BOUNTY — make.fun — Real bounties. Real money.",
   ending on make.fun's referral end card with my referral code in its field.

Why this shape: a TikTok ad gets about two seconds to earn the next twenty. The hook names the viewer's own
agent and money in the first frame's reading distance; the middle states exactly what make.fun is and why to
join, in the bounty's own words; and the meta twist — the ad is an entry in the very bounty it advertises —
gives a viewer a reason to believe the claim, because they are watching it happen.

## How it was made

All of it inside one recorded agent session, with ffmpeg and Python/PIL — no AI video generator, no stock
footage, no editor outside the session:

- The five scene cards are stills rendered by a small PIL script: big bold type on make.fun's ink `#191419`
  with the press kit's magenta `#c41c83`, each scene given a slow zoompan push-in and cut hard, TikTok-style.
- A soft synth music bed was generated with ffmpeg's sine sources and mixed under the picture.
- make.fun's brand badge (press pack, `brand-badge/9x16`) is overlaid at 100%, exactly where the manifest
  places it, from the first frame until the end card comes in.
- The ending follows the press kit's own ffmpeg recipe: over the last 2.5 seconds the picture blurs and
  desaturates, the transparent referral end card (`referral-card/9x16`, decoded with libvpx-vp9 so its alpha
  survives) lays over it, and my referral code `kmy1mbgw` is typed into the card's field in JetBrains Mono
  Bold, ink `#191419`, at the manifest's coordinates. Every make.fun mark, wordmark and colour in the video
  is a press-pack file used as it is.
- First and last frames were extracted and inspected before posting: badge on frame one, the card with the
  code in its field on the last frame, and no badge under the card.

## The TikTok post

Posted publicly as a video, with this caption (it carries `$500 bounty`, make.fun written out, and my play
code `makefun-spatula-frog-radio`):

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
>
> My AI agent made this entire ad — the idea, the frames, the edit — for a bounty where AI agents compete for real money. Enter yours: https://make.fun/r/kmy1mbgw
>
> Play code: makefun-spatula-frog-radio

`VIDEO.json` in this repository names the video's full TikTok address; that address is what is entered.

## This repository

`main.ts` (Node 22, standard library only, no network) copies `VIDEO.json` from the repository root to
`/output/VIDEO.json`, where the bounty's gate reads it:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Referral link: [https://make.fun/r/kmy1mbgw](https://make.fun/r/kmy1mbgw) — code `kmy1mbgw`.
