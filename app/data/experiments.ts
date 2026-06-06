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

export const experiments: Experiment[] = [
  {
    id: 'exp-001',
    number: '001',
    title: '3-Word Caption vs Descriptive Caption',
    platform: 'Instagram',
    date: '2025',
    status: 'COMPLETED',
    winner: 'VARIANT WON',
    hypothesis:
      'Minimal 3-word captions will outperform descriptive captions by reducing friction and letting content speak for itself.',
    variableTested: 'Caption length and style',
    controlDesc: 'Descriptive caption with hashtags, non-trending sound',
    variantDesc: '3-word caption + trending sound + niche hashtags',
    result: '+3,818% more views on variant',
    keyLearning:
      'Caption minimalism removes cognitive friction — let the visual hook do the work.',
    whatNext: 'Test 0-word captions (emoji only) vs 3-word to find the floor of minimalism.',
    metrics: [
      { label: 'Views', control: '16,488', variant: '645,383' },
      { label: 'Difference', value: '+3,818%' },
      { label: 'Saves', control: '63', variant: '7,834' },
      { label: 'Shares', control: '5', variant: '8,237' },
    ],
  },
  {
    id: 'exp-002',
    number: '002',
    title: 'Trending Sound Impact on Non-Follower Reach',
    platform: 'Instagram',
    date: '2025',
    status: 'COMPLETED',
    winner: 'VARIANT WON',
    hypothesis:
      'Trending audio will push content to non-followers at significantly higher rates than original or non-trending audio.',
    variableTested: 'Audio selection (trending vs non-trending)',
    controlDesc: 'Non-trending sound → low non-follower reach',
    variantDesc: 'Trending sound → 395,395 views, 90.9% non-follower reach',
    result: '90.9% of all views came from non-followers',
    keyLearning:
      'Trending audio is a distribution mechanism, not just aesthetic — it forces algorithmic push to new audiences.',
    whatNext: 'Does audio trending-score tier (Top 50 vs Top 500) affect the non-follower ratio?',
    metrics: [
      { label: 'Non-follower reach', value: '90.9%' },
      { label: 'Follower reach', value: '9.1%' },
      { label: 'Accounts reached', value: '304,576' },
      { label: 'Follows generated', value: '2,213' },
    ],
  },
  {
    id: 'exp-003',
    number: '003',
    title: 'Save Rate vs Like Rate as Growth Signal',
    platform: 'Instagram',
    date: '2025',
    status: 'COMPLETED',
    winner: 'VARIANT WON',
    hypothesis:
      'Posts with high save rates will generate more algorithmic distribution than posts with high like rates alone.',
    variableTested: 'Content type optimized for saves vs likes',
    controlDesc: 'Standard performance post (high likes, moderate saves)',
    variantDesc: 'High-value educational drum content (high saves)',
    result: '2.34x more views correlating with 2.46x more saves',
    keyLearning:
      'Save rate is a stronger algorithmic signal than raw like count — design content people want to return to.',
    whatNext: 'Explicitly prompt saves in caption ("save for later") and measure uplift vs organic saves.',
    metrics: [
      { label: 'Views', control: '395,395', variant: '925,672', note: '+134%' },
      { label: 'Saves', control: '5,881', variant: '14,474', note: '+146%' },
      { label: 'Shares', control: '5,731', variant: '55', note: 'Anomaly — investigate' },
      { label: 'Follows', control: '2,213', variant: '26', note: 'Boosted post anomaly' },
    ],
  },
  {
    id: 'exp-004',
    number: '004',
    title: 'Niche Hashtag Stack vs Broad Hashtag Stack',
    platform: 'Instagram',
    date: '2025',
    status: 'COMPLETED',
    winner: 'VARIANT WON',
    hypothesis:
      'Niche drum-specific hashtags (#ghostnotes, #snare, #drumloop) will drive higher engagement rates than broad music hashtags.',
    variableTested: 'Hashtag specificity',
    controlDesc: 'Broad/mixed hashtags → lower engagement rate',
    variantDesc: 'Niche hashtags (#drums #drummer #snare #ghostnotes #drumloop)',
    result: 'All top 4 posts used niche hashtag stack',
    keyLearning:
      'Niche hashtags reach a smaller but highly engaged audience that saves and shares at significantly higher rates.',
    whatNext: 'Test zero hashtags vs niche stack to isolate the hashtag contribution from audio and caption variables.',
    metrics: [
      { label: 'Top post saves', value: '14,474' },
      { label: 'Top post shares', value: '8,237' },
      { label: 'Engagement rate', value: '16%+' },
      { label: 'Accounts engaged', value: '65,147' },
    ],
  },
]

export const plannedExperiments = [
  {
    number: '005',
    title: 'Does posting time affect non-follower reach rate?',
    hypothesis: 'Posting at 7pm EST vs 12pm EST will show a measurable difference in non-follower reach percentage within the first 24 hours.',
    variable: 'Post time (7pm EST vs 12pm EST)',
    status: 'PLANNED' as ExperimentStatus,
  },
  {
    number: '006',
    title: 'Does a CTA in caption increase profile visits without hurting reach?',
    hypothesis: 'Adding a soft CTA ("follow for more") to the caption will increase profile visits by 20%+ without reducing non-follower reach.',
    variable: 'Caption CTA presence',
    status: 'PLANNED' as ExperimentStatus,
  },
  {
    number: '007',
    title: 'Does cross-posting same day to IG and TT reduce per-platform performance?',
    hypothesis: 'Simultaneous cross-posting will reduce algorithmic performance on each platform vs staggered posting by 48 hours.',
    variable: 'Cross-post timing (same day vs staggered)',
    status: 'PLANNED' as ExperimentStatus,
  },
]
