import { Router } from 'express';

export default function users() {
    const router = Router();

    router
        .get('/', (req, res, next) => {
            res.json({
                id: 1,
                firstname: 'Matt',
                lastname: 'Morgan',
            });
        })
        .post(['/', '/:id'], (req, res, next) => {
            const params = req.params;
            const id = params.id;
            const queryParams = req.query;

        });

    return router;
}