import Stripe from "stripe";
import env from "dotenv";
env.config();
const stripe = Stripe(process.env.key_stripe);

export const createSession = async (req, res) => {

  const session = await stripe.checkout.sessions.create({
    line_items: req.body,
    mode: "payment",
    success_url: "http://localhost:4000/success",
    cancel_url: "http://localhost:4000/cancel",
  });

  return res.json(session);
};
