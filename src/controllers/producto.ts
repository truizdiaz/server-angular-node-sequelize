import { Request, Response } from 'express';

export const getProducts = (req: Request, res: Response) => {

    res.json({
        msg: 'get Products'
    })
}

export const getProduct = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'get Product',
        id
    })
}

export const deleteProduct = (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        msg: 'delete Product',
        id
    })
}

export const postProduct = (req: Request, res: Response) => {
    const { body } = req;
    
    res.json({
        msg: 'post Product',
        body
    })
}

export const updateProduct = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    res.json({
        msg: 'Update Product',
        id,
        body
    })
}