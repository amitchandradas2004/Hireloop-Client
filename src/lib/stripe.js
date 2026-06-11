import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
  'seeker_pro': "price_1Th56VEAQuzdQwJPqzvsrjQ3",
  'seeker_premimum': "price_1Th6wjEAQuzdQwJPktD1HCdq",
  'recruiter_growth': "price_1Th6xpEAQuzdQwJPbfEwSkS5",
  'recruiter_enterprise': "price_1Th6yUEAQuzdQwJPD4mSmn3V"
};
