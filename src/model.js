import { auth } from "./models/auth";
import { register } from "./models/register";
import { profile } from "./models/profile";
import { membership } from "./models/membership";
import { orders } from "./models/orders";
import { partners } from "./models/partners";
import { authSocials } from "./models/authSocials";
import { events } from "./models/events";
import { tickets } from "./models/tickets";

export const model = {
	auth,
	register,
	profile,
	membership,
	orders,
	partners,
	socials: authSocials,
	events,
	tickets
}