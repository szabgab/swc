"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    node: function() {
        return _BodyNodesBuilder;
    },
    create: function() {
        return create;
    },
    trustBox: function() {
        return trustBox;
    },
    opener: function() {
        return opener;
    },
    stage: function() {
        return stage;
    },
    header: function() {
        return header;
    },
    source: function() {
        return source;
    },
    sources: function() {
        return sources;
    },
    seq: function() {
        return seq;
    }
});
const _class_private_field_get = require("@swc/helpers/_/_class_private_field_get");
const _class_private_field_init = require("@swc/helpers/_/_class_private_field_init");
const _class_private_field_set = require("@swc/helpers/_/_class_private_field_set");
const _export_star = require("@swc/helpers/_/_export_star");
const _interop_require_wildcard = require("@swc/helpers/_/_interop_require_wildcard");
const _AbstractBuilders = require("./AbstractBuilders");
const _Builderutils = require("./Builder.utils");
const _ElementBuilder = require("./ElementBuilder");
const _BodyNodesBuilder = /*#__PURE__*/ _interop_require_wildcard._(_export_star._(require("./BodyNodesBuilder"), exports));
const create = ()=>new BodyBuilder();
const trustBox = ()=>new TrustBoxBuilder();
const opener = ()=>new OpenerBuilder();
const stage = ()=>new BodyStageBuilder();
const header = ()=>new BodyHeaderBuilder();
const source = (nodes = [])=>new ArticleSourceBuilder(...nodes);
const sources = ()=>new ArticleSourcesBuilder();
const seq = {
    stage: ()=>new BodyStageSeqBuilder(),
    source: ()=>new ArticleSourceSeqBuilder()
};
var _stages = /*#__PURE__*/ new WeakMap(), _trustBox = /*#__PURE__*/ new WeakMap(), _disclaimer = /*#__PURE__*/ new WeakMap(), _articleSources = /*#__PURE__*/ new WeakMap();
class BodyBuilder extends _AbstractBuilders.AbstractBuilder {
    stages(...stages) {
        _class_private_field_set._(this, _stages, stages.map(_Builderutils.mapBuildArg));
        return this;
    }
    trustBox(trustBox) {
        _class_private_field_set._(this, _trustBox, (0, _Builderutils.mapBuildArg)(trustBox));
        return this;
    }
    disclaimer(disclaimer) {
        _class_private_field_set._(this, _disclaimer, disclaimer?.map(_Builderutils.mapBuildArg));
        return this;
    }
    articleSources(articleSources) {
        _class_private_field_set._(this, _articleSources, (0, _Builderutils.mapBuildArg)(articleSources));
        return this;
    }
    build() {
        return {
            stages: _class_private_field_get._(this, _stages),
            trustBox: _class_private_field_get._(this, _trustBox),
            disclaimer: _class_private_field_get._(this, _disclaimer),
            articleSources: _class_private_field_get._(this, _articleSources)
        };
    }
    constructor(...args){
        super(...args);
        _class_private_field_init._(this, _stages, {
            writable: true,
            value: []
        });
        _class_private_field_init._(this, _trustBox, {
            writable: true,
            value: undefined
        });
        _class_private_field_init._(this, _disclaimer, {
            writable: true,
            value: undefined
        });
        _class_private_field_init._(this, _articleSources, {
            writable: true,
            value: undefined
        });
    }
}
var _nodes = /*#__PURE__*/ new WeakMap(), _hidden = /*#__PURE__*/ new WeakMap();
class TrustBoxBuilder extends _AbstractBuilders.AbstractBuilder {
    nodes(nodes) {
        _class_private_field_set._(this, _nodes, nodes.map(_Builderutils.mapBuildArg));
        return this;
    }
    hidden(hidden) {
        _class_private_field_set._(this, _hidden, hidden.map(_Builderutils.mapBuildArg));
        return this;
    }
    build() {
        return {
            nodes: _class_private_field_get._(this, _nodes),
            hidden: _class_private_field_get._(this, _hidden)
        };
    }
    constructor(...args){
        super(...args);
        _class_private_field_init._(this, _nodes, {
            writable: true,
            value: []
        });
        _class_private_field_init._(this, _hidden, {
            writable: true,
            value: []
        });
    }
}
var _element = /*#__PURE__*/ new WeakMap();
class OpenerBuilder extends _AbstractBuilders.AbstractBuilder {
    element(element) {
        _class_private_field_set._(this, _element, (0, _Builderutils.mapBuildArg)(element));
        return this;
    }
    build() {
        return {
            element: _class_private_field_get._(this, _element)
        };
    }
    constructor(...args){
        super(...args);
        _class_private_field_init._(this, _element, {
            writable: true,
            value: (0, _ElementBuilder.image)().build()
        });
    }
}
var _nodes1 = /*#__PURE__*/ new WeakMap(), _header = /*#__PURE__*/ new WeakMap(), _companions = /*#__PURE__*/ new WeakMap(), _commercialsEndOfStage = /*#__PURE__*/ new WeakMap();
class BodyStageSeqBuilder extends _AbstractBuilders.AbstractSeqBuilder {
    nodes(nodes) {
        _class_private_field_set._(this, _nodes1, nodes.map(_Builderutils.mapBuildArgs));
        return this;
    }
    header(header) {
        _class_private_field_set._(this, _header, (0, _Builderutils.mapBuildArgs)(header ?? []));
        return this;
    }
    companions(companions) {
        _class_private_field_set._(this, _companions, companions.map(_Builderutils.mapBuildArgs));
        return this;
    }
    commercialsEndOfStage(commercialsEndOfStage) {
        _class_private_field_set._(this, _commercialsEndOfStage, commercialsEndOfStage.map(_Builderutils.mapBuildArgs));
        return this;
    }
    buildListItem(seqNextElement) {
        return {
            id: (0, _Builderutils.hash)("bodyStage", _class_private_field_get._(this, _nodes1), _class_private_field_get._(this, _companions), _class_private_field_get._(this, _commercialsEndOfStage), _class_private_field_get._(this, _header)),
            nodes: seqNextElement.array(_class_private_field_get._(this, _nodes1)),
            header: seqNextElement.maybe(_class_private_field_get._(this, _header)),
            companions: seqNextElement.array(_class_private_field_get._(this, _companions)),
            commercialsEndOfStage: seqNextElement.array(_class_private_field_get._(this, _commercialsEndOfStage))
        };
    }
    constructor(...args){
        super(...args);
        _class_private_field_init._(this, _nodes1, {
            writable: true,
            value: []
        });
        _class_private_field_init._(this, _header, {
            writable: true,
            value: undefined
        });
        _class_private_field_init._(this, _companions, {
            writable: true,
            value: []
        });
        _class_private_field_init._(this, _commercialsEndOfStage, {
            writable: true,
            value: []
        });
    }
}
var _seqBuilder = /*#__PURE__*/ new WeakMap();
class BodyStageBuilder extends _AbstractBuilders.AbstractBuilder {
    nodes(nodes) {
        _class_private_field_get._(this, _seqBuilder).nodes([
            nodes
        ]);
        return this;
    }
    header(header) {
        if (header) {
            _class_private_field_get._(this, _seqBuilder).header([
                header
            ]);
        }
        return this;
    }
    companions(companions) {
        _class_private_field_get._(this, _seqBuilder).companions([
            companions
        ]);
        return this;
    }
    commercialsEndOfStage(commercialsEndOfStage) {
        _class_private_field_get._(this, _seqBuilder).commercialsEndOfStage([
            commercialsEndOfStage
        ]);
        return this;
    }
    build() {
        return _class_private_field_get._(this, _seqBuilder).build();
    }
    constructor(...args){
        super(...args);
        _class_private_field_init._(this, _seqBuilder, {
            writable: true,
            value: new BodyStageSeqBuilder()
        });
    }
}
var _variant = /*#__PURE__*/ new WeakMap(), _opener = /*#__PURE__*/ new WeakMap();
class BodyHeaderBuilder extends _AbstractBuilders.AbstractBuilder {
    variant(variant) {
        _class_private_field_set._(this, _variant, variant);
        return this;
    }
    opener(opener) {
        _class_private_field_set._(this, _opener, (0, _Builderutils.mapBuildArg)(opener));
        return this;
    }
    build() {
        return {
            variant: _class_private_field_get._(this, _variant),
            opener: _class_private_field_get._(this, _opener)
        };
    }
    constructor(...args){
        super(...args);
        _class_private_field_init._(this, _variant, {
            writable: true,
            value: "full"
        });
        _class_private_field_init._(this, _opener, {
            writable: true,
            value: undefined
        });
    }
}
var _nodes2 = /*#__PURE__*/ new WeakMap();
class ArticleSourceSeqBuilder extends _AbstractBuilders.AbstractSeqBuilder {
    nodes(nodes) {
        _class_private_field_set._(this, _nodes2, nodes.map(_Builderutils.mapBuildArgs));
        return this;
    }
    buildListItem(seqNextElement) {
        const id = (0, _Builderutils.hash)("article-source", _class_private_field_get._(this, _nodes2));
        return {
            id,
            nodes: seqNextElement.array(_class_private_field_get._(this, _nodes2))
        };
    }
    constructor(...args){
        super(...args);
        _class_private_field_init._(this, _nodes2, {
            writable: true,
            value: []
        });
    }
}
var _seqBuilder1 = /*#__PURE__*/ new WeakMap();
class ArticleSourceBuilder extends _AbstractBuilders.AbstractBuilder {
    nodes(...nodes) {
        _class_private_field_get._(this, _seqBuilder1).nodes([
            nodes
        ]);
        return this;
    }
    build() {
        return _class_private_field_get._(this, _seqBuilder1).build();
    }
    constructor(...nodes){
        super();
        _class_private_field_init._(this, _seqBuilder1, {
            writable: true,
            value: new ArticleSourceSeqBuilder()
        });
        this.nodes(...nodes);
    }
}
var _nodes3 = /*#__PURE__*/ new WeakMap(), _hidden1 = /*#__PURE__*/ new WeakMap();
class ArticleSourcesBuilder extends _AbstractBuilders.AbstractBuilder {
    nodes(...nodes) {
        _class_private_field_set._(this, _nodes3, nodes.map(_Builderutils.mapBuildArg));
        return this;
    }
    hidden(...hidden) {
        _class_private_field_set._(this, _hidden1, hidden.map(_Builderutils.mapBuildArg));
        return this;
    }
    build() {
        return {
            nodes: _class_private_field_get._(this, _nodes3),
            hidden: _class_private_field_get._(this, _hidden1)
        };
    }
    constructor(...args){
        super(...args);
        _class_private_field_init._(this, _nodes3, {
            writable: true,
            value: []
        });
        _class_private_field_init._(this, _hidden1, {
            writable: true,
            value: []
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2lucHV0L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0QnVpbGRlciwgQWJzdHJhY3RTZXFCdWlsZGVyIH0gZnJvbSBcIi4vQWJzdHJhY3RCdWlsZGVyc1wiO1xuaW1wb3J0IHsgaGFzaCwgbWFwQnVpbGRBcmcsIG1hcEJ1aWxkQXJncyB9IGZyb20gXCIuL0J1aWxkZXIudXRpbHNcIjtcbmltcG9ydCB7IGltYWdlIH0gZnJvbSBcIi4vRWxlbWVudEJ1aWxkZXJcIjtcblxuaW1wb3J0IHR5cGUge1xuICAgIEJvZHksXG4gICAgQm9keVN0YWdlLFxuICAgIFRydXN0Qm94LFxuICAgIFJpY2hUZXh0LFxuICAgIE9wZW5lcixcbiAgICBCb2R5SGVhZGVyLFxuICAgIFN0YWdlLFxuICAgIEFydGljbGVTb3VyY2UsXG4gICAgQXJ0aWNsZVNvdXJjZXMsXG59IGZyb20gXCJAcGFwZXIvbW9kZWxzXCI7XG5pbXBvcnQgdHlwZSB7XG4gICAgQnVpbGRBcmcsXG4gICAgQnVpbGRBcmdzLFxuICAgIENyZWF0ZUJ1aWxkZXIsXG4gICAgU2VxRWxlbWVudCxcbiAgICBTZXFOZXh0RWxlbWVudENvbnZlcnRlcixcbn0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2Uge0J1aWxkZXIuYm9keS5ub2RlLmltZygpfVxuICovXG5leHBvcnQgKiBmcm9tIFwiLi9Cb2R5Tm9kZXNCdWlsZGVyXCI7XG5leHBvcnQgKiBhcyBub2RlIGZyb20gXCIuL0JvZHlOb2Rlc0J1aWxkZXJcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZTogQ3JlYXRlQnVpbGRlcjxCb2R5QnVpbGRlcj4gPSAoKSA9PiBuZXcgQm9keUJ1aWxkZXIoKTtcbmV4cG9ydCBjb25zdCB0cnVzdEJveDogQ3JlYXRlQnVpbGRlcjxUcnVzdEJveEJ1aWxkZXI+ID0gKCkgPT5cbiAgICBuZXcgVHJ1c3RCb3hCdWlsZGVyKCk7XG5leHBvcnQgY29uc3Qgb3BlbmVyOiBDcmVhdGVCdWlsZGVyPE9wZW5lckJ1aWxkZXI+ID0gKCkgPT4gbmV3IE9wZW5lckJ1aWxkZXIoKTtcbmV4cG9ydCBjb25zdCBzdGFnZTogQ3JlYXRlQnVpbGRlcjxCb2R5U3RhZ2VCdWlsZGVyPiA9ICgpID0+XG4gICAgbmV3IEJvZHlTdGFnZUJ1aWxkZXIoKTtcbmV4cG9ydCBjb25zdCBoZWFkZXI6IENyZWF0ZUJ1aWxkZXI8Qm9keUhlYWRlckJ1aWxkZXI+ID0gKCkgPT5cbiAgICBuZXcgQm9keUhlYWRlckJ1aWxkZXIoKTtcbmV4cG9ydCBjb25zdCBzb3VyY2U6IENyZWF0ZUJ1aWxkZXI8XG4gICAgQXJ0aWNsZVNvdXJjZUJ1aWxkZXIsXG4gICAgQnVpbGRBcmdzPFJpY2hUZXh0Lk5vZGU+XG4+ID0gKG5vZGVzOiBCdWlsZEFyZ3M8UmljaFRleHQuTm9kZT4gPSBbXSkgPT5cbiAgICBuZXcgQXJ0aWNsZVNvdXJjZUJ1aWxkZXIoLi4ubm9kZXMpO1xuZXhwb3J0IGNvbnN0IHNvdXJjZXM6IENyZWF0ZUJ1aWxkZXI8QXJ0aWNsZVNvdXJjZXNCdWlsZGVyPiA9ICgpID0+XG4gICAgbmV3IEFydGljbGVTb3VyY2VzQnVpbGRlcigpO1xuXG5leHBvcnQgY29uc3Qgc2VxID0ge1xuICAgIHN0YWdlOiAoKCkgPT5cbiAgICAgICAgbmV3IEJvZHlTdGFnZVNlcUJ1aWxkZXIoKSkgYXMgQ3JlYXRlQnVpbGRlcjxCb2R5U3RhZ2VTZXFCdWlsZGVyPixcbiAgICBzb3VyY2U6ICgoKSA9PlxuICAgICAgICBuZXcgQXJ0aWNsZVNvdXJjZVNlcUJ1aWxkZXIoKSkgYXMgQ3JlYXRlQnVpbGRlcjxBcnRpY2xlU291cmNlU2VxQnVpbGRlcj4sXG59IGFzIGNvbnN0O1xuXG5jbGFzcyBCb2R5QnVpbGRlciBleHRlbmRzIEFic3RyYWN0QnVpbGRlcjxCb2R5PiB7XG4gICAgI3N0YWdlczogQm9keVN0YWdlW10gPSBbXTtcbiAgICAjdHJ1c3RCb3g/OiBUcnVzdEJveCA9IHVuZGVmaW5lZDtcbiAgICAjZGlzY2xhaW1lcj86IFJpY2hUZXh0Lk5vZGVbXSA9IHVuZGVmaW5lZDtcbiAgICAjYXJ0aWNsZVNvdXJjZXM/OiBBcnRpY2xlU291cmNlcyA9IHVuZGVmaW5lZDtcblxuICAgIHN0YWdlcyguLi5zdGFnZXM6IEJ1aWxkQXJnczxCb2R5U3RhZ2U+KTogdGhpcyB7XG4gICAgICAgIHRoaXMuI3N0YWdlcyA9IHN0YWdlcy5tYXAobWFwQnVpbGRBcmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0cnVzdEJveCh0cnVzdEJveD86IEJ1aWxkQXJnPFRydXN0Qm94Pik6IHRoaXMge1xuICAgICAgICB0aGlzLiN0cnVzdEJveCA9IG1hcEJ1aWxkQXJnKHRydXN0Qm94KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGlzY2xhaW1lcihkaXNjbGFpbWVyPzogQnVpbGRBcmdzPFJpY2hUZXh0Lk5vZGU+KTogdGhpcyB7XG4gICAgICAgIHRoaXMuI2Rpc2NsYWltZXIgPSBkaXNjbGFpbWVyPy5tYXAobWFwQnVpbGRBcmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhcnRpY2xlU291cmNlcyhhcnRpY2xlU291cmNlcz86IEJ1aWxkQXJnPEFydGljbGVTb3VyY2VzPik6IHRoaXMge1xuICAgICAgICB0aGlzLiNhcnRpY2xlU291cmNlcyA9IG1hcEJ1aWxkQXJnKGFydGljbGVTb3VyY2VzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKTogQm9keSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGFnZXM6IHRoaXMuI3N0YWdlcyxcbiAgICAgICAgICAgIHRydXN0Qm94OiB0aGlzLiN0cnVzdEJveCxcbiAgICAgICAgICAgIGRpc2NsYWltZXI6IHRoaXMuI2Rpc2NsYWltZXIsXG4gICAgICAgICAgICBhcnRpY2xlU291cmNlczogdGhpcy4jYXJ0aWNsZVNvdXJjZXMsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5jbGFzcyBUcnVzdEJveEJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdEJ1aWxkZXI8VHJ1c3RCb3g+IHtcbiAgICAjbm9kZXM6IFJpY2hUZXh0Lk5vZGVbXSA9IFtdO1xuICAgICNoaWRkZW46IFJpY2hUZXh0Lk5vZGVbXSA9IFtdO1xuXG4gICAgbm9kZXMobm9kZXM6IEJ1aWxkQXJnczxSaWNoVGV4dC5Ob2RlPik6IHRoaXMge1xuICAgICAgICB0aGlzLiNub2RlcyA9IG5vZGVzLm1hcChtYXBCdWlsZEFyZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhpZGRlbihoaWRkZW46IEJ1aWxkQXJnczxSaWNoVGV4dC5Ob2RlPik6IHRoaXMge1xuICAgICAgICB0aGlzLiNoaWRkZW4gPSBoaWRkZW4ubWFwKG1hcEJ1aWxkQXJnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKTogVHJ1c3RCb3gge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm9kZXM6IHRoaXMuI25vZGVzLFxuICAgICAgICAgICAgaGlkZGVuOiB0aGlzLiNoaWRkZW4sXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5jbGFzcyBPcGVuZXJCdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RCdWlsZGVyPE9wZW5lcj4ge1xuICAgICNlbGVtZW50OiBPcGVuZXJbXCJlbGVtZW50XCJdID0gaW1hZ2UoKS5idWlsZCgpO1xuXG4gICAgZWxlbWVudChlbGVtZW50OiBCdWlsZEFyZzxPcGVuZXJbXCJlbGVtZW50XCJdPik6IHRoaXMge1xuICAgICAgICB0aGlzLiNlbGVtZW50ID0gbWFwQnVpbGRBcmcoZWxlbWVudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCk6IE9wZW5lciB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLiNlbGVtZW50LFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuY2xhc3MgQm9keVN0YWdlU2VxQnVpbGRlciBleHRlbmRzIEFic3RyYWN0U2VxQnVpbGRlcjxCb2R5U3RhZ2U+IHtcbiAgICAjbm9kZXM6IFNlcUVsZW1lbnQ8UmljaFRleHQuTm9kZVtdPiA9IFtdO1xuICAgICNoZWFkZXI/OiBTZXFFbGVtZW50PEJvZHlIZWFkZXI+ID0gdW5kZWZpbmVkO1xuICAgICNjb21wYW5pb25zOiBTZXFFbGVtZW50PFN0YWdlLkNvbXBhbmlvbkl0ZW1bXT4gPSBbXTtcbiAgICAjY29tbWVyY2lhbHNFbmRPZlN0YWdlOiBTZXFFbGVtZW50PFJpY2hUZXh0Lk5vZGVbXT4gPSBbXTtcblxuICAgIG5vZGVzKG5vZGVzOiBTZXFFbGVtZW50PEJ1aWxkQXJnczxSaWNoVGV4dC5Ob2RlPj4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jbm9kZXMgPSBub2Rlcy5tYXAobWFwQnVpbGRBcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZGVyKGhlYWRlcj86IFNlcUVsZW1lbnQ8QnVpbGRBcmc8Qm9keUhlYWRlcj4+KTogdGhpcyB7XG4gICAgICAgIHRoaXMuI2hlYWRlciA9IG1hcEJ1aWxkQXJncyhoZWFkZXIgPz8gW10pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb21wYW5pb25zKGNvbXBhbmlvbnM6IFNlcUVsZW1lbnQ8QnVpbGRBcmdzPFN0YWdlLkNvbXBhbmlvbkl0ZW0+Pik6IHRoaXMge1xuICAgICAgICB0aGlzLiNjb21wYW5pb25zID0gY29tcGFuaW9ucy5tYXAobWFwQnVpbGRBcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29tbWVyY2lhbHNFbmRPZlN0YWdlKFxuICAgICAgICBjb21tZXJjaWFsc0VuZE9mU3RhZ2U6IFNlcUVsZW1lbnQ8QnVpbGRBcmdzPFJpY2hUZXh0Lk5vZGU+PlxuICAgICk6IHRoaXMge1xuICAgICAgICB0aGlzLiNjb21tZXJjaWFsc0VuZE9mU3RhZ2UgPSBjb21tZXJjaWFsc0VuZE9mU3RhZ2UubWFwKG1hcEJ1aWxkQXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkTGlzdEl0ZW0oc2VxTmV4dEVsZW1lbnQ6IFNlcU5leHRFbGVtZW50Q29udmVydGVyKTogQm9keVN0YWdlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBoYXNoKFxuICAgICAgICAgICAgICAgIFwiYm9keVN0YWdlXCIsXG4gICAgICAgICAgICAgICAgdGhpcy4jbm9kZXMsXG4gICAgICAgICAgICAgICAgdGhpcy4jY29tcGFuaW9ucyxcbiAgICAgICAgICAgICAgICB0aGlzLiNjb21tZXJjaWFsc0VuZE9mU3RhZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy4jaGVhZGVyXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgbm9kZXM6IHNlcU5leHRFbGVtZW50LmFycmF5KHRoaXMuI25vZGVzKSxcbiAgICAgICAgICAgIGhlYWRlcjogc2VxTmV4dEVsZW1lbnQubWF5YmUodGhpcy4jaGVhZGVyKSxcbiAgICAgICAgICAgIGNvbXBhbmlvbnM6IHNlcU5leHRFbGVtZW50LmFycmF5KHRoaXMuI2NvbXBhbmlvbnMpLFxuICAgICAgICAgICAgY29tbWVyY2lhbHNFbmRPZlN0YWdlOiBzZXFOZXh0RWxlbWVudC5hcnJheShcbiAgICAgICAgICAgICAgICB0aGlzLiNjb21tZXJjaWFsc0VuZE9mU3RhZ2VcbiAgICAgICAgICAgICksXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5jbGFzcyBCb2R5U3RhZ2VCdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RCdWlsZGVyPEJvZHlTdGFnZT4ge1xuICAgICNzZXFCdWlsZGVyOiBCb2R5U3RhZ2VTZXFCdWlsZGVyID0gbmV3IEJvZHlTdGFnZVNlcUJ1aWxkZXIoKTtcblxuICAgIG5vZGVzKG5vZGVzOiBCdWlsZEFyZ3M8UmljaFRleHQuTm9kZT4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jc2VxQnVpbGRlci5ub2Rlcyhbbm9kZXNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZGVyKGhlYWRlcj86IEJ1aWxkQXJnPEJvZHlIZWFkZXI+KTogdGhpcyB7XG4gICAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuI3NlcUJ1aWxkZXIuaGVhZGVyKFtoZWFkZXJdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjb21wYW5pb25zKGNvbXBhbmlvbnM6IEJ1aWxkQXJnczxTdGFnZS5Db21wYW5pb25JdGVtPik6IHRoaXMge1xuICAgICAgICB0aGlzLiNzZXFCdWlsZGVyLmNvbXBhbmlvbnMoW2NvbXBhbmlvbnNdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29tbWVyY2lhbHNFbmRPZlN0YWdlKFxuICAgICAgICBjb21tZXJjaWFsc0VuZE9mU3RhZ2U6IEJ1aWxkQXJnczxSaWNoVGV4dC5Ob2RlPlxuICAgICk6IHRoaXMge1xuICAgICAgICB0aGlzLiNzZXFCdWlsZGVyLmNvbW1lcmNpYWxzRW5kT2ZTdGFnZShbY29tbWVyY2lhbHNFbmRPZlN0YWdlXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCk6IEJvZHlTdGFnZSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzZXFCdWlsZGVyLmJ1aWxkKCk7XG4gICAgfVxufVxuXG5jbGFzcyBCb2R5SGVhZGVyQnVpbGRlciBleHRlbmRzIEFic3RyYWN0QnVpbGRlcjxCb2R5SGVhZGVyPiB7XG4gICAgI3ZhcmlhbnQ6IEJvZHlIZWFkZXJbXCJ2YXJpYW50XCJdID0gXCJmdWxsXCI7XG4gICAgI29wZW5lcj86IE9wZW5lciA9IHVuZGVmaW5lZDtcblxuICAgIHZhcmlhbnQodmFyaWFudDogQm9keUhlYWRlcltcInZhcmlhbnRcIl0pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jdmFyaWFudCA9IHZhcmlhbnQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9wZW5lcihvcGVuZXI6IEJ1aWxkQXJnPE9wZW5lcj4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jb3BlbmVyID0gbWFwQnVpbGRBcmcob3BlbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKTogQm9keUhlYWRlciB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YXJpYW50OiB0aGlzLiN2YXJpYW50LFxuICAgICAgICAgICAgb3BlbmVyOiB0aGlzLiNvcGVuZXIsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5jbGFzcyBBcnRpY2xlU291cmNlU2VxQnVpbGRlciBleHRlbmRzIEFic3RyYWN0U2VxQnVpbGRlcjxBcnRpY2xlU291cmNlPiB7XG4gICAgI25vZGVzOiBTZXFFbGVtZW50PFJpY2hUZXh0Lk5vZGVbXT4gPSBbXTtcblxuICAgIG5vZGVzKG5vZGVzOiBTZXFFbGVtZW50PEJ1aWxkQXJnczxSaWNoVGV4dC5Ob2RlPj4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jbm9kZXMgPSBub2Rlcy5tYXAobWFwQnVpbGRBcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGRMaXN0SXRlbShzZXFOZXh0RWxlbWVudDogU2VxTmV4dEVsZW1lbnRDb252ZXJ0ZXIpOiBBcnRpY2xlU291cmNlIHtcbiAgICAgICAgY29uc3QgaWQgPSBoYXNoKFwiYXJ0aWNsZS1zb3VyY2VcIiwgdGhpcy4jbm9kZXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBub2Rlczogc2VxTmV4dEVsZW1lbnQuYXJyYXkodGhpcy4jbm9kZXMpLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuY2xhc3MgQXJ0aWNsZVNvdXJjZUJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdEJ1aWxkZXI8QXJ0aWNsZVNvdXJjZT4ge1xuICAgICNzZXFCdWlsZGVyOiBBcnRpY2xlU291cmNlU2VxQnVpbGRlciA9IG5ldyBBcnRpY2xlU291cmNlU2VxQnVpbGRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoLi4ubm9kZXM6IEJ1aWxkQXJnczxSaWNoVGV4dC5Ob2RlPikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5vZGVzKC4uLm5vZGVzKTtcbiAgICB9XG5cbiAgICBub2RlcyguLi5ub2RlczogQnVpbGRBcmdzPFJpY2hUZXh0Lk5vZGU+KTogdGhpcyB7XG4gICAgICAgIHRoaXMuI3NlcUJ1aWxkZXIubm9kZXMoW25vZGVzXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCk6IEFydGljbGVTb3VyY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2VxQnVpbGRlci5idWlsZCgpO1xuICAgIH1cbn1cblxuY2xhc3MgQXJ0aWNsZVNvdXJjZXNCdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RCdWlsZGVyPEFydGljbGVTb3VyY2VzPiB7XG4gICAgI25vZGVzOiBBcnRpY2xlU291cmNlW10gPSBbXTtcbiAgICAjaGlkZGVuOiBBcnRpY2xlU291cmNlW10gPSBbXTtcblxuICAgIG5vZGVzKC4uLm5vZGVzOiBCdWlsZEFyZ3M8QXJ0aWNsZVNvdXJjZT4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jbm9kZXMgPSBub2Rlcy5tYXAobWFwQnVpbGRBcmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoaWRkZW4oLi4uaGlkZGVuOiBCdWlsZEFyZ3M8QXJ0aWNsZVNvdXJjZT4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jaGlkZGVuID0gaGlkZGVuLm1hcChtYXBCdWlsZEFyZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCk6IEFydGljbGVTb3VyY2VzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vZGVzOiB0aGlzLiNub2RlcyxcbiAgICAgICAgICAgIGhpZGRlbjogdGhpcy4jaGlkZGVuLFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJub2RlIiwiY3JlYXRlIiwidHJ1c3RCb3giLCJvcGVuZXIiLCJzdGFnZSIsImhlYWRlciIsInNvdXJjZSIsInNvdXJjZXMiLCJzZXEiLCJCb2R5QnVpbGRlciIsIlRydXN0Qm94QnVpbGRlciIsIk9wZW5lckJ1aWxkZXIiLCJCb2R5U3RhZ2VCdWlsZGVyIiwiQm9keUhlYWRlckJ1aWxkZXIiLCJub2RlcyIsIkFydGljbGVTb3VyY2VCdWlsZGVyIiwiQXJ0aWNsZVNvdXJjZXNCdWlsZGVyIiwiQm9keVN0YWdlU2VxQnVpbGRlciIsIkFydGljbGVTb3VyY2VTZXFCdWlsZGVyIiwiQWJzdHJhY3RCdWlsZGVyIiwic3RhZ2VzIiwibWFwIiwibWFwQnVpbGRBcmciLCJkaXNjbGFpbWVyIiwiYXJ0aWNsZVNvdXJjZXMiLCJidWlsZCIsInVuZGVmaW5lZCIsImhpZGRlbiIsImVsZW1lbnQiLCJpbWFnZSIsIkFic3RyYWN0U2VxQnVpbGRlciIsIm1hcEJ1aWxkQXJncyIsImNvbXBhbmlvbnMiLCJjb21tZXJjaWFsc0VuZE9mU3RhZ2UiLCJidWlsZExpc3RJdGVtIiwic2VxTmV4dEVsZW1lbnQiLCJpZCIsImhhc2giLCJhcnJheSIsIm1heWJlIiwic2VxQnVpbGRlciIsInZhcmlhbnQiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUEyQllBLElBQUk7OztJQUVIQyxNQUFNO2VBQU5BOztJQUNBQyxRQUFRO2VBQVJBOztJQUVBQyxNQUFNO2VBQU5BOztJQUNBQyxLQUFLO2VBQUxBOztJQUVBQyxNQUFNO2VBQU5BOztJQUVBQyxNQUFNO2VBQU5BOztJQUtBQyxPQUFPO2VBQVBBOztJQUdBQyxHQUFHO2VBQUhBOzs7Ozs7OztrQ0E3Q3VDOzhCQUNKO2dDQUMxQjsyRkF3QlI7QUFHUCxNQUFNUCxTQUFxQyxJQUFNLElBQUlRO0FBQ3JELE1BQU1QLFdBQTJDLElBQ3BELElBQUlRO0FBQ0QsTUFBTVAsU0FBdUMsSUFBTSxJQUFJUTtBQUN2RCxNQUFN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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2lucHV0L2luZGV4LnRzIl0sInNvdXJjZVJvb3QiOiIvVXNlcnMva2R5MS9wcm9qZWN0cy9zL2NvbXBhdC9jcmF0ZXMvc3djL3Rlc3RzL2ZpeHR1cmUvc291cmNlbWFwL2lzc3VlLTM4NTQvMi1pbmxpbmUvaW5wdXQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdEJ1aWxkZXIsIEFic3RyYWN0U2VxQnVpbGRlciB9IGZyb20gXCIuL0Fic3RyYWN0QnVpbGRlcnNcIjtcbmltcG9ydCB7IGhhc2gsIG1hcEJ1aWxkQXJnLCBtYXBCdWlsZEFyZ3MgfSBmcm9tIFwiLi9CdWlsZGVyLnV0aWxzXCI7XG5pbXBvcnQgeyBpbWFnZSB9IGZyb20gXCIuL0VsZW1lbnRCdWlsZGVyXCI7XG5cbmltcG9ydCB0eXBlIHtcbiAgICBCb2R5LFxuICAgIEJvZHlTdGFnZSxcbiAgICBUcnVzdEJveCxcbiAgICBSaWNoVGV4dCxcbiAgICBPcGVuZXIsXG4gICAgQm9keUhlYWRlcixcbiAgICBTdGFnZSxcbiAgICBBcnRpY2xlU291cmNlLFxuICAgIEFydGljbGVTb3VyY2VzLFxufSBmcm9tIFwiQHBhcGVyL21vZGVsc1wiO1xuaW1wb3J0IHR5cGUge1xuICAgIEJ1aWxkQXJnLFxuICAgIEJ1aWxkQXJncyxcbiAgICBDcmVhdGVCdWlsZGVyLFxuICAgIFNlcUVsZW1lbnQsXG4gICAgU2VxTmV4dEVsZW1lbnRDb252ZXJ0ZXIsXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgdXNlIHtCdWlsZGVyLmJvZHkubm9kZS5pbWcoKX1cbiAqL1xuZXhwb3J0ICogZnJvbSBcIi4vQm9keU5vZGVzQnVpbGRlclwiO1xuZXhwb3J0ICogYXMgbm9kZSBmcm9tIFwiLi9Cb2R5Tm9kZXNCdWlsZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGU6IENyZWF0ZUJ1aWxkZXI8Qm9keUJ1aWxkZXI+ID0gKCkgPT4gbmV3IEJvZHlCdWlsZGVyKCk7XG5leHBvcnQgY29uc3QgdHJ1c3RCb3g6IENyZWF0ZUJ1aWxkZXI8VHJ1c3RCb3hCdWlsZGVyPiA9ICgpID0+XG4gICAgbmV3IFRydXN0Qm94QnVpbGRlcigpO1xuZXhwb3J0IGNvbnN0IG9wZW5lcjogQ3JlYXRlQnVpbGRlcjxPcGVuZXJCdWlsZGVyPiA9ICgpID0+IG5ldyBPcGVuZXJCdWlsZGVyKCk7XG5leHBvcnQgY29uc3Qgc3RhZ2U6IENyZWF0ZUJ1aWxkZXI8Qm9keVN0YWdlQnVpbGRlcj4gPSAoKSA9PlxuICAgIG5ldyBCb2R5U3RhZ2VCdWlsZGVyKCk7XG5leHBvcnQgY29uc3QgaGVhZGVyOiBDcmVhdGVCdWlsZGVyPEJvZHlIZWFkZXJCdWlsZGVyPiA9ICgpID0+XG4gICAgbmV3IEJvZHlIZWFkZXJCdWlsZGVyKCk7XG5leHBvcnQgY29uc3Qgc291cmNlOiBDcmVhdGVCdWlsZGVyPFxuICAgIEFydGljbGVTb3VyY2VCdWlsZGVyLFxuICAgIEJ1aWxkQXJnczxSaWNoVGV4dC5Ob2RlPlxuPiA9IChub2RlczogQnVpbGRBcmdzPFJpY2hUZXh0Lk5vZGU+ID0gW10pID0+XG4gICAgbmV3IEFydGljbGVTb3VyY2VCdWlsZGVyKC4uLm5vZGVzKTtcbmV4cG9ydCBjb25zdCBzb3VyY2VzOiBDcmVhdGVCdWlsZGVyPEFydGljbGVTb3VyY2VzQnVpbGRlcj4gPSAoKSA9PlxuICAgIG5ldyBBcnRpY2xlU291cmNlc0J1aWxkZXIoKTtcblxuZXhwb3J0IGNvbnN0IHNlcSA9IHtcbiAgICBzdGFnZTogKCgpID0+XG4gICAgICAgIG5ldyBCb2R5U3RhZ2VTZXFCdWlsZGVyKCkpIGFzIENyZWF0ZUJ1aWxkZXI8Qm9keVN0YWdlU2VxQnVpbGRlcj4sXG4gICAgc291cmNlOiAoKCkgPT5cbiAgICAgICAgbmV3IEFydGljbGVTb3VyY2VTZXFCdWlsZGVyKCkpIGFzIENyZWF0ZUJ1aWxkZXI8QXJ0aWNsZVNvdXJjZVNlcUJ1aWxkZXI+LFxufSBhcyBjb25zdDtcblxuY2xhc3MgQm9keUJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdEJ1aWxkZXI8Qm9keT4ge1xuICAgICNzdGFnZXM6IEJvZHlTdGFnZVtdID0gW107XG4gICAgI3RydXN0Qm94PzogVHJ1c3RCb3ggPSB1bmRlZmluZWQ7XG4gICAgI2Rpc2NsYWltZXI/OiBSaWNoVGV4dC5Ob2RlW10gPSB1bmRlZmluZWQ7XG4gICAgI2FydGljbGVTb3VyY2VzPzogQXJ0aWNsZVNvdXJjZXMgPSB1bmRlZmluZWQ7XG5cbiAgICBzdGFnZXMoLi4uc3RhZ2VzOiBCdWlsZEFyZ3M8Qm9keVN0YWdlPik6IHRoaXMge1xuICAgICAgICB0aGlzLiNzdGFnZXMgPSBzdGFnZXMubWFwKG1hcEJ1aWxkQXJnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdHJ1c3RCb3godHJ1c3RCb3g/OiBCdWlsZEFyZzxUcnVzdEJveD4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jdHJ1c3RCb3ggPSBtYXBCdWlsZEFyZyh0cnVzdEJveCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRpc2NsYWltZXIoZGlzY2xhaW1lcj86IEJ1aWxkQXJnczxSaWNoVGV4dC5Ob2RlPik6IHRoaXMge1xuICAgICAgICB0aGlzLiNkaXNjbGFpbWVyID0gZGlzY2xhaW1lcj8ubWFwKG1hcEJ1aWxkQXJnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXJ0aWNsZVNvdXJjZXMoYXJ0aWNsZVNvdXJjZXM/OiBCdWlsZEFyZzxBcnRpY2xlU291cmNlcz4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jYXJ0aWNsZVNvdXJjZXMgPSBtYXBCdWlsZEFyZyhhcnRpY2xlU291cmNlcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCk6IEJvZHkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhZ2VzOiB0aGlzLiNzdGFnZXMsXG4gICAgICAgICAgICB0cnVzdEJveDogdGhpcy4jdHJ1c3RCb3gsXG4gICAgICAgICAgICBkaXNjbGFpbWVyOiB0aGlzLiNkaXNjbGFpbWVyLFxuICAgICAgICAgICAgYXJ0aWNsZVNvdXJjZXM6IHRoaXMuI2FydGljbGVTb3VyY2VzLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuY2xhc3MgVHJ1c3RCb3hCdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RCdWlsZGVyPFRydXN0Qm94PiB7XG4gICAgI25vZGVzOiBSaWNoVGV4dC5Ob2RlW10gPSBbXTtcbiAgICAjaGlkZGVuOiBSaWNoVGV4dC5Ob2RlW10gPSBbXTtcblxuICAgIG5vZGVzKG5vZGVzOiBCdWlsZEFyZ3M8UmljaFRleHQuTm9kZT4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jbm9kZXMgPSBub2Rlcy5tYXAobWFwQnVpbGRBcmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoaWRkZW4oaGlkZGVuOiBCdWlsZEFyZ3M8UmljaFRleHQuTm9kZT4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jaGlkZGVuID0gaGlkZGVuLm1hcChtYXBCdWlsZEFyZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCk6IFRydXN0Qm94IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vZGVzOiB0aGlzLiNub2RlcyxcbiAgICAgICAgICAgIGhpZGRlbjogdGhpcy4jaGlkZGVuLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuY2xhc3MgT3BlbmVyQnVpbGRlciBleHRlbmRzIEFic3RyYWN0QnVpbGRlcjxPcGVuZXI+IHtcbiAgICAjZWxlbWVudDogT3BlbmVyW1wiZWxlbWVudFwiXSA9IGltYWdlKCkuYnVpbGQoKTtcblxuICAgIGVsZW1lbnQoZWxlbWVudDogQnVpbGRBcmc8T3BlbmVyW1wiZWxlbWVudFwiXT4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jZWxlbWVudCA9IG1hcEJ1aWxkQXJnKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpOiBPcGVuZXIge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWxlbWVudDogdGhpcy4jZWxlbWVudCxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmNsYXNzIEJvZHlTdGFnZVNlcUJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdFNlcUJ1aWxkZXI8Qm9keVN0YWdlPiB7XG4gICAgI25vZGVzOiBTZXFFbGVtZW50PFJpY2hUZXh0Lk5vZGVbXT4gPSBbXTtcbiAgICAjaGVhZGVyPzogU2VxRWxlbWVudDxCb2R5SGVhZGVyPiA9IHVuZGVmaW5lZDtcbiAgICAjY29tcGFuaW9uczogU2VxRWxlbWVudDxTdGFnZS5Db21wYW5pb25JdGVtW10+ID0gW107XG4gICAgI2NvbW1lcmNpYWxzRW5kT2ZTdGFnZTogU2VxRWxlbWVudDxSaWNoVGV4dC5Ob2RlW10+ID0gW107XG5cbiAgICBub2Rlcyhub2RlczogU2VxRWxlbWVudDxCdWlsZEFyZ3M8UmljaFRleHQuTm9kZT4+KTogdGhpcyB7XG4gICAgICAgIHRoaXMuI25vZGVzID0gbm9kZXMubWFwKG1hcEJ1aWxkQXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhlYWRlcihoZWFkZXI/OiBTZXFFbGVtZW50PEJ1aWxkQXJnPEJvZHlIZWFkZXI+Pik6IHRoaXMge1xuICAgICAgICB0aGlzLiNoZWFkZXIgPSBtYXBCdWlsZEFyZ3MoaGVhZGVyID8/IFtdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29tcGFuaW9ucyhjb21wYW5pb25zOiBTZXFFbGVtZW50PEJ1aWxkQXJnczxTdGFnZS5Db21wYW5pb25JdGVtPj4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jY29tcGFuaW9ucyA9IGNvbXBhbmlvbnMubWFwKG1hcEJ1aWxkQXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbW1lcmNpYWxzRW5kT2ZTdGFnZShcbiAgICAgICAgY29tbWVyY2lhbHNFbmRPZlN0YWdlOiBTZXFFbGVtZW50PEJ1aWxkQXJnczxSaWNoVGV4dC5Ob2RlPj5cbiAgICApOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jY29tbWVyY2lhbHNFbmRPZlN0YWdlID0gY29tbWVyY2lhbHNFbmRPZlN0YWdlLm1hcChtYXBCdWlsZEFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZExpc3RJdGVtKHNlcU5leHRFbGVtZW50OiBTZXFOZXh0RWxlbWVudENvbnZlcnRlcik6IEJvZHlTdGFnZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogaGFzaChcbiAgICAgICAgICAgICAgICBcImJvZHlTdGFnZVwiLFxuICAgICAgICAgICAgICAgIHRoaXMuI25vZGVzLFxuICAgICAgICAgICAgICAgIHRoaXMuI2NvbXBhbmlvbnMsXG4gICAgICAgICAgICAgICAgdGhpcy4jY29tbWVyY2lhbHNFbmRPZlN0YWdlLFxuICAgICAgICAgICAgICAgIHRoaXMuI2hlYWRlclxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG5vZGVzOiBzZXFOZXh0RWxlbWVudC5hcnJheSh0aGlzLiNub2RlcyksXG4gICAgICAgICAgICBoZWFkZXI6IHNlcU5leHRFbGVtZW50Lm1heWJlKHRoaXMuI2hlYWRlciksXG4gICAgICAgICAgICBjb21wYW5pb25zOiBzZXFOZXh0RWxlbWVudC5hcnJheSh0aGlzLiNjb21wYW5pb25zKSxcbiAgICAgICAgICAgIGNvbW1lcmNpYWxzRW5kT2ZTdGFnZTogc2VxTmV4dEVsZW1lbnQuYXJyYXkoXG4gICAgICAgICAgICAgICAgdGhpcy4jY29tbWVyY2lhbHNFbmRPZlN0YWdlXG4gICAgICAgICAgICApLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuY2xhc3MgQm9keVN0YWdlQnVpbGRlciBleHRlbmRzIEFic3RyYWN0QnVpbGRlcjxCb2R5U3RhZ2U+IHtcbiAgICAjc2VxQnVpbGRlcjogQm9keVN0YWdlU2VxQnVpbGRlciA9IG5ldyBCb2R5U3RhZ2VTZXFCdWlsZGVyKCk7XG5cbiAgICBub2Rlcyhub2RlczogQnVpbGRBcmdzPFJpY2hUZXh0Lk5vZGU+KTogdGhpcyB7XG4gICAgICAgIHRoaXMuI3NlcUJ1aWxkZXIubm9kZXMoW25vZGVzXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGhlYWRlcihoZWFkZXI/OiBCdWlsZEFyZzxCb2R5SGVhZGVyPik6IHRoaXMge1xuICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLiNzZXFCdWlsZGVyLmhlYWRlcihbaGVhZGVyXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY29tcGFuaW9ucyhjb21wYW5pb25zOiBCdWlsZEFyZ3M8U3RhZ2UuQ29tcGFuaW9uSXRlbT4pOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jc2VxQnVpbGRlci5jb21wYW5pb25zKFtjb21wYW5pb25zXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbW1lcmNpYWxzRW5kT2ZTdGFnZShcbiAgICAgICAgY29tbWVyY2lhbHNFbmRPZlN0YWdlOiBCdWlsZEFyZ3M8UmljaFRleHQuTm9kZT5cbiAgICApOiB0aGlzIHtcbiAgICAgICAgdGhpcy4jc2VxQnVpbGRlci5jb21tZXJjaWFsc0VuZE9mU3RhZ2UoW2NvbW1lcmNpYWxzRW5kT2ZTdGFnZV0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpOiBCb2R5U3RhZ2Uge1xuICAgICAgICByZXR1cm4gdGhpcy4jc2VxQnVpbGRlci5idWlsZCgpO1xuICAgIH1cbn1cblxuY2xhc3MgQm9keUhlYWRlckJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdEJ1aWxkZXI8Qm9keUhlYWRlcj4ge1xuICAgICN2YXJpYW50OiBCb2R5SGVhZGVyW1widmFyaWFudFwiXSA9IFwiZnVsbFwiO1xuICAgICNvcGVuZXI/OiBPcGVuZXIgPSB1bmRlZmluZWQ7XG5cbiAgICB2YXJpYW50KHZhcmlhbnQ6IEJvZHlIZWFkZXJbXCJ2YXJpYW50XCJdKTogdGhpcyB7XG4gICAgICAgIHRoaXMuI3ZhcmlhbnQgPSB2YXJpYW50O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvcGVuZXIob3BlbmVyOiBCdWlsZEFyZzxPcGVuZXI+KTogdGhpcyB7XG4gICAgICAgIHRoaXMuI29wZW5lciA9IG1hcEJ1aWxkQXJnKG9wZW5lcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCk6IEJvZHlIZWFkZXIge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFyaWFudDogdGhpcy4jdmFyaWFudCxcbiAgICAgICAgICAgIG9wZW5lcjogdGhpcy4jb3BlbmVyLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuY2xhc3MgQXJ0aWNsZVNvdXJjZVNlcUJ1aWxkZXIgZXh0ZW5kcyBBYnN0cmFjdFNlcUJ1aWxkZXI8QXJ0aWNsZVNvdXJjZT4ge1xuICAgICNub2RlczogU2VxRWxlbWVudDxSaWNoVGV4dC5Ob2RlW10+ID0gW107XG5cbiAgICBub2Rlcyhub2RlczogU2VxRWxlbWVudDxCdWlsZEFyZ3M8UmljaFRleHQuTm9kZT4+KTogdGhpcyB7XG4gICAgICAgIHRoaXMuI25vZGVzID0gbm9kZXMubWFwKG1hcEJ1aWxkQXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkTGlzdEl0ZW0oc2VxTmV4dEVsZW1lbnQ6IFNlcU5leHRFbGVtZW50Q29udmVydGVyKTogQXJ0aWNsZVNvdXJjZSB7XG4gICAgICAgIGNvbnN0IGlkID0gaGFzaChcImFydGljbGUtc291cmNlXCIsIHRoaXMuI25vZGVzKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbm9kZXM6IHNlcU5leHRFbGVtZW50LmFycmF5KHRoaXMuI25vZGVzKSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmNsYXNzIEFydGljbGVTb3VyY2VCdWlsZGVyIGV4dGVuZHMgQWJzdHJhY3RCdWlsZGVyPEFydGljbGVTb3VyY2U+IHtcbiAgICAjc2VxQnVpbGRlcjogQXJ0aWNsZVNvdXJjZVNlcUJ1aWxkZXIgPSBuZXcgQXJ0aWNsZVNvdXJjZVNlcUJ1aWxkZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKC4uLm5vZGVzOiBCdWlsZEFyZ3M8UmljaFRleHQuTm9kZT4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ub2RlcyguLi5ub2Rlcyk7XG4gICAgfVxuXG4gICAgbm9kZXMoLi4ubm9kZXM6IEJ1aWxkQXJnczxSaWNoVGV4dC5Ob2RlPik6IHRoaXMge1xuICAgICAgICB0aGlzLiNzZXFCdWlsZGVyLm5vZGVzKFtub2Rlc10pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpOiBBcnRpY2xlU291cmNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3NlcUJ1aWxkZXIuYnVpbGQoKTtcbiAgICB9XG59XG5cbmNsYXNzIEFydGljbGVTb3VyY2VzQnVpbGRlciBleHRlbmRzIEFic3RyYWN0QnVpbGRlcjxBcnRpY2xlU291cmNlcz4ge1xuICAgICNub2RlczogQXJ0aWNsZVNvdXJjZVtdID0gW107XG4gICAgI2hpZGRlbjogQXJ0aWNsZVNvdXJjZVtdID0gW107XG5cbiAgICBub2RlcyguLi5ub2RlczogQnVpbGRBcmdzPEFydGljbGVTb3VyY2U+KTogdGhpcyB7XG4gICAgICAgIHRoaXMuI25vZGVzID0gbm9kZXMubWFwKG1hcEJ1aWxkQXJnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGlkZGVuKC4uLmhpZGRlbjogQnVpbGRBcmdzPEFydGljbGVTb3VyY2U+KTogdGhpcyB7XG4gICAgICAgIHRoaXMuI2hpZGRlbiA9IGhpZGRlbi5tYXAobWFwQnVpbGRBcmcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpOiBBcnRpY2xlU291cmNlcyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub2RlczogdGhpcy4jbm9kZXMsXG4gICAgICAgICAgICBoaWRkZW46IHRoaXMuI2hpZGRlbixcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsibm9kZSIsImNyZWF0ZSIsInRydXN0Qm94Iiwib3BlbmVyIiwic3RhZ2UiLCJoZWFkZXIiLCJzb3VyY2UiLCJzb3VyY2VzIiwic2VxIiwiQm9keUJ1aWxkZXIiLCJUcnVzdEJveEJ1aWxkZXIiLCJPcGVuZXJCdWlsZGVyIiwiQm9keVN0YWdlQnVpbGRlciIsIkJvZHlIZWFkZXJCdWlsZGVyIiwibm9kZXMiLCJBcnRpY2xlU291cmNlQnVpbGRlciIsIkFydGljbGVTb3VyY2VzQnVpbGRlciIsIkJvZHlTdGFnZVNlcUJ1aWxkZXIiLCJBcnRpY2xlU291cmNlU2VxQnVpbGRlciIsIkFic3RyYWN0QnVpbGRlciIsInN0YWdlcyIsIm1hcCIsIm1hcEJ1aWxkQXJnIiwiZGlzY2xhaW1lciIsImFydGljbGVTb3VyY2VzIiwiYnVpbGQiLCJ1bmRlZmluZWQiLCJoaWRkZW4iLCJlbGVtZW50IiwiaW1hZ2UiLCJBYnN0cmFjdFNlcUJ1aWxkZXIiLCJtYXBCdWlsZEFyZ3MiLCJjb21wYW5pb25zIiwiY29tbWVyY2lhbHNFbmRPZlN0YWdlIiwiYnVpbGRMaXN0SXRlbSIsInNlcU5leHRFbGVtZW50IiwiaWQiLCJoYXNoIiwiYXJyYXkiLCJtYXliZSIsInNlcUJ1aWxkZXIiLCJ2YXJpYW50IiwiY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQTJCWUEsSUFBSTtJQUVIQyxNQUFNLE1BQU5BO0lBQ0FDLFFBQVEsTUFBUkE7SUFFQUMsTUFBTSxNQUFOQTtJQUNBQyxLQUFLLE1BQUxBO0lBRUFDLE1BQU0sTUFBTkE7SUFFQUMsTUFBTSxNQUFOQTtJQUtBQyxPQUFPLE1BQVBBO0lBR0FDLEdBQUcsTUFBSEE7Ozs7Ozs7a0NBN0N1Qzs4QkFDSjtnQ0FDMUI7b0ZB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
