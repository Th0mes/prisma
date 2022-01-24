import { Router } from 'express';
import { CreateCategoryController } from './controllers/CreateCategoryController';
import { CreateProductCategoryController } from './controllers/CreateProductCategoryController';
import { CreateProductController } from './controllers/CreateProductController';
import { CreateProductWithExistCategory } from './controllers/CreateProductWithExistCategory';
import { FindCategoryController } from './controllers/FindCategoryController';
import { FindProductController } from './controllers/FindProductController';

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductWithCategory = new CreateProductWithExistCategory();

const findProduct = new FindProductController();
const findCategory = new FindCategoryController();

router.post('/product', createProduct.handle);
router.post('/category', createCategory.handle);
router.post('/category_product', createProductCategory.handle);
router.post('/product_with_category', createProductWithCategory.handle);

router.get('/product/:id', findProduct.handle);
router.get('/category/:id', findCategory.handle);

export { router };
