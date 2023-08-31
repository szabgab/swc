#[allow(unused)]
macro_rules! tok {
    ('`') => {
        crate::token::TokenKind::BackQuote
    };
    // (';') => { Token::Semi };
    ('@') => {
        crate::token::TokenKind::At
    };
    ('#') => {
        crate::token::TokenKind::Hash
    };

    ('&') => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::BitAnd)
    };
    ('|') => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::BitOr)
    };
    ('^') => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::BitXor)
    };
    ('+') => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::Add)
    };
    ('-') => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::Sub)
    };
    ("??") => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::NullishCoalescing)
    };
    ('~') => {
        crate::token::TokenKind::Tilde
    };
    ('!') => {
        crate::token::TokenKind::Bang
    };
    ("&&") => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::LogicalAnd)
    };
    ("||") => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::LogicalOr)
    };
    ("&&=") => {
        crate::token::TokenKind::AssignOp(crate::token::AssignOpToken::AndAssign)
    };
    ("||=") => {
        crate::token::TokenKind::AssignOp(crate::token::AssignOpToken::OrAssign)
    };
    ("??=") => {
        crate::token::TokenKind::AssignOp(crate::token::AssignOpToken::NullishAssign)
    };

    ("==") => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::EqEq)
    };
    ("===") => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::EqEqEq)
    };
    ("!=") => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::NotEq)
    };
    ("!==") => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::NotEqEq)
    };

    (',') => {
        crate::token::TokenKind::Comma
    };
    ('?') => {
        crate::token::TokenKind::QuestionMark
    };
    (':') => {
        crate::token::TokenKind::Colon
    };
    ('.') => {
        crate::token::TokenKind::Dot
    };
    ("=>") => {
        crate::token::TokenKind::Arrow
    };
    ("...") => {
        crate::token::TokenKind::DotDotDot
    };
    ("${") => {
        crate::token::TokenKind::DollarLBrace
    };

    ('+') => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::Add)
    };
    ('-') => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::Sub)
    };
    ('*') => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::Mul)
    };
    ('/') => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::Div)
    };
    ("/=") => {
        crate::token::TokenKind::AssignOp(crate::token::AssignOpToken::DivAssign)
    };
    ('%') => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::Mod)
    };
    ('~') => {
        crate::token::TokenKind::Tilde
    };
    ('<') => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::Lt)
    };
    ('>') => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::Gt)
    };
    ("<<") => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::LShift)
    };
    (">>") => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::RShift)
    };
    (">=") => {
        crate::token::TokenKind::BinOp(crate::token::BinOpToken::GtEq)
    };

    ("++") => {
        crate::token::TokenKind::PlusPlus
    };
    ("--") => {
        crate::token::TokenKind::MinusMinus
    };

    ('=') => {
        crate::token::TokenKind::AssignOp(crate::token::AssignOpToken::Assign)
    };

    ('(') => {
        crate::token::TokenKind::LParen
    };
    (')') => {
        crate::token::TokenKind::RParen
    };
    ('{') => {
        crate::token::TokenKind::LBrace
    };
    ('}') => {
        crate::token::TokenKind::RBrace
    };
    ('[') => {
        crate::token::TokenKind::LBracket
    };
    (']') => {
        crate::token::TokenKind::RBracket
    };

    ("async") => {
        known_ident_token!("async")
    };
    ("as") => {
        known_ident_token!("as")
    };
    ("await") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Await,
        ))
    };
    ("break") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Break,
        ))
    };
    ("case") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::Case))
    };
    ("catch") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Catch,
        ))
    };
    ("class") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Class,
        ))
    };
    ("const") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Const,
        ))
    };
    ("continue") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Continue,
        ))
    };
    ("debugger") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Debugger,
        ))
    };
    ("default") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Default_,
        ))
    };
    ("delete") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Delete,
        ))
    };
    ("do") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::Do))
    };
    ("else") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::Else))
    };
    ("export") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Export,
        ))
    };
    ("extends") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Extends,
        ))
    };
    ("false") => {
        crate::token::TokenKind::Word(crate::token::WordKind::False)
    };
    ("finally") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Finally,
        ))
    };
    ("for") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::For))
    };
    ("from") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("from")))
    };
    ("function") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Function,
        ))
    };
    ("if") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::If))
    };
    ("in") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::In))
    };
    ("instanceof") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::InstanceOf,
        ))
    };
    ("import") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Import,
        ))
    };
    ("let") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::Let))
    };
    ("new") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::New))
    };
    ("null") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Null)
    };
    ("of") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("of")))
    };
    ("return") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Return,
        ))
    };
    ("super") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Super,
        ))
    };
    ("static") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("static")))
    };
    ("switch") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Switch,
        ))
    };
    ("target") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("target")))
    };
    ("this") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::This))
    };
    ("throw") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Throw,
        ))
    };
    ("true") => {
        crate::token::TokenKind::Word(crate::token::WordKind::True)
    };
    ("try") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::Try))
    };
    ("typeof") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::TypeOf,
        ))
    };
    ("var") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::Var))
    };
    ("void") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::Void))
    };
    ("while") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::While,
        ))
    };
    ("with") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(crate::token::Keyword::With))
    };
    ("yield") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Keyword(
            crate::token::Keyword::Yield,
        ))
    };

    ("accessor") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "accessor"
        )))
    };

    // ----------
    // JSX
    // ----------
    (JSXTagStart) => {
        crate::token::TokenKind::JSXTagStart
    };

    (JSXTagEnd) => {
        crate::token::TokenKind::JSXTagEnd
    };

    // ----------
    // Typescript
    // ----------
    ("asserts") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "asserts"
        )))
    };
    ("implements") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "implements"
        )))
    };
    ("is") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("is")))
    };
    ("new") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("new")))
    };
    ("keyof") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("keyof")))
    };
    ("unique") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("unique")))
    };
    ("object") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("object")))
    };
    ("global") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("global")))
    };
    ("require") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "require"
        )))
    };
    ("enum") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("enum")))
    };
    ("readonly") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "readonly"
        )))
    };
    ("as") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("as")))
    };
    ("satisfies") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "satisfies"
        )))
    };
    ("namespace") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "namespace"
        )))
    };
    ("abstract") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "abstract"
        )))
    };
    ("infer") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("infer")))
    };
    ("any") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("any")))
    };
    ("boolean") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "boolean"
        )))
    };
    ("bigint") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("bigint")))
    };
    ("intrinsic") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "intrinsic"
        )))
    };
    ("never") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("never")))
    };
    ("number") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("number")))
    };
    ("string") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("string")))
    };
    ("symbol") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("symbol")))
    };
    ("unknown") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "unknown"
        )))
    };
    ("require") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "require"
        )))
    };
    ("interface") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "interface"
        )))
    };
    ("declare") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "declare"
        )))
    };
    ("override") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "override"
        )))
    };
    ("undefined") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "undefined"
        )))
    };
    ("meta") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("meta")))
    };
    ("type") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("type")))
    };
    ("assert") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("assert")))
    };
    ("get") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("get")))
    };
    ("set") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("set")))
    };
    ("out") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("out")))
    };
    ("public") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("public")))
    };
    ("private") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "private"
        )))
    };
    ("protected") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!(
            "protected"
        )))
    };
    ("using") => {
        crate::token::TokenKind::Word(crate::token::WordKind::Ident(swc_atoms::js_word!("using")))
    };
}

macro_rules! token_including_semi {
    (';') => {
        crate::token::TokenKind::Semi
    };
    ($t:tt) => {
        tok!($t)
    };
}
