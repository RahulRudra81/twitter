import { registerUser } from "../controllers/auth";
import { authUser } from "../controllers/auth";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/auth").post(validateToken, authUser);

module.exports = router;
