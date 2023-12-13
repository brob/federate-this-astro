export const products = [
  {
    id: 1,
    slug: "face-serum",
    name: "face serum",
    price: 199,
    ingredients:
      "snail slime, benzyl salicylate, hydroxyethylpiperazine ethane sulfonic acid, triethanolamine, snail slime, benzyl salicylate, hydroxyethylpiperazine ethane sulfonic acid, triethanolamine.",
    description:
      "Indicated for the treatment of wrinkles in the periocular area and blemish of the bags; based on snail slime, hyaluronic acid, pre and probiotics. Snail slime: Nourishing, regenerating and antioxidant properties. It also has film-forming properties such as: proteins, mucopolysaccharides, allantoin and glycolic acid; that make the skin soft, healthy, hydrated, smooth, smooth, silky; preventing the formation of skin spots and the accumulation of impurities.",
    shortDescription:
      "This calming serum revitalizes the skin like never before.",
    stock: 34,
    images: [
      {
        url: "https://federate-this-astro.vercel.app/skncre/face_serum_1.jpg",
        alt: "Face serum Image 1",
      },
      {
        url: "https://federate-this-astro.vercel.app/skncre/face_serum_2.jpg",
        alt: "Face serum Image 2",
      },
    ],
  },
  {
    id: 2,
    slug: "face-cream",
    name: "face cream",
    price: 355,
    ingredients:
      "aqua, glycerin, butylene glycol, hydrogenated coco-glycerides, glyceryl stearate se, caprylic/capric triglyceride, dicaprylyl ether, phenyl trimethicone",
    description:
      "Light and evanescent texture, with a fresh and pleasant touch. The basic formula of two main ingredients known for a long time for their functional properties: Pure Helicine and Hyaluronic Acid. Suitable for all skin types: dry, combination, and oily. Snail slime: Nourishing, regenerating, and antioxidant properties. It also has film-forming properties such as proteins, mucopolysaccharides, allantoin, and glycolic acid; that make the skin soft, healthy, hydrated, smooth, smooth, silky. Prevents the formation of skin spots (light and dark), pimples, stretch marks, and scars, and prevents the accumulation of blemishes.",
    shortDescription:
      "Discover the reactivating, cooling night cream to stimulate the skin overnight so you wake up with a rosy glow.",
    stock: 6,
    images: [
      {
        url: "https://federate-this-astro.vercel.app/skncre/face_cream_1.jpg",
        alt: "Face cream Image 1",
      },
      {
        url: "https://federate-this-astro.vercel.app/skncre/face_cream_2.png",
        alt: "Face cream Image 2",
      },
    ],
  },
  {
    id: 3,
    slug: "eye-contour",
    name: "eye contour",
    price: 405,
    ingredients:
      "aqua, propylene glycole, isopropyl myristate, snail secretion filtrate, hyaluronic acid, acetyl hexapeptide-8, acetyl heptapeptide-4, polymnia sonchifolia root juice",
    description:
      "Containing face cream, serum and eye contour; ideal for an excellent beauty routine. Three items with one purchase. Also perfect as a gift box. Nourishing, regenerating and antioxidant properties. It also has film-forming properties such as proteins, mucopolysaccharides, allantoin and glycolic acid; that make the skin soft, healthy, hydrated, smooth, smooth, silky; prevents the formation of skin spots (light and dark), pimples, stretch marks, scars and preventing the accumulation of blemishes.",
    shortDescription:
      "Say goodbye to bags, blemish and wrinkles in the periocular area.",
    stock: 3,
    images: [
      {
        url: "https://federate-this-astro.vercel.app/skncre/eye_contour_1.jpg",
        alt: "Eye contour Image 1",
      },
      {
        url: "https://federate-this-astro.vercel.app/skncre/eye_contour_2.jpg",
        alt: "Eye contour Image 2",
      },
    ],
  },
  {
    id: 4,
    slug: "bundle",
    name: "skncre bundle",
    price: 999,
    ingredients: "",
    description:
      "Indicated for the treatment of wrinkles in the periocular area and blemish of the bags; based on snail slime, hyaluronic acid, pre and probiotics. Snail slime: Nourishing, regenerating and antioxidant properties. It also has film-forming properties such as: proteins, mucopolysaccharides, allantoin and glycolic acid; that make the skin soft, healthy, hydrated, smooth, smooth, silky; preventing the formation of skin spots and the accumulation of impurities.",
    shortDescription:
      "A travel-size cream, contour, and serum, presented in a signature silk-white pouch.",
    stock: 4,
    images: [
      {
        url: "https://federate-this-astro.vercel.app/skncre/bundle_1.png",
        alt: "Bundle Image 1",
      },
      {
        url: "https://federate-this-astro.vercel.app/skncre/bundle_2.png",
        alt: "Bundle Image 2",
      },
    ],
  },
];

export const relatedProducts = [
  {
    id: 1,
    products: [
      {
        id: 2,
        slug: "face-cream",
        name: "face cream",
        price: 355,
        ingredients:
          "aqua, glycerin, butylene glycol, hydrogenated coco-glycerides, glyceryl stearate se, caprylic/capric triglyceride, dicaprylyl ether, phenyl trimethicone",
        description:
          "Light and evanescent texture, with a fresh and pleasant touch. The basic formula of two main ingredients known for a long time for their functional properties: Pure Helicine and Hyaluronic Acid. Suitable for all skin types: dry, combination, and oily. Snail slime: Nourishing, regenerating, and antioxidant properties. It also has film-forming properties such as proteins, mucopolysaccharides, allantoin, and glycolic acid; that make the skin soft, healthy, hydrated, smooth, smooth, silky. Prevents the formation of skin spots (light and dark), pimples, stretch marks, and scars, and prevents the accumulation of blemishes.",
        shortDescription:
          "Discover the reactivating, cooling night cream to stimulate the skin overnight so you wake up with a rosy glow.",
        stock: 6,
        images: [
          {
            url: "https://federate-this-astro.vercel.app/skncre/face_cream_1.jpg",
            alt: "Face cream Image 1",
          },
          {
            url: "https://federate-this-astro.vercel.app/skncre/face_cream_2.png",
            alt: "Face cream Image 2",
          },
        ],
      },

      {
        id: 4,
        slug: "bundle",
        name: "skncre bundle",
        price: 999,
        ingredients: "",
        description:
          "Indicated for the treatment of wrinkles in the periocular area and blemish of the bags; based on snail slime, hyaluronic acid, pre and probiotics. Snail slime: Nourishing, regenerating and antioxidant properties. It also has film-forming properties such as: proteins, mucopolysaccharides, allantoin and glycolic acid; that make the skin soft, healthy, hydrated, smooth, smooth, silky; preventing the formation of skin spots and the accumulation of impurities.",
        shortDescription:
          "A travel-size cream, contour, and serum, presented in a signature silk-white pouch.",
        stock: 4,
        images: [
          {
            url: "https://federate-this-astro.vercel.app/skncre/bundle_1.png",
            alt: "Bundle Image 1",
          },
          {
            url: "https://federate-this-astro.vercel.app/skncre/bundle_2.png",
            alt: "Bundle Image 2",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    products: [
      {
        id: 1,
        slug: "face-serum",
        name: "face serum",
        price: 199,
        ingredients:
          "snail slime, benzyl salicylate, hydroxyethylpiperazine ethane sulfonic acid, triethanolamine, snail slime, benzyl salicylate, hydroxyethylpiperazine ethane sulfonic acid, triethanolamine.",
        description:
          "Indicated for the treatment of wrinkles in the periocular area and blemish of the bags; based on snail slime, hyaluronic acid, pre and probiotics. Snail slime: Nourishing, regenerating and antioxidant properties. It also has film-forming properties such as: proteins, mucopolysaccharides, allantoin and glycolic acid; that make the skin soft, healthy, hydrated, smooth, smooth, silky; preventing the formation of skin spots and the accumulation of impurities.",
        shortDescription:
          "This calming serum revitalizes the skin like never before.",
        stock: 34,
        images: [
          {
            url: "https://federate-this-astro.vercel.app/skncre/face_serum_1.jpg",
            alt: "Face serum Image 1",
          },
          {
            url: "https://federate-this-astro.vercel.app/skncre/face_serum_2.jpg",
            alt: "Face serum Image 2",
          },
        ],
      },
      {
        id: 4,
        slug: "bundle",
        name: "skncre bundle",
        price: 999,
        ingredients: "",
        description:
          "Indicated for the treatment of wrinkles in the periocular area and blemish of the bags; based on snail slime, hyaluronic acid, pre and probiotics. Snail slime: Nourishing, regenerating and antioxidant properties. It also has film-forming properties such as: proteins, mucopolysaccharides, allantoin and glycolic acid; that make the skin soft, healthy, hydrated, smooth, smooth, silky; preventing the formation of skin spots and the accumulation of impurities.",
        shortDescription:
          "A travel-size cream, contour, and serum, presented in a signature silk-white pouch.",
        stock: 4,
        images: [
          {
            url: "https://federate-this-astro.vercel.app/skncre/bundle_1.png",
            alt: "Bundle Image 1",
          },
          {
            url: "https://federate-this-astro.vercel.app/skncre/bundle_2.png",
            alt: "Bundle Image 2",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    products: [
      {
        id: 1,
        slug: "face-serum",
        name: "face serum",
        price: 199,
        ingredients:
          "snail slime, benzyl salicylate, hydroxyethylpiperazine ethane sulfonic acid, triethanolamine, snail slime, benzyl salicylate, hydroxyethylpiperazine ethane sulfonic acid, triethanolamine.",
        description:
          "Indicated for the treatment of wrinkles in the periocular area and blemish of the bags; based on snail slime, hyaluronic acid, pre and probiotics. Snail slime: Nourishing, regenerating and antioxidant properties. It also has film-forming properties such as: proteins, mucopolysaccharides, allantoin and glycolic acid; that make the skin soft, healthy, hydrated, smooth, smooth, silky; preventing the formation of skin spots and the accumulation of impurities.",
        shortDescription:
          "This calming serum revitalizes the skin like never before.",
        stock: 34,
        images: [
          {
            url: "https://federate-this-astro.vercel.app/skncre/face_serum_1.jpg",
            alt: "Face serum Image 1",
          },
          {
            url: "https://federate-this-astro.vercel.app/skncre/face_serum_2.jpg",
            alt: "Face serum Image 2",
          },
        ],
      },
      {
        id: 4,
        slug: "bundle",
        name: "skncre bundle",
        price: 999,
        ingredients: "",
        description:
          "Indicated for the treatment of wrinkles in the periocular area and blemish of the bags; based on snail slime, hyaluronic acid, pre and probiotics. Snail slime: Nourishing, regenerating and antioxidant properties. It also has film-forming properties such as: proteins, mucopolysaccharides, allantoin and glycolic acid; that make the skin soft, healthy, hydrated, smooth, smooth, silky; preventing the formation of skin spots and the accumulation of impurities.",
        shortDescription:
          "A travel-size cream, contour, and serum, presented in a signature silk-white pouch.",
        stock: 4,
        images: [
          {
            url: "https://federate-this-astro.vercel.app/skncre/bundle_1.png",
            alt: "Bundle Image 1",
          },
          {
            url: "https://federate-this-astro.vercel.app/skncre/bundle_2.png",
            alt: "Bundle Image 2",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    products: [
      {
        id: 1,
        slug: "face-serum",
        name: "face serum",
        price: 199,
        ingredients:
          "snail slime, benzyl salicylate, hydroxyethylpiperazine ethane sulfonic acid, triethanolamine, snail slime, benzyl salicylate, hydroxyethylpiperazine ethane sulfonic acid, triethanolamine.",
        description:
          "Indicated for the treatment of wrinkles in the periocular area and blemish of the bags; based on snail slime, hyaluronic acid, pre and probiotics. Snail slime: Nourishing, regenerating and antioxidant properties. It also has film-forming properties such as: proteins, mucopolysaccharides, allantoin and glycolic acid; that make the skin soft, healthy, hydrated, smooth, smooth, silky; preventing the formation of skin spots and the accumulation of impurities.",
        shortDescription:
          "This calming serum revitalizes the skin like never before.",
        stock: 34,
        images: [
          {
            url: "https://federate-this-astro.vercel.app/skncre/face_serum_1.jpg",
            alt: "Face serum Image 1",
          },
          {
            url: "https://federate-this-astro.vercel.app/skncre/face_serum_2.jpg",
            alt: "Face serum Image 2",
          },
        ],
      },
      {
        id: 3,
        slug: "eye-contour",
        name: "eye contour",
        price: 405,
        ingredients:
          "aqua, propylene glycole, isopropyl myristate, snail secretion filtrate, hyaluronic acid, acetyl hexapeptide-8, acetyl heptapeptide-4, polymnia sonchifolia root juice",
        description:
          "Containing face cream, serum and eye contour; ideal for an excellent beauty routine. Three items with one purchase. Also perfect as a gift box. Nourishing, regenerating and antioxidant properties. It also has film-forming properties such as proteins, mucopolysaccharides, allantoin and glycolic acid; that make the skin soft, healthy, hydrated, smooth, smooth, silky; prevents the formation of skin spots (light and dark), pimples, stretch marks, scars and preventing the accumulation of blemishes.",
        shortDescription:
          "Say goodbye to bags, blemish and wrinkles in the periocular area.",
        stock: 3,
        images: [
          {
            url: "https://federate-this-astro.vercel.app/skncre/eye_contour_1.jpg",
            alt: "Eye contour Image 1",
          },
          {
            url: "https://federate-this-astro.vercel.app/skncre/eye_contour_2.jpg",
            alt: "Eye contour Image 2",
          },
        ],
      },
    ],
  },
];
