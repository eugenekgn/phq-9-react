import express from 'express';
import { phq9Validation } from '../../common/validation/phq9';
import Phq9Model from '../models/phq9';

const router = express.Router();

router.post('/', (req, res) => {
  const { errors, isValid } = phq9Validation(req.body);
	if (isValid) {
		const {  } = req.body;

		Phq9Model.forge({
		
		}, {
				hasTimestamps: true
			})
			.save()
			.then(form => res.json({ success: true }))
			.catch(err => res.status(500).json({ error: err }))

	} else {
		res.status(400).json(errors);
	}
});

export default router;