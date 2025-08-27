export type Product = {
  id: string;
  name: string;
  description: string;
  price: number; // Price in EGP as a number
  currency: string;
  image: string;
  dataAiHint: string;
};

export const products: Product[] = [
  {
    id: "prod_001",
    name: "منتج رائع 1",
    description: "هذا وصف للمنتج الأول. إنه يوفر جودة وقيمة رائعة.",
    price: 150,
    currency: "EGP",
    image: "https://picsum.photos/600/400?random=1",
    dataAiHint: "modern gadget",
  },
  {
    id: "prod_002",
    name: "منتج متميز 2",
    description: "وصف المنتج الثاني. مصمم خصيصًا لتلبية احتياجاتك.",
    price: 250,
    currency: "EGP",
    image: "https://picsum.photos/600/400?random=2",
    dataAiHint: "stylish apparel",
  },
  {
    id: "prod_003",
    name: "منتج فاخر 3",
    description: "المنتج الثالث هو قمة الفخامة والابتكار. تجربة لا مثيل لها.",
    price: 500,
    currency: "EGP",
    image: "https://picsum.photos/600/400?random=3",
    dataAiHint: "gourmet food",
  },
];
