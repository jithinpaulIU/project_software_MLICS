const express = require("express");
const router = express.Router();
const DoctorController = require("../controllers/doctorController");
const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");

router.use(authMiddleware);
router.use(roleMiddleware(["Doctor"]));

// Labs
router.get("/labs", DoctorController.getLabs);

// OTP
router.post("/user/validateuseremail", DoctorController.requestOTP);
router.post("/user/authenticateuser", DoctorController.submitOTP);

// Tests
router.get("/lab/Testlist", DoctorController.getTestResults);
router.post("/lab/TestResult", DoctorController.getTestResult);

// Authentication request
router.post("/auth/request", DoctorController.requestAuthentication);

module.exports = router;
