import React from 'react'

export type TipBody =
  | { type: 'paragraphs'; paragraphs: Array<string | React.ReactNode> }
  | { type: 'list'; items: string[] }

export interface Tip {
  num: string
  label: string
  headline: string
  body: TipBody
  wide: boolean
  indexLabel: string
}

export interface FAQSubsection {
  id: string
  headingId: string
  heading: string
  lead: string
  tips: Tip[]
}

// Judy will supply the real URL for this article
const SUZANNE_HREF = 'https://www.elitedaily.com/life/culture/types-clothes-photograph-best/1807331'

export const faqSubsections: FAQSubsection[] = [
  {
    id: 'wear',
    headingId: 'faq-wear-heading',
    heading: 'What To Wear For Your Headshot Session',
    lead: 'Clothing should compliment the most important feature of your headshot, your face and expression. It is best to have fitted clothes, but not too tight. You want to feel comfortable and on top of your game.',
    tips: [
      {
        num: '01',
        label: 'How Many Outfits To Bring',
        headline: 'Bring more than you think you need.',
        indexLabel: 'How Many Outfits',
        wide: false,
        body: {
          type: 'paragraphs',
          paragraphs: [
            'Women should bring 6+ outfits, three casual and three business. Having a number of outfits gives you the choice of seeing how they photograph. An outfit that looks really great on you may not photograph that well, whereas another outfit may really photograph well.',
            "Remember it’s a headshot so focus on tops and jackets. Men should bring at least two jackets and 3 or 4 shirts. The shirts should be well pressed especially if they are worn without a jacket. Bring at least 5 ties so we can pick one that really looks great photographed.",
          ],
        },
      },
      {
        num: '02',
        label: 'Patterns Or Solid Colors?',
        headline: 'Solids first — small prints can work.',
        indexLabel: 'Patterns or Solid Colors',
        wide: false,
        body: {
          type: 'paragraphs',
          paragraphs: [
            'Generally we recommend solid colors although small prints can work well also. The focus is on your face and expression. Large prints can grab the eye and take away the focus from the face.',
          ],
        },
      },
      {
        num: '03',
        label: 'What Colors Photograph Well?',
        headline: 'Bring colors you love.',
        indexLabel: 'What Colors Photograph Well',
        wide: false,
        body: {
          type: 'paragraphs',
          paragraphs: [
            'Bring both bold and muted colors, but especially bring some of your favorite colors. You usually know what colors best flatter your skin tones. But again, it is great to have a choice. We can try some different colors and see what photographs best for you.',
          ],
        },
      },
      {
        num: '04',
        label: 'A Great Outside Read',
        headline: 'Suzanne McKenzie on what photographs best.',
        indexLabel: 'Further Reading',
        wide: false,
        body: {
          type: 'paragraphs',
          paragraphs: [
            <>
              This is a great post in <em>Elite Daily</em> on what clothes photograph best. Suzanne has it nailed down!{' '}
              <a href={SUZANNE_HREF} style={{ color: '#666666', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                Read the article
              </a>
              .
            </>,
          ],
        },
      },
    ],
  },
  {
    id: 'hairmakeup',
    headingId: 'faq-hairmakeup-heading',
    heading: 'Hair & Makeup Tips For Your Headshot Session',
    lead: 'The focus is on your face and expression. Makeup and hair should complement your warm and authentic expression. Apply your makeup as you normally do with perhaps a bit more attention to detail. Authentic to who you are is the key.',
    tips: [
      {
        num: '01',
        label: 'Makeup Tips For Women',
        headline: 'Keep it close to your everyday look.',
        indexLabel: 'Makeup Tips for Women',
        wide: true,
        body: {
          type: 'list',
          items: [
            'Liquid foundation looks better than powder.',
            'Keep the lip color close to your natural lip color or 1 shade darker and glossy. No matte lipstick.',
            'No visible hard-edge lip liner.',
            'Go easy on the blush/bronzer.',
            'Keep eyes looking defined but natural. Soft blended eyeliner. No hard-edge liquid eyeliner.',
            'Neutral color eyeshadow is usually best. No lines of demarcation or heavy smoked-out eyeshadow.',
            'Wear mascara and curl your lashes. They show up great in photographs.',
            'Be sure and drink lots of water to keep your skin well hydrated.',
            'And don’t forget to get a good night’s sleep the night before to make sure that your skin is “camera ready.”',
          ],
        },
      },
      {
        num: '02',
        label: 'Hair Tips For Women',
        headline: 'Style it the way you normally would.',
        indexLabel: 'Hair Tips for Women',
        wide: false,
        body: {
          type: 'list',
          items: [
            'Style your hair in the manner you normally would.',
            'If you want to have your hair cut for the session, please do it at least several days before your session.',
            'If you color your hair, make sure roots are touched up before your session.',
          ],
        },
      },
      {
        num: '03',
        label: 'Hair Tips For Men',
        headline: 'Bring your products to the session.',
        indexLabel: 'Hair Tips for Men',
        wide: false,
        body: {
          type: 'list',
          items: [
            'Style your hair in the manner you normally would.',
            'If you want to have your hair cut for the session, please do it at least several days before your session.',
            'Bring your hair products with you to the session. This will allow you to change up your look during the session.',
          ],
        },
      },
      {
        num: '04',
        label: 'Makeup & Hair Artist Recommendations',
        headline: 'I can connect you with a pro.',
        indexLabel: 'Artist Recommendations',
        wide: true,
        body: {
          type: 'paragraphs',
          paragraphs: [
            'Professional make up and hair can have a big impact on your headshot. Cost usually runs around $150. I can provide you with names of several professional make up and hair artists if you wish to have your make up and hair done for your headshot session.',
          ],
        },
      },
    ],
  },
]

export function renderBody(
  body: TipBody,
  openSansClass: string,
  twoCol: boolean
): React.ReactNode {
  if (body.type === 'paragraphs') {
    return body.paragraphs.map((p, i) => (
      <p
        key={i}
        className={openSansClass}
        style={{ fontSize: '15px', lineHeight: 1.9, color: '#666666', margin: i > 0 ? '10px 0 0' : 0 }}
      >
        {p}
      </p>
    ))
  }
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        ...(twoCol ? { columnCount: 2, columnGap: '40px' } : {}),
      }}
    >
      {body.items.map((item, i) => (
        <li
          key={i}
          className={openSansClass}
          style={{
            fontSize: '15px',
            lineHeight: 1.9,
            color: '#666666',
            paddingLeft: '22px',
            position: 'relative',
            marginBottom: '2px',
            breakInside: 'avoid',
          }}
        >
          <span style={{ position: 'absolute', left: 0, color: '#999999' }}>–</span>
          {item}
        </li>
      ))}
    </ul>
  )
}
