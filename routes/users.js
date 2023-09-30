/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /create:
 *   post:
 *     summary: Create a new book
 *     tags: [create]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '{#/components/schemas/Book}'
 *              
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 *
 */