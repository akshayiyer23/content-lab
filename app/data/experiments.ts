export type ExperimentStatus = 'COMPLETED' | 'RUNNING' | 'PLANNED'
export type Winner = 'VARIANT WON' | 'CONTROL WON' | 'INCONCLUSIVE' | 'PENDING'
export type Platform = 'Instagram' | 'TikTok' | 'Both'

export interface Metric {
  label: string
  control?: string
  variant?: string
  value?: string
  note?: string
}

export interface Experiment {
  id: string
  number: string
  title: string
  platform: Platform
  date: string
  status: ExperimentStatus
  winner: Winner
  hypothesis: string
  variableTested: string
  controlDesc: string
  variantDesc: string
  result: string
  keyLearning: string
  whatNext: string
  metrics: Metric[]
}

// ─── THE DATASET ────────────────────────────────────────────────────────────
// 6 posts, same creator (@akshayiyer), same niche (drumming).
// Only variables changed: caption, sound choice, hashtags.
//
// Post 1 "following the melody" — April 2025
//   Sound: Cannock Chase (trending TikTok) | Hashtags: niche drum stack
//   403,014 views · 50.6K likes · 5,840 saves · 2,013 shares · 2,260 follows
//
// Post 2 "one of my favorites" — June 2025
//   Sound: Garden Kisses by Giveon (trending R&B) | Hashtags: niche drum stack
//   422,091 views · 43.5K likes · 6,413 saves · 590 shares · 2,476 follows
//
// Post 3 "had to do it again" — June 2025
//   Sound: Everything In Its Right Place (trending TikTok) | Hashtags: niche drum stack
//   645,492 views · 60.3K likes · 7,834 saves · 8,237 sends · 4,118 follows
//
// Post 4 "step by step" — February 2025
//   Sound: ORIGINAL self-recorded | Hashtags: #jazz #ghostnotes #drums #snare
//   612,993 views · 57.2K likes · 6,500 saves · 5,328 sends · 4,630 follows · 0.75% follow rate
//
// Post 5 "in the pocket" — November 2025
//   Sound: Doomsday by MF DOOM (non-trending) | Hashtags: niche drum stack
//   293,697 views · 25.8K likes · 3,600 saves · 2,609 sends · 1,195 follows
//   Skip rate: 46.5% | Like rate: 11.8% | Save rate: 1.6%
//
// Post 6 "whatever comes to mind" — July 2023 [THE FLOP]
//   Sound: Rambo by Bryson Tiller (non-trending) | Hashtags: broad genre tags
//   16,488 views · 751 likes · 63 saves · 0 sends · 0 reposts
// ─────────────────────────────────────────────────────────────────────────────

export const experiments: Experiment[] = [
  {
    id: 'exp-001',
    number: '001',
    title: 'The Open Loop Caption Test',
    platform: 'Instagram',
    date: 'Jul 2023 vs Apr 2025',
    status: 'COMPLETED',
    winner: 'VARIANT WON',
    hypothesis:
      'Short ambiguous captions (3–5 words that imply action without explaining it) create curiosity gaps that force higher watch-through rates and save rates vs descriptive captions that explain themselves.',
    variableTested: 'Caption framing — open loop vs descriptive',
    controlDesc:
      '"whatever comes to mind" — descriptive, self-explanatory caption with broad genre hashtags (#rnbmusic #viral) and non-trending sound (Rambo by Bryson Tiller)',
    variantDesc:
      '"following the melody" — 3-word open loop caption that implies action, paired with trending sound (Cannock Chase) and niche drum hashtags',
    result: '+2,344% more views · +9,171% more saves · 92x more saves on the ambiguous caption',
    keyLearning:
      'Captions are not descriptions — they are open loops. The caption creates a question the video must answer. This is the single highest-leverage copywriting principle in short-form content.',
    whatNext: 'Does a one-word caption outperform a 3-word caption? Test "melody" vs "following the melody" on matched content.',
    metrics: [
      { label: 'Views', control: '16,488', variant: '403,014', note: '+2,344%' },
      { label: 'Saves', control: '63', variant: '5,840', note: '+9,171% · 92x' },
      { label: 'Likes', control: '751', variant: '50,600', note: '+6,638%' },
      { label: 'Follows', control: '~0', variant: '2,260', note: 'Unmeasurable delta' },
    ],
  },
  {
    id: 'exp-002',
    number: '002',
    title: 'Trending Sound vs Original Sound',
    platform: 'Instagram',
    date: 'Feb 2025 vs Apr 2025',
    status: 'COMPLETED',
    winner: 'INCONCLUSIVE',
    hypothesis:
      'Trending audio will push content to non-followers at significantly higher rates than original audio through algorithmic audio-matching discovery.',
    variableTested: 'Audio selection — trending licensed track vs original self-recorded audio',
    controlDesc:
      '"step by step" — original self-recorded sound, hashtags: #jazz #ghostnotes #drums #snare · 612,993 views · 4,630 follows · 0.75% follow rate',
    variantDesc:
      '"following the melody" — trending sound (Cannock Chase), niche drum hashtags · 403,014 views · 2,260 follows · 0.56% follow rate',
    result: 'CONTROL WON on follow rate (0.75% vs 0.56%). Variant won on raw views. Depends on goal.',
    keyLearning:
      'Trending sounds boost raw view counts via audio discovery, but original sounds may attract higher-intent viewers who follow at higher rates. Goal determines strategy — reach vs conversion.',
    whatNext: 'Does an original sound with a trending-style open loop caption perform like a trending sound post? Isolate the audio variable further.',
    metrics: [
      { label: 'Views', control: '612,993', variant: '403,014', note: 'Control won on views' },
      { label: 'Follows', control: '4,630', variant: '2,260', note: 'Control won' },
      { label: 'Follow rate', control: '0.75%', variant: '0.56%', note: 'Control: highest of all 6 posts' },
      { label: 'Saves', control: '6,500', variant: '5,840', note: 'Control won' },
    ],
  },
  {
    id: 'exp-003',
    number: '003',
    title: 'Niche Hashtags vs Broad / Genre Hashtags',
    platform: 'Instagram',
    date: 'Jul 2023 vs 2025 avg',
    status: 'COMPLETED',
    winner: 'VARIANT WON',
    hypothesis:
      'Drum-specific niche hashtags (#ghostnotes #drumloop #snare) will drive higher save rates and follow rates than broad genre tags (#rnbmusic #trapsoul #viral) by reaching a smaller but highly-engaged audience.',
    variableTested: 'Hashtag specificity — niche drum stack vs broad genre tags',
    controlDesc:
      '"whatever comes to mind" — broad hashtags (#rambo #trapsoul #rnbmusic #rnbinstagram #viral) with brand tags (@yamahadrumsofficial @zildjiancompany @vicfirth) · 16,488 views · 63 saves · 0.38% save rate',
    variantDesc:
      'Posts 1–5 — niche drum hashtags (#drums #drummer #snare #ghostnotes #drumloop) · average 475K views · avg 6,045 saves per post',
    result: '+10,038% more saves per post · Niche hashtags drove 101x more saves than broad tags',
    keyLearning:
      'Broad hashtags reach large passive audiences who scroll past. Niche hashtags reach small highly-engaged audiences who save, follow, and return. Save rate is a stronger growth signal than raw reach.',
    whatNext: 'Does mixing 3 niche + 2 broad hashtags outperform 5 niche-only hashtags? Isolate the hashtag contribution from sound and caption.',
    metrics: [
      { label: 'Saves (control)', value: '63', note: '0.38% save rate' },
      { label: 'Avg saves (niche)', value: '6,045', note: 'Per post across 5 posts' },
      { label: 'Save rate multiplier', value: '101x', note: 'Niche vs broad' },
      { label: 'Avg views (niche)', value: '475,457', note: 'Posts 1–5 average' },
    ],
  },
  {
    id: 'exp-004',
    number: '004',
    title: 'Save Rate as Growth Predictor',
    platform: 'Instagram',
    date: '2023–2025',
    status: 'COMPLETED',
    winner: 'VARIANT WON',
    hypothesis:
      'Posts with higher save rates will generate disproportionately more follows and profile visits than posts with higher like rates, because saves signal intent to return to the creator.',
    variableTested: 'Content type and depth — save-optimized (technical, high replay value) vs like-optimized (broad appeal)',
    controlDesc:
      '"whatever comes to mind" — lowest save rate in dataset: 63 saves (0.38%), 16,488 views, ~0 measurable follows',
    variantDesc:
      '"had to do it again" — highest save count: 7,834 saves (1.21%), 645,492 views, 4,118 follows',
    result: 'Every 1,000 saves generated ~526 follows on average across top posts. Save rate correlates more strongly with follows than like rate.',
    keyLearning:
      'Saves signal "I want to return to this creator" — the strongest possible intent signal. Optimizing content for saves (technical depth, replay value, aspirational skill) drives compound growth better than optimizing for likes.',
    whatNext: 'Does adding a save CTA in the caption ("save this for your next practice session") increase save rate without hurting reach?',
    metrics: [
      { label: 'Saves → Follows ratio', value: '~526 follows per 1,000 saves', note: 'Top posts avg' },
      { label: 'Lowest save rate', control: '0.38%', variant: '1.21%', note: 'Post 6 vs Post 3' },
      { label: 'Lowest save post views', value: '16,488', note: 'Post 6 — broad tags, non-trending' },
      { label: 'Highest save post views', value: '645,492', note: 'Post 3 — niche tags, trending sound' },
    ],
  },
]

export const plannedExperiments = [
  {
    number: '005',
    title: 'One-word caption vs 3-word caption — does less copy mean more curiosity?',
    hypothesis: 'A single-word caption ("melody") will outperform a 3-word caption ("following the melody") by compressing the curiosity gap even further and forcing the viewer to watch longer to understand context.',
    variable: 'Caption word count (1 word vs 3–5 words)',
    status: 'PLANNED' as ExperimentStatus,
  },
  {
    number: '006',
    title: 'Save CTA in caption — does asking for saves increase them without hurting reach?',
    hypothesis: 'Adding a soft save CTA ("save this for your next practice") will increase save rate by 20%+ without reducing non-follower reach, because the CTA primes intent without adding descriptive friction.',
    variable: 'Caption CTA presence (save prompt vs no CTA)',
    status: 'PLANNED' as ExperimentStatus,
  },
  {
    number: '007',
    title: 'Original sound with trending caption vs trending sound with same caption',
    hypothesis: 'Isolating the audio variable: matched captions and hashtags, only audio differs. If original sound still generates 0.75%+ follow rate, audio matters less than caption framing for conversion.',
    variable: 'Audio type only — all other variables held constant',
    status: 'PLANNED' as ExperimentStatus,
  },
]
