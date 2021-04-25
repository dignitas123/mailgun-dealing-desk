"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lambda_tester_1 = __importDefault(require("lambda-tester"));
const chai_1 = require("chai");
const app_1 = require("../app");
const booksMock = __importStar(require("./books.mock"));
const books_1 = require("../app/model/books");
const sinon_1 = __importDefault(require("sinon"));
describe("FindOne [GET]", () => {
    it("success", () => {
        try {
            const s = sinon_1.default.mock(books_1.books);
            s.expects("findOne").atLeast(1).atMost(3).resolves(booksMock.findOne);
            return lambda_tester_1.default(app_1.findOne)
                .event({ pathParameters: { id: 25768396 } })
                .expectResult((result) => {
                chai_1.expect(result.statusCode).to.equal(200);
                const body = JSON.parse(result.body);
                chai_1.expect(body.code).to.equal(0);
                s.verify();
                s.restore();
            });
        }
        catch (err) {
            console.log(err);
        }
    });
    it("error", () => {
        try {
            const s = sinon_1.default.mock(books_1.books);
            s.expects("findOne").rejects(booksMock.castError);
            return lambda_tester_1.default(app_1.findOne)
                .event({ pathParameters: { id: 25768396 } })
                .expectResult((result) => {
                chai_1.expect(result.statusCode).to.equal(200);
                const body = JSON.parse(result.body);
                chai_1.expect(body.code).to.equal(1000);
                s.restore();
            });
        }
        catch (err) {
            console.log(err);
        }
    });
});
describe("Find [GET]", () => {
    it("success", () => {
        const s = sinon_1.default.mock(books_1.books);
        s.expects("find").resolves(booksMock.find);
        return lambda_tester_1.default(app_1.find)
            .event({})
            .expectResult((result) => {
            chai_1.expect(result.statusCode).to.equal(200);
            const body = JSON.parse(result.body);
            chai_1.expect(body.code).to.equal(0);
            s.restore();
        });
    });
    it("error", () => {
        const s = sinon_1.default.mock(books_1.books);
        s.expects("find").rejects(booksMock.findError);
        return lambda_tester_1.default(app_1.find)
            .event({})
            .expectResult((result) => {
            chai_1.expect(result.statusCode).to.equal(200);
            const body = JSON.parse(result.body);
            chai_1.expect(body.code).to.equal(1000);
            s.restore();
        });
    });
});
describe("Create [POST]", () => {
    it("success", () => {
        const s = sinon_1.default.mock(books_1.books);
        s.expects("create").resolves(booksMock.create);
        return lambda_tester_1.default(app_1.create)
            .event({
            body: JSON.stringify({
                name: "Node.js：来一打 C++ 扩展",
                id: 30247892,
            }),
        })
            .expectResult((result) => {
            chai_1.expect(result.statusCode).to.equal(200);
            const body = JSON.parse(result.body);
            chai_1.expect(body.code).to.equal(0);
            s.restore();
        });
    });
    it("error", () => {
        const s = sinon_1.default.mock(books_1.books);
        s.expects("create").rejects(booksMock.createError);
        return lambda_tester_1.default(app_1.create)
            .event({
            body: JSON.stringify({
                name: "Node.js：来一打 C++ 扩展",
                id: 30247892,
            }),
        })
            .expectResult((result) => {
            chai_1.expect(result.statusCode).to.equal(200);
            const body = JSON.parse(result.body);
            chai_1.expect(body.code).to.equal(1000);
            s.restore();
        });
    });
});
describe("Update [PUT]", () => {
    it("success", () => {
        const s = sinon_1.default.mock(books_1.books);
        s.expects("findOneAndUpdate").resolves(booksMock.update);
        return lambda_tester_1.default(app_1.update)
            .event({
            pathParameters: { id: 30247892 },
            body: JSON.stringify({
                name: "Node.js：来一打 C++ 扩展",
                description: "阅读《Node.js：来一打 C++ 扩展》，相当于同时学习Chrome V8 开发、libuv 开发以及 Node.js 的原生 C++ 扩展开发知识，非常值得！",
            }),
        })
            .expectResult((result) => {
            chai_1.expect(result.statusCode).to.equal(200);
            const body = JSON.parse(result.body);
            chai_1.expect(body.code).to.equal(0);
            s.restore();
        });
    });
    it("error", () => {
        const s = sinon_1.default.mock(books_1.books);
        s.expects("findOneAndUpdate").rejects(booksMock.castError);
        return lambda_tester_1.default(app_1.update)
            .event({
            pathParameters: { id: "30247892_" },
            body: JSON.stringify({
                name: "Node.js：来一打 C++ 扩展",
                description: "阅读《Node.js：来一打 C++ 扩展》，相当于同时学习Chrome V8 开发、libuv 开发以及 Node.js 的原生 C++ 扩展开发知识，非常值得！",
            }),
        })
            .expectResult((result) => {
            chai_1.expect(result.statusCode).to.equal(200);
            const body = JSON.parse(result.body);
            chai_1.expect(body.code).to.equal(1000);
            s.restore();
        });
    });
});
describe("DeleteOne [Delete]", () => {
    it("success", () => {
        const s = sinon_1.default.mock(books_1.books);
        s.expects("deleteOne").resolves(booksMock.deleteOne);
        return lambda_tester_1.default(app_1.deleteOne)
            .event({ pathParameters: { id: 30247892 } })
            .expectResult((result) => {
            chai_1.expect(result.statusCode).to.equal(200);
            const body = JSON.parse(result.body);
            chai_1.expect(body.code).to.equal(0);
            s.restore();
        });
    });
    it("deletedCount === 0", () => {
        const s = sinon_1.default.mock(books_1.books);
        s.expects("deleteOne").resolves(booksMock.deletedCount);
        return lambda_tester_1.default(app_1.deleteOne)
            .event({ pathParameters: { id: 30247892 } })
            .expectResult((result) => {
            chai_1.expect(result.statusCode).to.equal(200);
            const body = JSON.parse(result.body);
            chai_1.expect(body.code).to.equal(1010);
            s.restore();
        });
    });
    it("error", () => {
        const s = sinon_1.default.mock(books_1.books);
        s.expects("deleteOne").rejects(booksMock.castError);
        return lambda_tester_1.default(app_1.deleteOne)
            .event({ pathParameters: { id: "30247892_" } })
            .expectResult((result) => {
            chai_1.expect(result.statusCode).to.equal(200);
            const body = JSON.parse(result.body);
            chai_1.expect(body.code).to.equal(1000);
            s.restore();
        });
    });
});
//# sourceMappingURL=books.test.js.map