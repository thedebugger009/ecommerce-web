export const store = { name: 'FreshNest Market', tagline: 'Thoughtfully fresh, delivered with care.', phone: '+91 98765 43210', email: 'hello@freshnest.market', address: '12 Market Lane, Indiranagar, Bengaluru', freeDeliveryAt: 799, deliveryFee: 49, currency: 'INR' }
export const categories = [
  { slug:'eggs', name:'Farm Eggs', image:'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=85', description:'Farm-fresh eggs, carefully packed.' },
  { slug:'chicken', name:'Fresh Chicken', image:'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=85', description:'Cleaned and cut to order.' },
  { slug:'mutton', name:'Premium Mutton', image:'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=800&q=85', description:'Tender cuts for every recipe.' },
  { slug:'fish', name:'Seafood', image:'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=800&q=85', description:'Coastal freshness at your door.' },
  { slug:'other', name:'Kitchen Essentials', image:'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=85', description:'Fresh extras for every kitchen.' }
]
const photo = {
  eggs:'https://images.unsplash.com/photo-1498654077810-12c1c1d76cdb?auto=format&fit=crop&w=1000&q=85', brown:'https://images.unsplash.com/photo-1569288052389-dac9b01c9c05?auto=format&fit=crop&w=1000&q=85', chicken:'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=1000&q=85', mutton:'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=1000&q=85', fish:'https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=1000&q=85', prawn:'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=85', dairy:'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=1000&q=85', herbs:'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1000&q=85' }
const make = (id, name, category, image, variants, opts={}) => ({ id, slug:name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-$/,''), name, category, image, gallery:[image], variants, description:opts.description || `Fresh ${name.toLowerCase()}, selected with care and packed hygienically.`, details:opts.details || 'Prepared fresh for your order. Product appearance may vary naturally.', label:opts.label, stock:opts.stock ?? true, attributes:opts.attributes || ['Hygienically packed','Freshly sourced'], storage:opts.storage || 'Keep refrigerated and consume promptly.' })
export const products = [
  make('p01','Classic White Eggs','eggs',photo.eggs,[['1 egg',9],['6 eggs',54],['12 eggs',104],['30-egg tray',255]],{label:'Bestseller',attributes:['Farm fresh','Rich in protein','Vegetarian feed'],storage:'Store in a cool, dry place. Refrigerate after opening tray.'}),
  make('p02','Brown Country Eggs','eggs',photo.brown,[['6 eggs',78],['12 eggs',150],['30-egg tray',365]],{label:'Popular'}),
  make('p03','Omega-3 Enriched Eggs','eggs',photo.eggs,[['6 eggs',96],['12 eggs',185]],{label:'New arrival'}),
  make('p04','Quail Eggs','eggs',photo.brown,[['12 eggs',110],['24 eggs',205]],{stock:false,description:'Sample listing currently marked unavailable for this frontend demonstration.'}),
  make('p05','Chicken Curry Cut','chicken',photo.chicken,[['250 g',105],['500 g',205],['1 kg',395]],{label:'Bestseller',attributes:['Skinless','Bone-in','Cut for curries']}),
  make('p06','Chicken Breast Boneless','chicken',photo.chicken,[['250 g',145],['500 g',280],['1 kg',545]],{label:'Lean pick',attributes:['Boneless','Skinless','High protein']}),
  make('p07','Chicken Drumsticks','chicken',photo.chicken,[['500 g',225],['1 kg',430]],{}),
  make('p08','Chicken Mince','chicken',photo.chicken,[['250 g',145],['500 g',275]],{}),
  make('p09','Goat Mutton Curry Cut','mutton',photo.mutton,[['250 g',265],['500 g',515],['1 kg',995]],{label:'Premium',attributes:['Tender goat meat','Bone-in','Curry cut']}),
  make('p10','Goat Mutton Boneless','mutton',photo.mutton,[['250 g',345],['500 g',675],['1 kg',1320]],{}),
  make('p11','Mutton Keema','mutton',photo.mutton,[['250 g',325],['500 g',640]],{}),
  make('p12','Freshwater Rohu','fish',photo.fish,[['500 g',225],['1 kg',430]],{label:'Catch of the day',attributes:['Cleaned','Steaks','Freshwater fish']}),
  make('p13','Seer Fish Steaks','fish',photo.fish,[['500 g',585],['1 kg',1140]],{label:'Premium'}),
  make('p14','Large Tiger Prawns','fish',photo.prawn,[['500 g',495],['1 kg',965]],{}),
  make('p15','Paneer - Fresh Malai','other',photo.dairy,[['200 g',105],['500 g',245]],{label:'Fresh today',storage:'Keep refrigerated. Consume within 2 days.'}),
  make('p16','Coriander & Mint Bundle','other',photo.herbs,[['1 bundle',35],['2 bundles',65]],{label:'Kitchen essential'})
]
export const findProduct = slug => products.find(p => p.slug === slug)
