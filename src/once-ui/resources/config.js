const baseURL = 'empati.org'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'emerald',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'custom',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'conservative',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Empati.org - Web Design & SEO',
    description: 'Sektörünün en iyi Web Design (Tasarım) ve SEO şirketi, Empati.'
}


// default open graph data
const og = {
    title: 'Empati.org - Web Design & SEO',
    description: 'Sektörünün en iyi Web Design (Tasarım) ve SEO şirketi, Empati.',
    type: 'website'
}

// default schema data
const schema = {
    logo: 'trademark/logo-dark.webp',
    type: 'Organization',
    name: 'Empati',
    description: 'Sektörünün en iyi Web Design (Tasarım) ve SEO şirketi, Empati.',
    email: 'iletisim@empati.org'
}

// social links
const social = {
    instagram: 'https://www.instagram.com/empatiweb',
    whatsapp: 'https://wa.me/+905432050200',
}

export { baseURL, style, meta, og, schema, social };