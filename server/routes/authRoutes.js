import { googleAuth } from "../controllers/auth";

const router = express.Router();

router.route("/google").get(googleAuth);
