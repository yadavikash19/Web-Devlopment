// export const PORT= isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

//========================
// with ZOD-

import {z, ZodError} from "zod";

const portSchema= z.coerce.number().min(1).max(65535).default(3000);
export const PORT= portSchema.parse(process.env.PORT);