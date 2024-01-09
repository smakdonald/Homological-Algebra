var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  smakdonald.github   copyright  "
},
{
  "id": "ch-intro",
  "level": "1",
  "url": "ch-intro.html",
  "type": "Chapter",
  "number": "0",
  "title": "Where are we going?",
  "body": "Where are we going?  Chain Complexes and Short Exact Sequences  Homological algebra first appeared in the study of topological spaces. Roughly speaking, homology is a way of associating a sequence of abelian groups (or modules, or other more sophisticated algebraic objects) to another object, for example a topological space. The homology of a topological space encodes topological information about the space in algebraic language - this is what algebraic topology is all about.  More formally, we will study complexes and their homology from a more abstract perspective. While algebraic topologists are often concerned with complexes of abelian groups, we will work a bit more generally with complexes of -modules. The basic assumptions and notation about rings and modules we will use in this class can be found in Appendix A. As an appetizer, we begin with some basic homological algebra definitions.  Chain Complex   A chain complex of -modules , also referred to simply as a complex , is a sequence of -modules and -module homomorphisms such that for all . The maps are the differentials of our complex. chain complex  differential      We may sometimes omit the differentials and simply refer to the complex or even ; we may also sometimes refer to as the differential of .   Exact Sequences   The complex is exact at if im . An exact sequence is a complex that is exact everywhere. More precisely, an exact sequence of -modules is a sequence of -modules and -module homomorphisms such that for all . An exact sequence of the form is a short exact sequence, sometimes written ses. exact sequence  short exact sequence      The condition that for all implies that .    The sequence is exact if and only if is injective. Similarly, is exact if and only if is surjective. So is a short exact sequence if and only if    is injective     is surjective     .      When this is indeed a short exact sequence, we can identify with its image , and . Moreover, since is surjective, by the First Isomorphism Theorem we conclude that , so we might abuse notation and identify with .   We write to denote a surjective map, and to denote an injective map.   Cokernel   The cokernel of a map of -modules is the module     We can rephrase in a fancier language: if is a short exact sequence, then and .   Let be the canonical projection . The following is a short exact sequence:     Let be a polynomial ring over the field . The following is a short exact sequence:   The first map is multiplication by , and the second map is the canonical projection.    Given an ideal in a ring , the inclusion map and the canonical projection give us the following short exact sequence:     Let . The following complex is exact:     Indeed, the image and the kernel of multiplication by are both .   Sometimes we can show that certain modules vanish or compute them explicitly when they do not vanish by seeing that they fit in some naturally constructed exact sequence involving other modules we understand better. We will discuss this in more detail when we talk about long exact sequences.   The complex is exact if and only if is an isomorphism.    The complex is exact if and only if .    Homology  Historically, chain complexes first appeared in topology. To study a topological space, one constructs a particular chain complex that arises naturally from information from the space, and then calculates its homology, which ends up encoding important topological information in the form of a sequence of abelian groups.  Homology   The homology of the complex is the sequence of -modules   The th homology of is .     The submodules are sometimes called cycles , while the submodules are sometimes called boundaries . One sometimes uses the word boundary to refer an element of (an -boundary), and the word cycle to refer to an element of (an -cycle).    The homology of a complex measures how far our complex is from being exact at each point. Again, we can talk about the cohomology of a cochain complex instead, which we write as ; we will for now not worry about the distinction.   Note that is exact at if and only if .   Let . Consider the following complex: The image of multiplication by is , while the the kernel of multiplication by is . For all ,     Let be the canonical projection map. Then   is a complex of abelian groups, since the image of multiplication by is , and that is certainly contained in . The homology of is   Notice that our complex is exact at and . The exactness at says that the map is injective, while exactness at says that is surjective.   Before we can continue any further into the world of homological algebra, we will need some categorical language. We will take a short break to introduce category theory, and then armed with that knowledge we will be ready to study homological algebra.   "
},
{
  "id": "def-chain-complex",
  "level": "2",
  "url": "ch-intro.html#def-chain-complex",
  "type": "Definition",
  "number": "0.1",
  "title": "Chain Complex.",
  "body": "Chain Complex   A chain complex of -modules , also referred to simply as a complex , is a sequence of -modules and -module homomorphisms such that for all . The maps are the differentials of our complex. chain complex  differential    "
},
{
  "id": "ch-intro-2-5",
  "level": "2",
  "url": "ch-intro.html#ch-intro-2-5",
  "type": "Convention",
  "number": "0.2",
  "title": "",
  "body": " We may sometimes omit the differentials and simply refer to the complex or even ; we may also sometimes refer to as the differential of .  "
},
{
  "id": "def-ses",
  "level": "2",
  "url": "ch-intro.html#def-ses",
  "type": "Definition",
  "number": "0.3",
  "title": "Exact Sequences.",
  "body": "Exact Sequences   The complex is exact at if im . An exact sequence is a complex that is exact everywhere. More precisely, an exact sequence of -modules is a sequence of -modules and -module homomorphisms such that for all . An exact sequence of the form is a short exact sequence, sometimes written ses. exact sequence  short exact sequence    "
},
{
  "id": "rem-0.2",
  "level": "2",
  "url": "ch-intro.html#rem-0.2",
  "type": "Exercise",
  "number": "0.4",
  "title": "",
  "body": " The condition that for all implies that .  "
},
{
  "id": "thm-0.4",
  "level": "2",
  "url": "ch-intro.html#thm-0.4",
  "type": "Theorem",
  "number": "0.5",
  "title": "",
  "body": " The sequence is exact if and only if is injective. Similarly, is exact if and only if is surjective. So is a short exact sequence if and only if    is injective     is surjective     .     "
},
{
  "id": "ch-intro-2-10",
  "level": "2",
  "url": "ch-intro.html#ch-intro-2-10",
  "type": "Convention",
  "number": "0.6",
  "title": "",
  "body": " We write to denote a surjective map, and to denote an injective map.  "
},
{
  "id": "def-cokernel",
  "level": "2",
  "url": "ch-intro.html#def-cokernel",
  "type": "Definition",
  "number": "0.7",
  "title": "Cokernel.",
  "body": "Cokernel   The cokernel of a map of -modules is the module    "
},
{
  "id": "rem-0.7",
  "level": "2",
  "url": "ch-intro.html#rem-0.7",
  "type": "Exercise",
  "number": "0.8",
  "title": "",
  "body": "We can rephrase in a fancier language: if is a short exact sequence, then and . "
},
{
  "id": "ch-intro-2-13",
  "level": "2",
  "url": "ch-intro.html#ch-intro-2-13",
  "type": "Example",
  "number": "0.9",
  "title": "",
  "body": " Let be the canonical projection . The following is a short exact sequence:   "
},
{
  "id": "ch-intro-2-14",
  "level": "2",
  "url": "ch-intro.html#ch-intro-2-14",
  "type": "Example",
  "number": "0.10",
  "title": "",
  "body": " Let be a polynomial ring over the field . The following is a short exact sequence:   The first map is multiplication by , and the second map is the canonical projection.  "
},
{
  "id": "ch-intro-2-15",
  "level": "2",
  "url": "ch-intro.html#ch-intro-2-15",
  "type": "Example",
  "number": "0.11",
  "title": "",
  "body": " Given an ideal in a ring , the inclusion map and the canonical projection give us the following short exact sequence:   "
},
{
  "id": "ch-intro-2-16",
  "level": "2",
  "url": "ch-intro.html#ch-intro-2-16",
  "type": "Example",
  "number": "0.12",
  "title": "",
  "body": " Let . The following complex is exact:     Indeed, the image and the kernel of multiplication by are both .  "
},
{
  "id": "ch-intro-2-18",
  "level": "2",
  "url": "ch-intro.html#ch-intro-2-18",
  "type": "Remark",
  "number": "0.13",
  "title": "",
  "body": " The complex is exact if and only if is an isomorphism.  "
},
{
  "id": "ch-intro-2-19",
  "level": "2",
  "url": "ch-intro.html#ch-intro-2-19",
  "type": "Remark",
  "number": "0.14",
  "title": "",
  "body": " The complex is exact if and only if .  "
},
{
  "id": "def-homology",
  "level": "2",
  "url": "ch-intro.html#def-homology",
  "type": "Definition",
  "number": "0.15",
  "title": "Homology.",
  "body": "Homology   The homology of the complex is the sequence of -modules   The th homology of is .   "
},
{
  "id": "ch-intro-3-4",
  "level": "2",
  "url": "ch-intro.html#ch-intro-3-4",
  "type": "Convention",
  "number": "0.16",
  "title": "",
  "body": " The submodules are sometimes called cycles , while the submodules are sometimes called boundaries . One sometimes uses the word boundary to refer an element of (an -boundary), and the word cycle to refer to an element of (an -cycle).  "
},
{
  "id": "ch-intro-3-5",
  "level": "2",
  "url": "ch-intro.html#ch-intro-3-5",
  "type": "Remark",
  "number": "0.17",
  "title": "",
  "body": " The homology of a complex measures how far our complex is from being exact at each point. Again, we can talk about the cohomology of a cochain complex instead, which we write as ; we will for now not worry about the distinction.  "
},
{
  "id": "rem-0.15",
  "level": "2",
  "url": "ch-intro.html#rem-0.15",
  "type": "Exercise",
  "number": "0.18",
  "title": "",
  "body": "Note that is exact at if and only if . "
},
{
  "id": "ch-intro-3-7",
  "level": "2",
  "url": "ch-intro.html#ch-intro-3-7",
  "type": "Example",
  "number": "0.19",
  "title": "",
  "body": " Let . Consider the following complex: The image of multiplication by is , while the the kernel of multiplication by is . For all ,   "
},
{
  "id": "ch-intro-3-8",
  "level": "2",
  "url": "ch-intro.html#ch-intro-3-8",
  "type": "Example",
  "number": "0.20",
  "title": "",
  "body": " Let be the canonical projection map. Then   is a complex of abelian groups, since the image of multiplication by is , and that is certainly contained in . The homology of is   Notice that our complex is exact at and . The exactness at says that the map is injective, while exactness at says that is surjective.  "
},
{
  "id": "sec-categories",
  "level": "1",
  "url": "sec-categories.html",
  "type": "Section",
  "number": "1.1",
  "title": "Categories",
  "body": "Categories         Most fields in modern mathematics follow the same basic recipe: there is a main type of object one wants to study - groups, rings, modules, topological spaces, etc - and a natural notion of arrows between these - group homomorphisms, ring homomorphisms, module homomorphisms, continuous maps, etc. The objects are often sets with some extra structure, and the arrows are often maps between the objects that preserve whatever that extra structure is. Category theory is born of this realization, by abstracting the basic notions that make math and studying them all at the same time. How many times have we felt a sense of déjà vu when learning about a new field of math? Category theory unifies all those ideas we have seen over and over in different contexts.  Category theory is an entire field of mathematics in its own right. As such, there is a lot to say about category theory, and unfortunately it doesn't all fit in the little time we have to cover it in this course. You are strongly encouraged to learn more about category theory, for example from [ML98] or [Rie17].  Before we go any further, note that there is a long and fun story about why we use the word collection when describing the objects in a category. Not all collections are allowed to be sets, an issue that was first discovered by Russel with his famous Russel's Paradox. The collection of all sets that don't contain themselves cannot be a set. Do you see why? Russel exposed the fact that one has to be careful with how we formalize set theory. We follow the ZFC (Zermelo-Fraenkel with choice, short for the Zermelo-Fraenkel axioms plus the Axiom of Choice) axiomatization of set theory, and while we will not discuss the details of this formalization here, you are encouraged to read more on the subject.   Definition and First Examples    We'll only use as much category theory as is necessary. Famous last words...   Roman Abramovich   A category consists of a collection of objects and arrows or morphisms between those objects. While these are often sets and some kind of functions between them, beware that this will not always be the case. We will use the words morphism and arrows interchangeably, though arrow has the advantage of reminding us we are not necessarily talking about functions.  Category   A category  consists of three different pieces of data:   a collection of objects ,     for each two objects, say and , a collection of arrows or morphisms from to , and    for each three objects , and , a composition         We will often drop the and write simply for .  These ingredients satisfy the following axioms:   The are all disjoint. In particular, if is an arrow in , we can talk about its source  and its target  as the objects such that .    For each object , there is an identity arrow  such that and for all and all .    Composition is associative : for all appropriately chosen arrows.        We sometimes write or for an arrow .   Unique Identity Morphism  Every object in a category has a unique identity morphism.   Here are some categories you have likely encountered before:  Categories     The category with objects all sets and arrows all functions between sets.    The category whose objects are the collection of all groups, and whose arrows are all the homomorphisms of groups. The identity arrows are the identity homomorphisms.    The category with objects all abelian groups, and arrows the homomorphisms of abelian groups. The identity arrows are the identity homomorphisms.    The category of rings and ring homomorphisms. Contrary to what you may expect, this is not nearly as important as the next one.    The category of modules over a fixed ring and with -module homomorphisms. Sometimes one writes for this category, and reserve for the category of finitely generated -modules with ule homomorphisms. When is a field, the objects in the category -Mod are -vector spaces, and the arrows are linear transformations; we may instead refer to this category as Vect- .    The category Top of topological spaces and continuous functions. One may consider many variations of the categories above. Here are some variations on vector spaces:      While the collections of objects and arrows might not actually be sets, sometimes they are.  Locally Small   A category is locally small if for all objects and in is a set. A category is small if it is locally small and the collection of all objects in is a set.    In fact, one can define a small category as one where the collection of all arrows is a set. It follows immediately that the collection of all objects is also a set, since it must be a subset of the set of arrows - for each object, there is an identity arrow.  Many important categories are at least locally small.    is locally small but not small.     Categories where the objects are sets with some extra structure and the arrows are some kind of functions between the objects are called concrete.    All of the categories we have seen thus far have been conctrete, but this is not the case in general.  Non-Concrete Categories     Given a partially ordered set , we can regard itself as a category: the objects are the elements of , and for each and in is either a singleton if or empty if . There is only one possible way to define composition, and the transitive property of guarantees that the composition of arrows is indeed well-defined: if there is an arrow and an arrow , then and , so and thus there is a unique arrow . This category is locally small, since all nonempty Hom-sets are in fact singletons. It is in fact small, since the objects are by construction the set .   Category  For each positive integer , the category has objects and is either empty if or a singleton if . As , composition is defined in the only way possible, and things work out. This is the poset category for the poset with the usual .   Matrix Category  Fix a field . We define a category Mat- with objects all positive integers, and given two positive integers and , the -set consists of all matrices with entries in . The composition rule is given by product of matrices: given and , the composition is the matrix . For each object , its identity arrow is given by the identity matrix.    Let be a directed graph. We can construct a category from as follows: the objects are the vertices of , and the arrows are directed paths in the graph . In this category, composition of arrows corresponds to concatenation of paths. For each object , the identity arrow corresponds to the empty path from to .       A locally small category with just one element is completely determined by its unique Hom-set; it thus consists of a set with an associative operation that has an identity element, which in this class is what we call a semigroup. Some authors prefer the term monoid.     Diagrams and Morphisms    Make big plans; aim high in hope and work, remembering that a noble, logical diagram once recorded will not die.   Daniel Burnham   A key insight we get from category theory is that many important concepts can be understood through diagrams. Homological algebra is in many ways the study of commutative diagrams. One way to formalize what a diagram is involves talking about functors, which we will discuss in Section 1.2; here is a more down to earth definition.  Diagram   A diagram in a category is a directed multigraph whose vertices are objects in and whose arrows\/edges are morphisms in . A commutative diagram in is a diagram in which for each pair of vertices and , any two paths from to compose to the same morphism.    Commutative Diagram  The diagram   commutes if and only if .   There are some special types of arrows we will want to consider.  Morphism Inverses   Let be any category.   An arrow is left invertible if there exists such that . In this case, we say that is the left inverse of . So is a left inverse of if the diagram   commutes.    An arrow is right invertible if there exists such that . In this case, we say that is the right inverse of . So is a right inverse of if the diagram   commutes.    An arrow is an isomorphism if there exists such that and . Unsurprisingly, such an arrow is called the inverse of .       Isomorphisms     In , , and R the isomorphisms are the morphisms that are bijective functions.    In contrast, in the isomorphisms are the homeomorphisms, which are the bijective continuous functions with continuous inverses. These are not the same thing as just the bijective continuous functions.       Opposite Categories and Subcategories    The life of this world is nothing but the harmony of opposites.   Rumi   We will now continue to follow a familiar pattern and define the related concepts one can guess should be defined.  Subcategory   A subcategory  of a category consists of a subcollection of the objects of and a subcollection of the morphisms of such that the following hold:   For every object in , the arrow is an arrow in .    For every arrow in , its source and target in are objects in .    For every pair of arrows and in such that is an arrow that makes sense in , is an arrow in .       In particular, is a category in its own right.  Subcategories  The category of finitely generated -modules with -module homomorphisms is a subcategory of .   Subcategories of Vector Spaces  Let be a field.   The collection of finite dimensional -vector spaces with all linear transformations is a category.    The collection of all -dimensional -vector spaces with all linear transformations is a category.    The collection of all -vector spaces (or -dimensional vector spaces) with linear isomorphisms is a category.    The collection of all -vector spaces (or -dimensional vector spaces) with nonzero linear transformations is not a category, since it is not closed under composition.    The collection of all -dimensional vector spaces with linear transformations of determinant 0 is not a category, since it does not have identity maps.      Full Subcategory   A subcategory of is a full subcategory if includes all of the arrows in between any two objects in .    Full Subcategories     The category of abelian groups is a full subcategory of .    Since every group is a set, and every homomorphism is a function, is a subcategory of . However, not every function between two groups is a group homomorphism, so is not a full subcategory of .    The category whose objects are all sets and with arrows all bijections is a subcategory of that is not full.      Here is another way of constructing a new category out of an old one.  Opposite Category   Let be a category. The opposite category of , denoted , is a category whose objects are the objects of , and such that each arrow is the same as some arrow in . The composition of two morphisms and in is defined as the composition in .    Many objects and concepts one might want to describe are obtained from existing ones by flipping the arrows. Opposite categories give us the formal framework to talk about such things. We will often want to refer to dual notions, which will essentially mean considering the same notion in a category and in the opposite category ; in practice, this means we should flip all the arrows involved. We will see examples of this later on.  The dual category construction gives us a formal framework to talk about dual notions. We will often make a statement in a category and make comments about the dual statement; in practice, this corresponds to simply switching the way all arrows go. Here are some examples of dual notions and statements:     source  target    epi  mono    is a right inverse for  is a left inverse for    is invertible  is invertible    initial objects  terminal objects    homology  cohomology     Note that the dual of the dual is the original statement; we can make this more formal by saying that . Sometimes we can easily prove a statement by dualizing; however, this is not always straightforward, and one needs to carefully dualize all portions of the statement in question. Nevertheless, Sanders MacLane, one of the fathers of category theory, wrote that \"If any statement about a category is deducible from the axioms for a category, the dual statement is likely deducible\". One of the upshots of duality is that any theorem in category theory must simultaneously prove two theorems: the original statement and its dual. But for this to hold, we need proofs that use the abstraction of a purely categorical proof.  Opposite categories are more interesting than they might appear at first; there is more than just flipping all the arrows. For example, consider the opposite category of Set. For any nonempty set , there is a unique morphism in Set (a function) , but there are no functions , so is not a function. Thus thinking about Set is a bit difficult. One can show that this is the category of complete atomic Boolean algebras - but we won't concern ourselves with what that means.           "
},
{
  "id": "sec-categories-2",
  "level": "2",
  "url": "sec-categories.html#sec-categories-2",
  "type": "Reminders and Recollections",
  "number": "1.1",
  "title": "",
  "body": "     "
},
{
  "id": "def-category",
  "level": "2",
  "url": "sec-categories.html#def-category",
  "type": "Definition",
  "number": "1.1",
  "title": "Category.",
  "body": "Category   A category  consists of three different pieces of data:   a collection of objects ,     for each two objects, say and , a collection of arrows or morphisms from to , and    for each three objects , and , a composition         We will often drop the and write simply for .  These ingredients satisfy the following axioms:   The are all disjoint. In particular, if is an arrow in , we can talk about its source  and its target  as the objects such that .    For each object , there is an identity arrow  such that and for all and all .    Composition is associative : for all appropriately chosen arrows.      "
},
{
  "id": "subsec-cat-5",
  "level": "2",
  "url": "sec-categories.html#subsec-cat-5",
  "type": "Convention",
  "number": "1.2",
  "title": "",
  "body": " We sometimes write or for an arrow .  "
},
{
  "id": "exp-unique-id-morphism",
  "level": "2",
  "url": "sec-categories.html#exp-unique-id-morphism",
  "type": "Exercise",
  "number": "1.3",
  "title": "Unique Identity Morphism.",
  "body": "Unique Identity Morphism  Every object in a category has a unique identity morphism.  "
},
{
  "id": "ex-categories",
  "level": "2",
  "url": "sec-categories.html#ex-categories",
  "type": "Example",
  "number": "1.4",
  "title": "Categories.",
  "body": "Categories     The category with objects all sets and arrows all functions between sets.    The category whose objects are the collection of all groups, and whose arrows are all the homomorphisms of groups. The identity arrows are the identity homomorphisms.    The category with objects all abelian groups, and arrows the homomorphisms of abelian groups. The identity arrows are the identity homomorphisms.    The category of rings and ring homomorphisms. Contrary to what you may expect, this is not nearly as important as the next one.    The category of modules over a fixed ring and with -module homomorphisms. Sometimes one writes for this category, and reserve for the category of finitely generated -modules with ule homomorphisms. When is a field, the objects in the category -Mod are -vector spaces, and the arrows are linear transformations; we may instead refer to this category as Vect- .    The category Top of topological spaces and continuous functions. One may consider many variations of the categories above. Here are some variations on vector spaces:     "
},
{
  "id": "def-locally-small",
  "level": "2",
  "url": "sec-categories.html#def-locally-small",
  "type": "Definition",
  "number": "1.5",
  "title": "Locally Small.",
  "body": "Locally Small   A category is locally small if for all objects and in is a set. A category is small if it is locally small and the collection of all objects in is a set.   "
},
{
  "id": "subsec-cat-13",
  "level": "2",
  "url": "sec-categories.html#subsec-cat-13",
  "type": "Example",
  "number": "1.6",
  "title": "",
  "body": "  is locally small but not small.  "
},
{
  "id": "def-concrete",
  "level": "2",
  "url": "sec-categories.html#def-concrete",
  "type": "Definition",
  "number": "1.7",
  "title": "",
  "body": "  Categories where the objects are sets with some extra structure and the arrows are some kind of functions between the objects are called concrete.   "
},
{
  "id": "non-concrete-categories",
  "level": "2",
  "url": "sec-categories.html#non-concrete-categories",
  "type": "Example",
  "number": "1.8",
  "title": "Non-Concrete Categories.",
  "body": "Non-Concrete Categories     Given a partially ordered set , we can regard itself as a category: the objects are the elements of , and for each and in is either a singleton if or empty if . There is only one possible way to define composition, and the transitive property of guarantees that the composition of arrows is indeed well-defined: if there is an arrow and an arrow , then and , so and thus there is a unique arrow . This category is locally small, since all nonempty Hom-sets are in fact singletons. It is in fact small, since the objects are by construction the set .   Category  For each positive integer , the category has objects and is either empty if or a singleton if . As , composition is defined in the only way possible, and things work out. This is the poset category for the poset with the usual .   Matrix Category  Fix a field . We define a category Mat- with objects all positive integers, and given two positive integers and , the -set consists of all matrices with entries in . The composition rule is given by product of matrices: given and , the composition is the matrix . For each object , its identity arrow is given by the identity matrix.    Let be a directed graph. We can construct a category from as follows: the objects are the vertices of , and the arrows are directed paths in the graph . In this category, composition of arrows corresponds to concatenation of paths. For each object , the identity arrow corresponds to the empty path from to .     "
},
{
  "id": "subsec-cat-17",
  "level": "2",
  "url": "sec-categories.html#subsec-cat-17",
  "type": "Remark",
  "number": "1.9",
  "title": "",
  "body": " A locally small category with just one element is completely determined by its unique Hom-set; it thus consists of a set with an associative operation that has an identity element, which in this class is what we call a semigroup. Some authors prefer the term monoid.   "
},
{
  "id": "def-diagram",
  "level": "2",
  "url": "sec-categories.html#def-diagram",
  "type": "Definition",
  "number": "1.10",
  "title": "Diagram.",
  "body": "Diagram   A diagram in a category is a directed multigraph whose vertices are objects in and whose arrows\/edges are morphisms in . A commutative diagram in is a diagram in which for each pair of vertices and , any two paths from to compose to the same morphism.   "
},
{
  "id": "ex-commutative-diagram",
  "level": "2",
  "url": "sec-categories.html#ex-commutative-diagram",
  "type": "Example",
  "number": "1.11",
  "title": "Commutative Diagram.",
  "body": "Commutative Diagram  The diagram   commutes if and only if .  "
},
{
  "id": "def-inverses",
  "level": "2",
  "url": "sec-categories.html#def-inverses",
  "type": "Definition",
  "number": "1.12",
  "title": "Morphism Inverses.",
  "body": "Morphism Inverses   Let be any category.   An arrow is left invertible if there exists such that . In this case, we say that is the left inverse of . So is a left inverse of if the diagram   commutes.    An arrow is right invertible if there exists such that . In this case, we say that is the right inverse of . So is a right inverse of if the diagram   commutes.    An arrow is an isomorphism if there exists such that and . Unsurprisingly, such an arrow is called the inverse of .      "
},
{
  "id": "ex-isomorphisms",
  "level": "2",
  "url": "sec-categories.html#ex-isomorphisms",
  "type": "Example",
  "number": "1.13",
  "title": "Isomorphisms.",
  "body": "Isomorphisms     In , , and R the isomorphisms are the morphisms that are bijective functions.    In contrast, in the isomorphisms are the homeomorphisms, which are the bijective continuous functions with continuous inverses. These are not the same thing as just the bijective continuous functions.     "
},
{
  "id": "def-subcategory",
  "level": "2",
  "url": "sec-categories.html#def-subcategory",
  "type": "Definition",
  "number": "1.14",
  "title": "Subcategory.",
  "body": "Subcategory   A subcategory  of a category consists of a subcollection of the objects of and a subcollection of the morphisms of such that the following hold:   For every object in , the arrow is an arrow in .    For every arrow in , its source and target in are objects in .    For every pair of arrows and in such that is an arrow that makes sense in , is an arrow in .      "
},
{
  "id": "ex-subcategories",
  "level": "2",
  "url": "sec-categories.html#ex-subcategories",
  "type": "Example",
  "number": "1.15",
  "title": "Subcategories.",
  "body": "Subcategories  The category of finitely generated -modules with -module homomorphisms is a subcategory of .  "
},
{
  "id": "ex-more-categories",
  "level": "2",
  "url": "sec-categories.html#ex-more-categories",
  "type": "Example",
  "number": "1.16",
  "title": "Subcategories of Vector Spaces.",
  "body": "Subcategories of Vector Spaces  Let be a field.   The collection of finite dimensional -vector spaces with all linear transformations is a category.    The collection of all -dimensional -vector spaces with all linear transformations is a category.    The collection of all -vector spaces (or -dimensional vector spaces) with linear isomorphisms is a category.    The collection of all -vector spaces (or -dimensional vector spaces) with nonzero linear transformations is not a category, since it is not closed under composition.    The collection of all -dimensional vector spaces with linear transformations of determinant 0 is not a category, since it does not have identity maps.     "
},
{
  "id": "def-full-subcategory",
  "level": "2",
  "url": "sec-categories.html#def-full-subcategory",
  "type": "Definition",
  "number": "1.17",
  "title": "Full Subcategory.",
  "body": "Full Subcategory   A subcategory of is a full subcategory if includes all of the arrows in between any two objects in .   "
},
{
  "id": "ex-full-subcategories",
  "level": "2",
  "url": "sec-categories.html#ex-full-subcategories",
  "type": "Example",
  "number": "1.18",
  "title": "Full Subcategories.",
  "body": "Full Subcategories     The category of abelian groups is a full subcategory of .    Since every group is a set, and every homomorphism is a function, is a subcategory of . However, not every function between two groups is a group homomorphism, so is not a full subcategory of .    The category whose objects are all sets and with arrows all bijections is a subcategory of that is not full.     "
},
{
  "id": "def-opposite-category",
  "level": "2",
  "url": "sec-categories.html#def-opposite-category",
  "type": "Definition",
  "number": "1.19",
  "title": "Opposite Category.",
  "body": "Opposite Category   Let be a category. The opposite category of , denoted , is a category whose objects are the objects of , and such that each arrow is the same as some arrow in . The composition of two morphisms and in is defined as the composition in .   "
},
{
  "id": "subsec-sub-dual-14",
  "level": "2",
  "url": "sec-categories.html#subsec-sub-dual-14",
  "type": "Table",
  "number": "1.20",
  "title": "",
  "body": "   source  target    epi  mono    is a right inverse for  is a left inverse for    is invertible  is invertible    initial objects  terminal objects    homology  cohomology    "
},
{
  "id": "sec-categories-7",
  "level": "2",
  "url": "sec-categories.html#sec-categories-7",
  "type": "Summary",
  "number": "1.1",
  "title": "",
  "body": "       "
},
{
  "id": "sec-functors",
  "level": "1",
  "url": "sec-functors.html",
  "type": "Section",
  "number": "1.2",
  "title": "Functors",
  "body": "Functors           Functor? Damn Near Killed 'er!    If you're brave enough to say goodbye, life will reward you with a new hello.   Paulo Coelho   Many mathematical constructions are functorial, in the sense that they behave well with respect to morphisms. In the formalism of category theory, this means that we can think of a functorial construction as a functor.  Functor   Let and be categories. A covariant functor is a mapping that assigns to each object in an object in , and to each arrow an arrow , such that    preserves the composition of maps, meaning for all arrows and in , and     preserves the identity arrows, meaning for all objects in .     A contravariant functor  is a mapping that assigns to each object in an object in , and to each arrow an arrow , such that    preserves the composition of maps, meaning for all composable arrows and in , and     preserves the identity arrows, meaning for all objects in .       So a contravariant functor is a functor that flips all the arrows. We can also describe a contravariant functor as a covariant functor from to the opposite category of , .   A contravariant functor can be thought of as a covariant functor , or also as a covariant functor . If using one of these conventions, one needs to be careful, however, when composing functors, so that the respective sources and targets match up correctly. While we haven't specially discussed how one composes functors, it should be clear that applying a functor and is the same as applying a functor , which we can write as .  For example, if and are both contravariant functors, the composition is a covariant functor, since   So we could think of as a covariant functor and as a covariant functor . Similarly, if is a covariant functor and is a contravariant functor, is a contravariant functor. In this case, we can think of as a covariant functor , so that is now a covariant functor .   Functors Preserve Isomorphisms Show that functors preserve isomorphisms.  Here are some examples of functors you may have encountered before.  Functors     Many categories one may think about are concrete categories, where the objects are sets with some extra structure, and the arrows are functions between those sets that preserved that extra structure. The forgetful functor from such a category to is the functor that, just as the name says, forgets that extra structure, and sees only the underlying sets and functions of sets. For example, the forgetful functor  sends each group to its underlying set, and each group homomorphism to the corresponding function of sets.    The identity functor  on any category does what the name suggests: it sends each object to itself and each arrow to itself.    Given a group , the subgroup of generated by the set of commutators is a normal subgroup, and the quotient is called the abelianization of . The group is abelian. Given a group homomorphism automatically takes commutators to commutators, so it induces a homomorphism . More precisely, abelianization gives a covariant functor from to .    The unit group functor  :   sends a ring to its group of units . To see this is indeed a functor, we should check it behaves well on morphisms; and indeed if is a ring homomorphism, and is a unit in , then so is a unit in . Thus induces a function given by restriction of to , which must therefore be a group homomorphism since preserves products.    Fix a field . Given a vector space , the collection of linear transformations from to is again a -vector space, the dual vector space of . If is a linear transformation and is an element of , then is in . Doing this for all elements gives a function , and one can show that is a linear transformation. The assignment that sends each vector space to its dual vector space and each linear transformation to is a contravariant functor on Vect- .    Localization is a functor. Let be a ring and be a multiplicatively closed set in . There is localization at induces a a functor  that sends each -module to , and each -module homomorphism to the -module homomorphism .       If we apply a covariant functor to a diagram, then we get a diagram of the same shape:   However, if we apply a contravariant functor to the same diagram, we get a similar diagram but with the arrows reversed:     Properties of Functors         If we think about functors as functions between categories, it's natural to consider what would be the appropriate versions of the notions of injective or surjective.    A covariant functor between locally small categories is    faithful if all the functions of sets are injective.     full if all the functions of sets are surjective.     fully faithful if it is full and faithful.     essentially surjective if every object in is isomorphic to for in .    an embedding if it is fully faithful and injective on objects.       Forgetfull Functor is Faithful  The forgetful functor   is faithful since any two maps of -modules with the same source and target coincide if and only if they are the same function of sets. This functor is not full, since there not every functions between the underlying sets of two -modules is an -module homomorphism.    A fully faithful functor is not necessarily injective on objects, but it is injective on objects up to isomorphism.    A subcategory of is full if the inclusion functor is full.   Full Subcategories     The category of abelian groups is a full subcategory of .    The category whose objects are all sets and with arrows all bijections is a subcategory of that is not full.       The Functors         To close this section, here are the two of the most important functors we will discuss this semester:  Functors   Let be a locally small category. An object in induces two functors:   The covariant functor Set is defined as follows:   We may refer to this functor as the covariant functor represented by . Given an arrow in , we write . It is easier to see what does through the following commutative diagram:      The contravariant functor is defined as follows:   We may refer to this functor as the contravariant functor represented by . Given an arrow in , we write . It is easier to see what does through the following commutative diagram:         Check that and are indeed functors.  We will be particularly interested in the -functors in the category , which we will study in detail in a later chapter.    Functors we will be using: Hom, tensor, homology, localization      Functors are generalizatons of functions that allow us to move between categories. They can be either covariant or contravariant.    Two extremely important functors are the functors.     "
},
{
  "id": "sec-functors-2",
  "level": "2",
  "url": "sec-functors.html#sec-functors-2",
  "type": "Reminders and Recollections",
  "number": "1.2",
  "title": "",
  "body": "        "
},
{
  "id": "def-functor",
  "level": "2",
  "url": "sec-functors.html#def-functor",
  "type": "Definition",
  "number": "1.21",
  "title": "Functor.",
  "body": "Functor   Let and be categories. A covariant functor is a mapping that assigns to each object in an object in , and to each arrow an arrow , such that    preserves the composition of maps, meaning for all arrows and in , and     preserves the identity arrows, meaning for all objects in .     A contravariant functor  is a mapping that assigns to each object in an object in , and to each arrow an arrow , such that    preserves the composition of maps, meaning for all composable arrows and in , and     preserves the identity arrows, meaning for all objects in .      "
},
{
  "id": "subsec-functors-6",
  "level": "2",
  "url": "sec-functors.html#subsec-functors-6",
  "type": "Remark",
  "number": "1.22",
  "title": "",
  "body": " A contravariant functor can be thought of as a covariant functor , or also as a covariant functor . If using one of these conventions, one needs to be careful, however, when composing functors, so that the respective sources and targets match up correctly. While we haven't specially discussed how one composes functors, it should be clear that applying a functor and is the same as applying a functor , which we can write as .  For example, if and are both contravariant functors, the composition is a covariant functor, since   So we could think of as a covariant functor and as a covariant functor . Similarly, if is a covariant functor and is a contravariant functor, is a contravariant functor. In this case, we can think of as a covariant functor , so that is now a covariant functor .  "
},
{
  "id": "subsec-functors-7",
  "level": "2",
  "url": "sec-functors.html#subsec-functors-7",
  "type": "Exercise",
  "number": "1.23",
  "title": "Functors Preserve Isomorphisms.",
  "body": "Functors Preserve Isomorphisms Show that functors preserve isomorphisms. "
},
{
  "id": "subsec-functors-9",
  "level": "2",
  "url": "sec-functors.html#subsec-functors-9",
  "type": "Example",
  "number": "1.24",
  "title": "Functors.",
  "body": "Functors     Many categories one may think about are concrete categories, where the objects are sets with some extra structure, and the arrows are functions between those sets that preserved that extra structure. The forgetful functor from such a category to is the functor that, just as the name says, forgets that extra structure, and sees only the underlying sets and functions of sets. For example, the forgetful functor  sends each group to its underlying set, and each group homomorphism to the corresponding function of sets.    The identity functor  on any category does what the name suggests: it sends each object to itself and each arrow to itself.    Given a group , the subgroup of generated by the set of commutators is a normal subgroup, and the quotient is called the abelianization of . The group is abelian. Given a group homomorphism automatically takes commutators to commutators, so it induces a homomorphism . More precisely, abelianization gives a covariant functor from to .    The unit group functor  :   sends a ring to its group of units . To see this is indeed a functor, we should check it behaves well on morphisms; and indeed if is a ring homomorphism, and is a unit in , then so is a unit in . Thus induces a function given by restriction of to , which must therefore be a group homomorphism since preserves products.    Fix a field . Given a vector space , the collection of linear transformations from to is again a -vector space, the dual vector space of . If is a linear transformation and is an element of , then is in . Doing this for all elements gives a function , and one can show that is a linear transformation. The assignment that sends each vector space to its dual vector space and each linear transformation to is a contravariant functor on Vect- .    Localization is a functor. Let be a ring and be a multiplicatively closed set in . There is localization at induces a a functor  that sends each -module to , and each -module homomorphism to the -module homomorphism .     "
},
{
  "id": "subsec-functors-10",
  "level": "2",
  "url": "sec-functors.html#subsec-functors-10",
  "type": "Exercise",
  "number": "1.25",
  "title": "",
  "body": " If we apply a covariant functor to a diagram, then we get a diagram of the same shape:   However, if we apply a contravariant functor to the same diagram, we get a similar diagram but with the arrows reversed:   "
},
{
  "id": "def-functor-properties",
  "level": "2",
  "url": "sec-functors.html#def-functor-properties",
  "type": "Definition",
  "number": "1.26",
  "title": "",
  "body": "  A covariant functor between locally small categories is    faithful if all the functions of sets are injective.     full if all the functions of sets are surjective.     fully faithful if it is full and faithful.     essentially surjective if every object in is isomorphic to for in .    an embedding if it is fully faithful and injective on objects.      "
},
{
  "id": "subsec-funcor-props-5",
  "level": "2",
  "url": "sec-functors.html#subsec-funcor-props-5",
  "type": "Example",
  "number": "1.27",
  "title": "Forgetfull Functor is Faithful.",
  "body": "Forgetfull Functor is Faithful  The forgetful functor   is faithful since any two maps of -modules with the same source and target coincide if and only if they are the same function of sets. This functor is not full, since there not every functions between the underlying sets of two -modules is an -module homomorphism.  "
},
{
  "id": "subsec-funcor-props-6",
  "level": "2",
  "url": "sec-functors.html#subsec-funcor-props-6",
  "type": "Remark",
  "number": "1.28",
  "title": "",
  "body": " A fully faithful functor is not necessarily injective on objects, but it is injective on objects up to isomorphism.  "
},
{
  "id": "subsec-funcor-props-7",
  "level": "2",
  "url": "sec-functors.html#subsec-funcor-props-7",
  "type": "Remark",
  "number": "1.29",
  "title": "",
  "body": " A subcategory of is full if the inclusion functor is full.  "
},
{
  "id": "subsec-funcor-props-8",
  "level": "2",
  "url": "sec-functors.html#subsec-funcor-props-8",
  "type": "Example",
  "number": "1.30",
  "title": "Full Subcategories.",
  "body": "Full Subcategories     The category of abelian groups is a full subcategory of .    The category whose objects are all sets and with arrows all bijections is a subcategory of that is not full.     "
},
{
  "id": "def-hom-functor",
  "level": "2",
  "url": "sec-functors.html#def-hom-functor",
  "type": "Definition",
  "number": "1.31",
  "title": "<span class=\"process-math\">\\(\\Hom\\)<\/span> Functors.",
  "body": "Functors   Let be a locally small category. An object in induces two functors:   The covariant functor Set is defined as follows:   We may refer to this functor as the covariant functor represented by . Given an arrow in , we write . It is easier to see what does through the following commutative diagram:      The contravariant functor is defined as follows:   We may refer to this functor as the contravariant functor represented by . Given an arrow in , we write . It is easier to see what does through the following commutative diagram:        "
},
{
  "id": "subsec-hom-functors-5",
  "level": "2",
  "url": "sec-functors.html#subsec-hom-functors-5",
  "type": "Exercise",
  "number": "1.32",
  "title": "",
  "body": "Check that and are indeed functors. "
},
{
  "id": "sec-functors-7",
  "level": "2",
  "url": "sec-functors.html#sec-functors-7",
  "type": "Summary",
  "number": "1.2",
  "title": "",
  "body": "   Functors are generalizatons of functions that allow us to move between categories. They can be either covariant or contravariant.    Two extremely important functors are the functors.    "
},
{
  "id": "sec-natural-transformations",
  "level": "1",
  "url": "sec-natural-transformations.html",
  "type": "Section",
  "number": "1.3",
  "title": "Natural Transformations",
  "body": "Natural Transformations    Definitions: functor, hom sets, diagram, hom functors    Natural Transformations    The beauty of the natural world lies in the details.   Natalie Angier     Let and be covariant functors . A natural transformation between and is a mapping that to each object in assigns an arrow such that for all , the diagram   commutes. A natural isomorphism is a natural transformation  where each is an isomorphism. We sometimes write   or simply .  Let and be contravariant functors . A natural transformation between and is a mapping that to each object in assigns an arrow such that for all , the diagram   commutes.    Often, when studying a particular topic, we sometimes say a certain map is natural to mean that there is actually a natural transformation behind it.   Recall the abelianization functor we discussed in Example 1.26. The abelianization comes equipped with a natural projection map , the usual quotient map from to a normal subgroup. Here we mean natural in two different ways: both that this is common sense map to consider, and that this is in fact coming from a natural transformation. What's happening behind the scenes is that abelianization is a functor . On objects, the abelianizations functor is defined as . Given an arrow, meaning a group homomorphism , one can check that is contained in the kernel of , so factors through , and there exists a group homomorphism making the following diagram commute:   So the abelianization functor takes the arrow to . The commutativity of the diagram above says that is a natural transformation between the identity functor on and the abelianization functor, which we can write more compactly as    Functor Category   Let be two functors between the categories and . We write   Given two categories and , one can build a functor category  Yes, the madness is neverending. with objects all covariant functors , and arrows the corresponding natural transformations. This category is denoted . Sometimes one writes for , but we will avoid that, as it might make things even more confusing.    For the functor category to truly be a category, though, we need to know how to compose natural transformations.  Composition of Natural Transformations  Consider natural transformations   and   We can compose them for form a new natural transformation   We should think of this composition as happening vertically. For each object in sends to the arrow . This makes the diagram   commute.    Show that a natural transformation is a natural isomorphism if and only if there exists a natural transformation such that is the identity natural isomorphism on and is the identity natural isomorphism on .   Equivalent Categories   Two categories and are equivalent if there exist functors and and two natural isomorphisms and . We say that a functor is an equivalence of categories if there exists a functor and natural isomorphisms and as above.    If one assumes the Axiom of Choice, this is the right notion of isomorphism of two categories (though not in the categorical sense!); better said, two categories that are equivalent are essentially the same. Note that this does not mean that there is a bijection between the objects of and the objects of . In fact, one can show that a functor is an equivalence of categories if and only if it is fully faithful and essentially surjective - though this fact requires the Axiom of Choice!   Let be the category with one object and a unique arrow . Let be the category with two objects and and four arrows: the identities and two isomorphisms and . Let be the category with two objects and and only two arrows, and .   Show that and are equivalent categories.    Show that and are not equivalent categories.       The Yoneda Lemma    If it walks like a duck and homs like a duck, it's naturally isomorphic to a duck.   Twitter User @_julesh_   Even though this is only a short introduction to category theory, we would be remiss not to mention the , arguably the most important statement in category theory.  Yoneda Lemma   Let be a locally small category, and fix an object in . Let Set be a covariant functor. Then there is a bijection Moreover, this correspondence is natural in both and .    Let be a natural transformation in . The proof of the Yoneda Lemma is essentially the following diagram:   Our bijection will be defined by . We should first check that this makes sense: arrows in Set are just functions between sets, and so is a function of sets . Also, is a set that contains at least the element , and is some element in the set .  Given any fixed , the fact that is a natural transformation translates into the outer commutative diagram. In particular, the maps of sets and coincide, and must in particular take to the same element in . This is the commutativity of the inner diagram, with .  The commutativity of the diagram above says that is completely determined by , since for any other object in and any arrow , we necessarily have . In particular, our map is injective. Moreover, note that each choice of gives rise to a different natural transformation by setting . So our map is indeed a bijection.  We now have two naturality statements to prove. Naturality in the functor means that given a natural isomorphism , the diagram   commutes. Given a natural transformation between and , so commutativity does hold. Naturality on the object means that given an arrow , the diagram   commutes. Given a natural transformation between and , while Now notice that   Let's look back at the big commutative diagram we started our proof with: it says in particular that . So commutativity does hold, and we are done.    One can naturally (pun intended) define the notion of functor category of contravariant functors, and then prove the corresponding , which will instead use the contravariant Hom functor.  Contravariant version of the Yoneda Lemma  Let be a locally small category, and fix an object in . Let Set be a contravariant functor. Then there is a bijection    In a way, the says that to give a natural transformation between the functors and is choosing an element in .   Notice that the says in particular that the collection of all natural transformations from to is a set. This wasn't clear a priori, since the collection of objects in is not necessarily a set.    If we apply the to the case when itself is also a Hom functor, say , the says that there is a bijection between and . In particular, each arrow in determines a natural transformation between Hom functors.   One of the consequences of the is the Yoneda Embedding, which roughly says that every locally small category can be embedded into the category of contravariant functors from to Set. In particular, the Yoneda embedding says that natural transformations between representable functors correspond to arrows between the representing objects.  Yoneda Embedding   Let be a locally small category. The covariant functor   from to the category of contravariant functors Set is an embedding. Moreover, the contravariant functor   from the category to the category of covariant functors Set is also an embedding.    First, note that our functors are injective on objects because the Hom-sets in our category are all disjoint. We need to check that given objects and in , we have bijections and   We will do the details for the first one, and leave the second as an exercise.  First, let us take a sanity check and confirm that indeed our proposed functors take arrows in to natural transformations between and . This is essentially the content of Remark 1.43, but let's carefully check the details. The applied here tells us that each natural transformation between and corresponds to an element , which we obtain by taking . As we discussed in the proof of the , we can recover from by taking the natural transformation that for each object in has given by .  We can see that different arrows give rise to different natural transformations by applying the resulting natural transformation to the identity arrow , which takes it to . Moreover, the tells us that every natural transformation between and is the image of some , as described above.    The functors that are naturally isomorphic to some Hom functor are important.    A covariant functor Set is representable if there exists an object in such that is naturally isomorphic to . A contravariant functor Set is representable if there exists an object in such that is naturally isomorphic to .     We claim that the identity functor Set Set is representable. Let 1 be a singleton set. Given any set , there is a bijection between elements and functions sending the one element in to each . Moreover, given any other set , and a function , our bijections make the following diagram commute:   This data gives a natural isomorphism between the identity functor and .   A representable functor encodes a universal property of the object that represents it. For example, in Example 1.46, mapping out of the singleton set is the same as choosing an element in a set . We have all seen constructions that are at first a bit messy but that end up satisfying some nice universal property that makes everything work out. At the end of the day, a universal property allows us to ignore the messy details and focus on the universal property, which usually says everything we need to know about the construction. And as you may have already realized, universal properties are everywhere. Before we give a formal definition, we want to discuss some important examples.           "
},
{
  "id": "sec-natural-transformations-2",
  "level": "2",
  "url": "sec-natural-transformations.html#sec-natural-transformations-2",
  "type": "Reminders and Recollections",
  "number": "1.3",
  "title": "",
  "body": "  Definitions: functor, hom sets, diagram, hom functors   "
},
{
  "id": "def-natural-transformation",
  "level": "2",
  "url": "sec-natural-transformations.html#def-natural-transformation",
  "type": "Definition",
  "number": "1.33",
  "title": "",
  "body": "  Let and be covariant functors . A natural transformation between and is a mapping that to each object in assigns an arrow such that for all , the diagram   commutes. A natural isomorphism is a natural transformation  where each is an isomorphism. We sometimes write   or simply .  Let and be contravariant functors . A natural transformation between and is a mapping that to each object in assigns an arrow such that for all , the diagram   commutes.   "
},
{
  "id": "subsec-natural-5",
  "level": "2",
  "url": "sec-natural-transformations.html#subsec-natural-5",
  "type": "Example",
  "number": "1.34",
  "title": "",
  "body": " Recall the abelianization functor we discussed in Example 1.26. The abelianization comes equipped with a natural projection map , the usual quotient map from to a normal subgroup. Here we mean natural in two different ways: both that this is common sense map to consider, and that this is in fact coming from a natural transformation. What's happening behind the scenes is that abelianization is a functor . On objects, the abelianizations functor is defined as . Given an arrow, meaning a group homomorphism , one can check that is contained in the kernel of , so factors through , and there exists a group homomorphism making the following diagram commute:   So the abelianization functor takes the arrow to . The commutativity of the diagram above says that is a natural transformation between the identity functor on and the abelianization functor, which we can write more compactly as   "
},
{
  "id": "def-functor-category",
  "level": "2",
  "url": "sec-natural-transformations.html#def-functor-category",
  "type": "Definition",
  "number": "1.35",
  "title": "Functor Category.",
  "body": "Functor Category   Let be two functors between the categories and . We write   Given two categories and , one can build a functor category  Yes, the madness is neverending. with objects all covariant functors , and arrows the corresponding natural transformations. This category is denoted . Sometimes one writes for , but we will avoid that, as it might make things even more confusing.   "
},
{
  "id": "subsec-natural-8",
  "level": "2",
  "url": "sec-natural-transformations.html#subsec-natural-8",
  "type": "Remark",
  "number": "1.36",
  "title": "Composition of Natural Transformations.",
  "body": "Composition of Natural Transformations  Consider natural transformations   and   We can compose them for form a new natural transformation   We should think of this composition as happening vertically. For each object in sends to the arrow . This makes the diagram   commute.  "
},
{
  "id": "subsec-natural-9",
  "level": "2",
  "url": "sec-natural-transformations.html#subsec-natural-9",
  "type": "Exploration",
  "number": "1.1",
  "title": "",
  "body": " Show that a natural transformation is a natural isomorphism if and only if there exists a natural transformation such that is the identity natural isomorphism on and is the identity natural isomorphism on .  "
},
{
  "id": "def-equivalent-categories",
  "level": "2",
  "url": "sec-natural-transformations.html#def-equivalent-categories",
  "type": "Definition",
  "number": "1.37",
  "title": "Equivalent Categories.",
  "body": "Equivalent Categories   Two categories and are equivalent if there exist functors and and two natural isomorphisms and . We say that a functor is an equivalence of categories if there exists a functor and natural isomorphisms and as above.   "
},
{
  "id": "subsec-natural-12",
  "level": "2",
  "url": "sec-natural-transformations.html#subsec-natural-12",
  "type": "Exploration",
  "number": "1.2",
  "title": "",
  "body": " Let be the category with one object and a unique arrow . Let be the category with two objects and and four arrows: the identities and two isomorphisms and . Let be the category with two objects and and only two arrows, and .   Show that and are equivalent categories.    Show that and are not equivalent categories.     "
},
{
  "id": "thm-yoneda",
  "level": "2",
  "url": "sec-natural-transformations.html#thm-yoneda",
  "type": "Theorem",
  "number": "1.38",
  "title": "Yoneda Lemma.",
  "body": "Yoneda Lemma   Let be a locally small category, and fix an object in . Let Set be a covariant functor. Then there is a bijection Moreover, this correspondence is natural in both and .    Let be a natural transformation in . The proof of the Yoneda Lemma is essentially the following diagram:   Our bijection will be defined by . We should first check that this makes sense: arrows in Set are just functions between sets, and so is a function of sets . Also, is a set that contains at least the element , and is some element in the set .  Given any fixed , the fact that is a natural transformation translates into the outer commutative diagram. In particular, the maps of sets and coincide, and must in particular take to the same element in . This is the commutativity of the inner diagram, with .  The commutativity of the diagram above says that is completely determined by , since for any other object in and any arrow , we necessarily have . In particular, our map is injective. Moreover, note that each choice of gives rise to a different natural transformation by setting . So our map is indeed a bijection.  We now have two naturality statements to prove. Naturality in the functor means that given a natural isomorphism , the diagram   commutes. Given a natural transformation between and , so commutativity does hold. Naturality on the object means that given an arrow , the diagram   commutes. Given a natural transformation between and , while Now notice that   Let's look back at the big commutative diagram we started our proof with: it says in particular that . So commutativity does hold, and we are done.   "
},
{
  "id": "subsec-yoneda-6",
  "level": "2",
  "url": "sec-natural-transformations.html#subsec-yoneda-6",
  "type": "Exploration",
  "number": "1.3",
  "title": "Contravariant version of the Yoneda Lemma.",
  "body": "Contravariant version of the Yoneda Lemma  Let be a locally small category, and fix an object in . Let Set be a contravariant functor. Then there is a bijection   "
},
{
  "id": "subsec-yoneda-8",
  "level": "2",
  "url": "sec-natural-transformations.html#subsec-yoneda-8",
  "type": "Remark",
  "number": "1.39",
  "title": "",
  "body": " Notice that the says in particular that the collection of all natural transformations from to is a set. This wasn't clear a priori, since the collection of objects in is not necessarily a set.  "
},
{
  "id": "subsec-yoneda-9",
  "level": "2",
  "url": "sec-natural-transformations.html#subsec-yoneda-9",
  "type": "Remark",
  "number": "1.40",
  "title": "",
  "body": " If we apply the to the case when itself is also a Hom functor, say , the says that there is a bijection between and . In particular, each arrow in determines a natural transformation between Hom functors.  "
},
{
  "id": "thm-yondea-embedding",
  "level": "2",
  "url": "sec-natural-transformations.html#thm-yondea-embedding",
  "type": "Theorem",
  "number": "1.41",
  "title": "Yoneda Embedding.",
  "body": "Yoneda Embedding   Let be a locally small category. The covariant functor   from to the category of contravariant functors Set is an embedding. Moreover, the contravariant functor   from the category to the category of covariant functors Set is also an embedding.    First, note that our functors are injective on objects because the Hom-sets in our category are all disjoint. We need to check that given objects and in , we have bijections and   We will do the details for the first one, and leave the second as an exercise.  First, let us take a sanity check and confirm that indeed our proposed functors take arrows in to natural transformations between and . This is essentially the content of Remark 1.43, but let's carefully check the details. The applied here tells us that each natural transformation between and corresponds to an element , which we obtain by taking . As we discussed in the proof of the , we can recover from by taking the natural transformation that for each object in has given by .  We can see that different arrows give rise to different natural transformations by applying the resulting natural transformation to the identity arrow , which takes it to . Moreover, the tells us that every natural transformation between and is the image of some , as described above.   "
},
{
  "id": "def-representable-functor",
  "level": "2",
  "url": "sec-natural-transformations.html#def-representable-functor",
  "type": "Definition",
  "number": "1.42",
  "title": "",
  "body": "  A covariant functor Set is representable if there exists an object in such that is naturally isomorphic to . A contravariant functor Set is representable if there exists an object in such that is naturally isomorphic to .   "
},
{
  "id": "subsec-yoneda-14",
  "level": "2",
  "url": "sec-natural-transformations.html#subsec-yoneda-14",
  "type": "Example",
  "number": "1.43",
  "title": "",
  "body": " We claim that the identity functor Set Set is representable. Let 1 be a singleton set. Given any set , there is a bijection between elements and functions sending the one element in to each . Moreover, given any other set , and a function , our bijections make the following diagram commute:   This data gives a natural isomorphism between the identity functor and .  "
},
{
  "id": "sec-natural-transformations-5",
  "level": "2",
  "url": "sec-natural-transformations.html#sec-natural-transformations-5",
  "type": "Summary",
  "number": "1.3",
  "title": "",
  "body": "       "
},
{
  "id": "sec-compelx-maps",
  "level": "1",
  "url": "sec-compelx-maps.html",
  "type": "Section",
  "number": "2.1",
  "title": "Maps of Complexes",
  "body": "Maps of Complexes    Definitions: category, complex     We are finally ready to introduce the category of chain complexes, and to talk more about exact sequences in homology.   Establishing    A chain is no stronger than its weakest link, and life is after all a chain.   William James   Unsurprisingly, we can form a category of complexes, but to do that we need the right definition of maps between complexes. We also take this section as a chance to set up some definitions we will need later. One thing to keep in mind as we build our basic definitions: we also want homology to be functorial.  Chain Map   Let and be complexes. A map of complexes or a chain map , which we write as or simply , is a sequence of homomorphisms of -modules such that the following diagram commutes:   This means that for all .    Map vs. Chain Map  Note that throughout, whenever we call a function between -modules and a map , we really mean to say it is a homomorphism of -modules.   Zero and Identity Chain Maps  The zero and the identity maps of complexes are exactly what they sound like: the zero map is 0 in every homological degree, and the identity map is the identity in every homological degree.   This is the notion of morphism we would want to form a category of chain complexes.  Category of Chain Complexes   Let be a ring. The category of chain complexes of -modules, denoted or simply , is the category with objects all chain complexes of -modules and arrows all maps of complexes of -modules.     When , we write for , the category of chain complexes of abelian groups.   Note that the identity maps defined above are precisely the identity arrows in the category of chain complexes.  Understanding    Verify that is indeed a category.    Show that the isomorphisms in the category are precisely the maps of complexes   such that is an isomorphism for all .     This is a good notion of map of complexes: it induces homomorphisms in homology, which in particular allows us to say that homology is a functor.  Induced Homomorphisms on Homology   Let be a map of complexes. For all restricts to homomorphisms    and     .   As a consequence, induces homomorphisms on homology .     Since , any element , say , is taken to   Similarly, if , then so . Finally, the restriction of to sends into , and thus it induces a well-defined homomorphism on the quotients .    Induced Map in Homology   Let be a map of complexes. We call the map the induced map in homology , and sometimes denote it by .    Homology Functor  One can show that preserves compositions, and that moreover, the map in homology induced by the identity is the identity. Thus taking th homology is a functor which takes each map of complexes to the -module homomorphism    Quasi-Isomorphism   A map of chain complexes is a quasi-isomorphism if it induces an isomorphism in homology, meaning is an isomorphism of -modules for all . If there exists a quasi-isomorphism between two complexes and , we say that and are quasi-isomorphic , and write .     Note that saying that if is a quasi-isomorphism between and is a stronger statement that the fact that for all : it also says that there are isomorphisms that are all induced by .   Not all quasi-isomorphisms are isomorphisms, as the following example shows:   Let denote the projection map from to . The chain map   is a quasi-isomorphism.   When we look at the induced map of on homology, the only index where the induced homomorphism may not be is at . Observe however, that is the identity map, as is mapped to and is mapped to . Thus is indeed a quasi-isomorphism.    Homotopy    Transformation is not automatic. It must be learned; it must be led.   W. Edwards Deming   Homotopy   Let be maps complexes. A homotopy , sometimes referred to as a chain homotopy , between and is a sequence of maps    such that for all . If there exists a homotopy between and , we say that and are homotopic or that they have the same homotopy type . We write to say that and are homotopic. If is homotopic to the zero map, we say is nullhomotopic , and write . This should not be confused with the notation on complexes.    Homotopy is an Equivalence Relation Homotopy is an equivalence relation.  The equivalence classes under homotopy are called homotopy classes. Homotopy is an interesting equivalence relation because homotopic maps induce the same map on homology.  Nullhomotopic Maps Induce Zero Map in Homology   Let be maps of complexes. If is homotopic to , then for all . In particular, every nullhomotopic map induces the zero map in homology.    Let be homotopic maps of complexes, and let be a homotopy between and . We claim that the map of complexes (defined in the obvious way) sends cycles to boundaries. If , then The map on homology induced by must then be the map, so and induce the same map on homology. Here we are implicitly using the fact that , which we leave as an exercise to be further explored in .    Notice, however, that the converse is false: the induced map in homology can be the zero map (for all homological degrees) even if the original map of complexes is not nullhomotopic.  Consider the following map of complexes: Show that this map is not nullhomotopic, but that the induced map in homology is zero.  Homotopy Equivalent   If and are maps of complexes such that is homotopic to the identity map on and is homotopic to the identity chain map on , we say that and are homotopy equivalences and and are homotopy equivalent .    Homotopy Equvivalences are Quasi-Isomorphisms   Homotopy equivalences are quasi-isomorphisms.    If and are such that is homotopic to and is homotopic to , then by the map induces the identity map on homology. So for all we have Therefore, and must both be isomorphisms.    The converse is false.  Let denote the projection map from to . The chain map is a quasi-isomorphism but not a homotopy equivalence.   The relation , meaning \"there is a quasi-isomorphism from to \", is not symmetric: in , there is no quasi-isomorphism going in the opposite direction of the one given.    Complexes of Complexes    Every complex problem has a simple solution that doesn't work.   H.L. Mencken   Now that we know about maps between complexes, it's time to point out that we can also talk about complexes of complexes and exact sequences of complexes. While we will later formalize this a little better when we discover that is an abelian category , let's for now give quick definitions that we can use.  Subcomplexes and Quotient Complexes   Given complexes and is a subcomplex of if is a submodule of for all , and the inclusion maps define a map of complexes .  Given a subcomplex of , the quotient of by is the complex that has in homological degree , with differential induced by the differential on .    Subcomplex Maps are Well-Defined If is a subcomplex of , then the differential on satisfies . Therefore, induces a map of -modules for all , so that our definition of the differential on actually makes sense.  We can also talk about kernels and cokernels of maps of complexes.  Kernel, Cokernel   Given any map of complexes , the kernel of is the subcomplex of that we can assemble from the the kernels . More precisely, is the complex where the differentials are simply the corresponding restrictions of the differentials on .  Similarly, the image of is the subcomplex of . where the differentials are given by restriction of the corresponding differentials in . The cokernel of is the quotient complex .    Again, there are some details to check.  Show that the kernel, image, and cokernel of a complex map are indeed complexes.  Complexes in   A complex in is a sequence of complexes of -modules and chain maps between them such that for all . A complex of complexes is a diagram of the form   where is the module in homological degree in the complex . The th column corresponds to the complex , and every row is also a complex. The vertical maps are the differentials on each individual complex; the horizontal maps are the differentials on the complex of complexes.    Given a complex in , we can talk about cycles and boundaries, which are a sequence of subcomplexes of the complexes in , and thus its homology. Such a complex is exact if for all .  Short Exact Sequences in   A short exact sequence of complexes is an exact complex in of the form Equivalently, a short exact sequence of complexes is a commutative diagram   where the rows are exact and the columns are complexes.             "
},
{
  "id": "sec-compelx-maps-2",
  "level": "2",
  "url": "sec-compelx-maps.html#sec-compelx-maps-2",
  "type": "Reminders and Recollections",
  "number": "2.1",
  "title": "",
  "body": "  Definitions: category, complex   "
},
{
  "id": "def-2.1",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.1",
  "type": "Definition",
  "number": "2.1",
  "title": "Chain Map.",
  "body": "Chain Map   Let and be complexes. A map of complexes or a chain map , which we write as or simply , is a sequence of homomorphisms of -modules such that the following diagram commutes:   This means that for all .   "
},
{
  "id": "subsec--5",
  "level": "2",
  "url": "sec-compelx-maps.html#subsec--5",
  "type": "Convention",
  "number": "2.2",
  "title": "Map vs. Chain Map.",
  "body": "Map vs. Chain Map  Note that throughout, whenever we call a function between -modules and a map , we really mean to say it is a homomorphism of -modules.  "
},
{
  "id": "ex-2.2",
  "level": "2",
  "url": "sec-compelx-maps.html#ex-2.2",
  "type": "Example",
  "number": "2.3",
  "title": "Zero and Identity Chain Maps.",
  "body": "Zero and Identity Chain Maps  The zero and the identity maps of complexes are exactly what they sound like: the zero map is 0 in every homological degree, and the identity map is the identity in every homological degree.  "
},
{
  "id": "def-2.3",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.3",
  "type": "Definition",
  "number": "2.4",
  "title": "Category of Chain Complexes.",
  "body": "Category of Chain Complexes   Let be a ring. The category of chain complexes of -modules, denoted or simply , is the category with objects all chain complexes of -modules and arrows all maps of complexes of -modules.   "
},
{
  "id": "subsec--9",
  "level": "2",
  "url": "sec-compelx-maps.html#subsec--9",
  "type": "Convention",
  "number": "2.5",
  "title": "<span class=\"process-math\">\\(\\mathrm{Ch}(\\mathrm{Ab})\\)<\/span>.",
  "body": " When , we write for , the category of chain complexes of abelian groups.  "
},
{
  "id": "exe-25",
  "level": "2",
  "url": "sec-compelx-maps.html#exe-25",
  "type": "Exercise",
  "number": "2.6",
  "title": "Understanding <span class=\"process-math\">\\(\\mathrm{Ch}(R)\\)<\/span>.",
  "body": "Understanding    Verify that is indeed a category.    Show that the isomorphisms in the category are precisely the maps of complexes   such that is an isomorphism for all .    "
},
{
  "id": "lem-2.4",
  "level": "2",
  "url": "sec-compelx-maps.html#lem-2.4",
  "type": "Lemma",
  "number": "2.7",
  "title": "Induced Homomorphisms on Homology.",
  "body": "Induced Homomorphisms on Homology   Let be a map of complexes. For all restricts to homomorphisms    and     .   As a consequence, induces homomorphisms on homology .     Since , any element , say , is taken to   Similarly, if , then so . Finally, the restriction of to sends into , and thus it induces a well-defined homomorphism on the quotients .   "
},
{
  "id": "def-2.5",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.5",
  "type": "Definition",
  "number": "2.8",
  "title": "Induced Map in Homology.",
  "body": "Induced Map in Homology   Let be a map of complexes. We call the map the induced map in homology , and sometimes denote it by .   "
},
{
  "id": "subsec--15",
  "level": "2",
  "url": "sec-compelx-maps.html#subsec--15",
  "type": "Exercise",
  "number": "2.9",
  "title": "Homology Functor.",
  "body": "Homology Functor  One can show that preserves compositions, and that moreover, the map in homology induced by the identity is the identity. Thus taking th homology is a functor which takes each map of complexes to the -module homomorphism   "
},
{
  "id": "def-2.6",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.6",
  "type": "Definition",
  "number": "2.10",
  "title": "Quasi-Isomorphism.",
  "body": "Quasi-Isomorphism   A map of chain complexes is a quasi-isomorphism if it induces an isomorphism in homology, meaning is an isomorphism of -modules for all . If there exists a quasi-isomorphism between two complexes and , we say that and are quasi-isomorphic , and write .   "
},
{
  "id": "rem-2.7",
  "level": "2",
  "url": "sec-compelx-maps.html#rem-2.7",
  "type": "Remark",
  "number": "2.11",
  "title": "",
  "body": " Note that saying that if is a quasi-isomorphism between and is a stronger statement that the fact that for all : it also says that there are isomorphisms that are all induced by .  "
},
{
  "id": "exe-26",
  "level": "2",
  "url": "sec-compelx-maps.html#exe-26",
  "type": "Exercise",
  "number": "2.12",
  "title": "",
  "body": " Let denote the projection map from to . The chain map   is a quasi-isomorphism.   When we look at the induced map of on homology, the only index where the induced homomorphism may not be is at . Observe however, that is the identity map, as is mapped to and is mapped to . Thus is indeed a quasi-isomorphism.  "
},
{
  "id": "def-2.8",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.8",
  "type": "Definition",
  "number": "2.13",
  "title": "Homotopy.",
  "body": "Homotopy   Let be maps complexes. A homotopy , sometimes referred to as a chain homotopy , between and is a sequence of maps    such that for all . If there exists a homotopy between and , we say that and are homotopic or that they have the same homotopy type . We write to say that and are homotopic. If is homotopic to the zero map, we say is nullhomotopic , and write . This should not be confused with the notation on complexes.   "
},
{
  "id": "exe-27",
  "level": "2",
  "url": "sec-compelx-maps.html#exe-27",
  "type": "Exercise",
  "number": "2.14",
  "title": "Homotopy is an Equivalence Relation.",
  "body": "Homotopy is an Equivalence Relation Homotopy is an equivalence relation. "
},
{
  "id": "lem-2.9",
  "level": "2",
  "url": "sec-compelx-maps.html#lem-2.9",
  "type": "Lemma",
  "number": "2.15",
  "title": "Nullhomotopic Maps Induce Zero Map in Homology.",
  "body": "Nullhomotopic Maps Induce Zero Map in Homology   Let be maps of complexes. If is homotopic to , then for all . In particular, every nullhomotopic map induces the zero map in homology.    Let be homotopic maps of complexes, and let be a homotopy between and . We claim that the map of complexes (defined in the obvious way) sends cycles to boundaries. If , then The map on homology induced by must then be the map, so and induce the same map on homology. Here we are implicitly using the fact that , which we leave as an exercise to be further explored in .   "
},
{
  "id": "exe-28",
  "level": "2",
  "url": "sec-compelx-maps.html#exe-28",
  "type": "Exercise",
  "number": "2.16",
  "title": "",
  "body": "Consider the following map of complexes: Show that this map is not nullhomotopic, but that the induced map in homology is zero. "
},
{
  "id": "def-2.10",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.10",
  "type": "Definition",
  "number": "2.17",
  "title": "Homotopy Equivalent.",
  "body": "Homotopy Equivalent   If and are maps of complexes such that is homotopic to the identity map on and is homotopic to the identity chain map on , we say that and are homotopy equivalences and and are homotopy equivalent .   "
},
{
  "id": "cor-2.11",
  "level": "2",
  "url": "sec-compelx-maps.html#cor-2.11",
  "type": "Corollary",
  "number": "2.18",
  "title": "Homotopy Equvivalences are Quasi-Isomorphisms.",
  "body": "Homotopy Equvivalences are Quasi-Isomorphisms   Homotopy equivalences are quasi-isomorphisms.    If and are such that is homotopic to and is homotopic to , then by the map induces the identity map on homology. So for all we have Therefore, and must both be isomorphisms.   "
},
{
  "id": "exe-29",
  "level": "2",
  "url": "sec-compelx-maps.html#exe-29",
  "type": "Exercise",
  "number": "2.19",
  "title": "",
  "body": "Let denote the projection map from to . The chain map is a quasi-isomorphism but not a homotopy equivalence. "
},
{
  "id": "rem-2.12",
  "level": "2",
  "url": "sec-compelx-maps.html#rem-2.12",
  "type": "Remark",
  "number": "2.20",
  "title": "",
  "body": " The relation , meaning \"there is a quasi-isomorphism from to \", is not symmetric: in , there is no quasi-isomorphism going in the opposite direction of the one given.  "
},
{
  "id": "def-2.13",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.13",
  "type": "Definition",
  "number": "2.21",
  "title": "Subcomplexes and Quotient Complexes.",
  "body": "Subcomplexes and Quotient Complexes   Given complexes and is a subcomplex of if is a submodule of for all , and the inclusion maps define a map of complexes .  Given a subcomplex of , the quotient of by is the complex that has in homological degree , with differential induced by the differential on .   "
},
{
  "id": "exe-30",
  "level": "2",
  "url": "sec-compelx-maps.html#exe-30",
  "type": "Exercise",
  "number": "2.22",
  "title": "Subcomplex Maps are Well-Defined.",
  "body": "Subcomplex Maps are Well-Defined If is a subcomplex of , then the differential on satisfies . Therefore, induces a map of -modules for all , so that our definition of the differential on actually makes sense. "
},
{
  "id": "def-2.14",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.14",
  "type": "Definition",
  "number": "2.23",
  "title": "Kernel, Cokernel.",
  "body": "Kernel, Cokernel   Given any map of complexes , the kernel of is the subcomplex of that we can assemble from the the kernels . More precisely, is the complex where the differentials are simply the corresponding restrictions of the differentials on .  Similarly, the image of is the subcomplex of . where the differentials are given by restriction of the corresponding differentials in . The cokernel of is the quotient complex .   "
},
{
  "id": "exe-31",
  "level": "2",
  "url": "sec-compelx-maps.html#exe-31",
  "type": "Exercise",
  "number": "2.24",
  "title": "",
  "body": "Show that the kernel, image, and cokernel of a complex map are indeed complexes. "
},
{
  "id": "def-2.15",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.15",
  "type": "Definition",
  "number": "2.25",
  "title": "Complexes in <span class=\"process-math\">\\(\\mathrm{Ch}(R)\\)<\/span>.",
  "body": "Complexes in   A complex in is a sequence of complexes of -modules and chain maps between them such that for all . A complex of complexes is a diagram of the form   where is the module in homological degree in the complex . The th column corresponds to the complex , and every row is also a complex. The vertical maps are the differentials on each individual complex; the horizontal maps are the differentials on the complex of complexes.   "
},
{
  "id": "def-2.16",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.16",
  "type": "Definition",
  "number": "2.26",
  "title": "Short Exact Sequences in <span class=\"process-math\">\\(\\mathrm{Ch}(R)\\)<\/span>.",
  "body": "Short Exact Sequences in   A short exact sequence of complexes is an exact complex in of the form Equivalently, a short exact sequence of complexes is a commutative diagram   where the rows are exact and the columns are complexes.   "
},
{
  "id": "sec-compelx-maps-7",
  "level": "2",
  "url": "sec-compelx-maps.html#sec-compelx-maps-7",
  "type": "Summary",
  "number": "2.1",
  "title": "",
  "body": "       "
},
{
  "id": "sec-split",
  "level": "1",
  "url": "sec-split.html",
  "type": "Section",
  "number": "2.2",
  "title": "Split Exact Sequences",
  "body": "Split Exact Sequences        Definition and the Splitting Lemma    The split in you is clear.   John Cantwell Kiley   In this section, we will discuss short exact sequences of modules in a bit more detail. We note, however, that everything we will discuss here can be extended for short exact sequences of complexes, and that the generalization is not too difficult: one just needs to replace modules with complexes and maps of modules by maps of complexes.   Fix a ring , and let and be -modules. Consider the inclusion of into the first component of the direct sum, and the projection map onto the second component of the product. These two maps fit into a short exact sequence These are sometimes called trivial short exact sequences .   On the one hand, the short exact sequences that look like this one are very important; on the other hand, not all short exact sequences are of this type.  Split Short Exact Sequences   We say that a short exact sequence  splits or is a split short exact sequence if it is isomorphic to where is the inclusion of the first component and is the projection onto the second component.    Splitting Lemma   Consider the short exact sequence of -modules. The following are equivalent:   There exists a homomorphism of -modules such that .    There exists a homomorphism of -modules such that .    The short exact sequence splits.       First, we will show that c implies a and b. If the sequence splits, then consider an isomorphism of complexes   meaning that the diagram commutes and , and are isomorphisms of -modules, is the inclusion in the first component, and is the projection onto the second component. Let be the projection onto the first component, and be the inclusion onto the first component. Now consider the maps and . Then and Therefore, c implies a and b.  Now suppose that a holds, and let's show that the sequence splits. First, we need to show that . Every can be written as where , and so . This shows that . Moreover, if , then , so , and . Now when we restrict to becomes injective. We claim it is also surjective, and thus an isomorphism. Indeed, for any we can pick such that , since is surjective, and we showed that we can write for some . Then Finally, note that , so we conclude that , via the isomorphism given by Since and , so , where is the inclusion on the first factor. If denotes the projection onto the second factor, . Together, these two facts say that the following is a map of complexes:   Since is an isomorphism, so is our map of complexes, and thus our original sequence is a split exact sequence. This shows that a implies .  Now assume b holds. Every can be written as where and so . This shows that . Moreover, if , then Therefore, . Now is injective, since , and thus . Since , we conclude that , via the isomorphism Finally, let denote the inclusion of the first factor, and denote the projection onto the second factor. By construction, . Moreover, so . Together, these say that the diagram   commutes, and must then be an isomorphism of short exact sequences.      Given a split short exact sequence maps and satisfying the conditions of the Splitting Lemma are called splittings.     In the split short exact sequence the canonical projection and the usual inclusion are splittings.    When Do Short Exact Sequences Split?         Let be a field. Show that every short exact sequence of -vector spaces splits.  The Rank-Nulity Theorem can be recast in this setting as a consequence of the fact that every short exact sequence of -vector spaces splits.  Prove the Rank-Nulity Theorem using : show that given any linear transformation of -vector spaces,   But over a general ring, not every short exact sequence splits.   The short exact sequence is not split. Indeed, does not have any 2 -torsion elements, so it is not isomorphic to .  An alternative explanation is that there is no splitting to the inclusion . On the one hand, every -module map is given by multiplication by a fixed integer , so a splitting would be of the form for some fixed . On the other hand, our proposed splitting must send to , but there is no integer solution to .   More surprisingly, a short exact sequence of the form is not necessarily split, not unless is the inclusion of the first component and is the projection onto the second component, as the next example will show.   Consider the short exact sequence where is the inclusion of the subgroup generated by 2, so , and is the quotient onto that subgroup, meaning . This is not a split short exact sequence, because . Now let be the direct sum of infinitely many copies of . Then and the sequence with and is still exact. The middle term is indeed isomorphic to the direct sum of the other two: And yet this is not a split exact sequence: if we had a splitting of , then its restriction to the first factor would give us a splitting of , which we know cannot exist, since does not split.   Given splittings and for a short exact sequence as in , we can quickly show that our short exact sequence splits using the Five Lemma. To prove the Five Lemma, one needs to use diagram chasing. Diagram chasing is a common technique in homological algebra, which essentially consists of tracing elements around in the diagram. We will see some examples of diagram chasing in the next section.  The Five Lemma Consider the following commutative diagram of -modules with exact rows: Show that if , and are isomorphisms, then is an isomorphism.   Given a short exact sequence, suppose we have -module homomorphisms and    such that and . Then we get an induced map such that the diagram   commutes. The guarantees that must be an isomorphism, so our diagram is an isomorphism of short exact sequences.   There are many ways in which -Mod behaves better than the category of groups, and this is one of them.   The does not hold if we replace -modules with the category of groups. For example, consider the symmetric group on 3 elements and the inclusion of the alternating group in . Notice that is precisely the kernel of the sign map which sends even permutations to and odd permutations to . Therefore, is a short exact sequence. When writing exact sequences of nonabelian groups such as this one, one sometimes uses for instead of , to indicate that trivial group. So our short exact sequence is   Moreover, this exact sequence is not split, since is not abelian but is, and thus . However, any group homomorphism defined by sending the generator to any two cycle is a splitting for our short exact sequence, meaning signo .  Funny enough, there is no splitting for the inclusion , since there are no nontrivial homomorphisms has no elements of order , so a group homomorphism must send every -cycle in must be sent to the identity, but -cycles generate .   We will return to the topic of split short exact sequences when we talk about projective and injective modules.  Fix a ring . Show that if is a free -module, then every short exact sequence of -modules splits.           "
},
{
  "id": "sec-split-2",
  "level": "2",
  "url": "sec-split.html#sec-split-2",
  "type": "Reminders and Recollections",
  "number": "2.2",
  "title": "",
  "body": "     "
},
{
  "id": "ex-2.17",
  "level": "2",
  "url": "sec-split.html#ex-2.17",
  "type": "Example",
  "number": "2.27",
  "title": "",
  "body": " Fix a ring , and let and be -modules. Consider the inclusion of into the first component of the direct sum, and the projection map onto the second component of the product. These two maps fit into a short exact sequence These are sometimes called trivial short exact sequences .  "
},
{
  "id": "def-2.18",
  "level": "2",
  "url": "sec-split.html#def-2.18",
  "type": "Definition",
  "number": "2.28",
  "title": "Split Short Exact Sequences.",
  "body": "Split Short Exact Sequences   We say that a short exact sequence  splits or is a split short exact sequence if it is isomorphic to where is the inclusion of the first component and is the projection onto the second component.   "
},
{
  "id": "lem-2.19",
  "level": "2",
  "url": "sec-split.html#lem-2.19",
  "type": "Lemma",
  "number": "2.29",
  "title": "Splitting Lemma.",
  "body": "Splitting Lemma   Consider the short exact sequence of -modules. The following are equivalent:   There exists a homomorphism of -modules such that .    There exists a homomorphism of -modules such that .    The short exact sequence splits.       First, we will show that c implies a and b. If the sequence splits, then consider an isomorphism of complexes   meaning that the diagram commutes and , and are isomorphisms of -modules, is the inclusion in the first component, and is the projection onto the second component. Let be the projection onto the first component, and be the inclusion onto the first component. Now consider the maps and . Then and Therefore, c implies a and b.  Now suppose that a holds, and let's show that the sequence splits. First, we need to show that . Every can be written as where , and so . This shows that . Moreover, if , then , so , and . Now when we restrict to becomes injective. We claim it is also surjective, and thus an isomorphism. Indeed, for any we can pick such that , since is surjective, and we showed that we can write for some . Then Finally, note that , so we conclude that , via the isomorphism given by Since and , so , where is the inclusion on the first factor. If denotes the projection onto the second factor, . Together, these two facts say that the following is a map of complexes:   Since is an isomorphism, so is our map of complexes, and thus our original sequence is a split exact sequence. This shows that a implies .  Now assume b holds. Every can be written as where and so . This shows that . Moreover, if , then Therefore, . Now is injective, since , and thus . Since , we conclude that , via the isomorphism Finally, let denote the inclusion of the first factor, and denote the projection onto the second factor. By construction, . Moreover, so . Together, these say that the diagram   commutes, and must then be an isomorphism of short exact sequences.   "
},
{
  "id": "def-2.20",
  "level": "2",
  "url": "sec-split.html#def-2.20",
  "type": "Definition",
  "number": "2.30",
  "title": "",
  "body": "  Given a split short exact sequence maps and satisfying the conditions of the Splitting Lemma are called splittings.   "
},
{
  "id": "rem-2.21",
  "level": "2",
  "url": "sec-split.html#rem-2.21",
  "type": "Remark",
  "number": "2.31",
  "title": "",
  "body": " In the split short exact sequence the canonical projection and the usual inclusion are splittings.  "
},
{
  "id": "exe-32",
  "level": "2",
  "url": "sec-split.html#exe-32",
  "type": "Exercise",
  "number": "2.32",
  "title": "",
  "body": "Let be a field. Show that every short exact sequence of -vector spaces splits. "
},
{
  "id": "exe-33",
  "level": "2",
  "url": "sec-split.html#exe-33",
  "type": "Exercise",
  "number": "2.33",
  "title": "",
  "body": "Prove the Rank-Nulity Theorem using : show that given any linear transformation of -vector spaces,  "
},
{
  "id": "ex-2.22",
  "level": "2",
  "url": "sec-split.html#ex-2.22",
  "type": "Example",
  "number": "2.34",
  "title": "",
  "body": " The short exact sequence is not split. Indeed, does not have any 2 -torsion elements, so it is not isomorphic to .  An alternative explanation is that there is no splitting to the inclusion . On the one hand, every -module map is given by multiplication by a fixed integer , so a splitting would be of the form for some fixed . On the other hand, our proposed splitting must send to , but there is no integer solution to .  "
},
{
  "id": "ex-2.23",
  "level": "2",
  "url": "sec-split.html#ex-2.23",
  "type": "Example",
  "number": "2.35",
  "title": "",
  "body": " Consider the short exact sequence where is the inclusion of the subgroup generated by 2, so , and is the quotient onto that subgroup, meaning . This is not a split short exact sequence, because . Now let be the direct sum of infinitely many copies of . Then and the sequence with and is still exact. The middle term is indeed isomorphic to the direct sum of the other two: And yet this is not a split exact sequence: if we had a splitting of , then its restriction to the first factor would give us a splitting of , which we know cannot exist, since does not split.  "
},
{
  "id": "five-lemma",
  "level": "2",
  "url": "sec-split.html#five-lemma",
  "type": "Exercise",
  "number": "2.36",
  "title": "The Five Lemma.",
  "body": "The Five Lemma Consider the following commutative diagram of -modules with exact rows: Show that if , and are isomorphisms, then is an isomorphism. "
},
{
  "id": "rem-2.24",
  "level": "2",
  "url": "sec-split.html#rem-2.24",
  "type": "Remark",
  "number": "2.37",
  "title": "",
  "body": " Given a short exact sequence, suppose we have -module homomorphisms and    such that and . Then we get an induced map such that the diagram   commutes. The guarantees that must be an isomorphism, so our diagram is an isomorphism of short exact sequences.  "
},
{
  "id": "rem-2.25",
  "level": "2",
  "url": "sec-split.html#rem-2.25",
  "type": "Remark",
  "number": "2.38",
  "title": "",
  "body": " The does not hold if we replace -modules with the category of groups. For example, consider the symmetric group on 3 elements and the inclusion of the alternating group in . Notice that is precisely the kernel of the sign map which sends even permutations to and odd permutations to . Therefore, is a short exact sequence. When writing exact sequences of nonabelian groups such as this one, one sometimes uses for instead of , to indicate that trivial group. So our short exact sequence is   Moreover, this exact sequence is not split, since is not abelian but is, and thus . However, any group homomorphism defined by sending the generator to any two cycle is a splitting for our short exact sequence, meaning signo .  Funny enough, there is no splitting for the inclusion , since there are no nontrivial homomorphisms has no elements of order , so a group homomorphism must send every -cycle in must be sent to the identity, but -cycles generate .  "
},
{
  "id": "exe-35",
  "level": "2",
  "url": "sec-split.html#exe-35",
  "type": "Exercise",
  "number": "2.39",
  "title": "",
  "body": "Fix a ring . Show that if is a free -module, then every short exact sequence of -modules splits. "
},
{
  "id": "sec-split-5",
  "level": "2",
  "url": "sec-split.html#sec-split-5",
  "type": "Summary",
  "number": "2.2",
  "title": "",
  "body": "       "
},
{
  "id": "sec-les",
  "level": "1",
  "url": "sec-les.html",
  "type": "Section",
  "number": "2.3",
  "title": "Long Exact Sequences",
  "body": "Long Exact Sequences        The Snake Lemma         A long exact sequence is just what it sounds like: an exact sequence that is, well, long. Usually, we use the term long exact sequence to refer to any exact sequence, especially if it is not a short exact sequence. So in particular, a long exact sequence does not literally have to be that long.  Long exact sequences arise naturally in various ways, and are often induced by some short exact sequence. The first long exact sequence one encounters is the long exact sequence on homology. All other long exact sequences are, in some way, a special case of this one. The main tool we need to build it is the Snake Lemma.  Snake Lemma   Consider the commutative diagram of -modules   If the rows of the diagram are exact, then there exists an exact sequence Given , pick such that , and such that . Then The picture to keep in mind (and which explains the name of the lemma) is the following:     If , then by commutativity, so . Similarly, if then . So   We claim that the sequence obtained by restriction is exact. On the one hand, we already know that the original maps satisfy , so their restrictions must satisfy this as well, guaranteeing that On the other and, if is such that , then by exactness of the original sequence there exists such that ; we only need to check that we can choose such satisfying . An indeed, by commutativity, any with satisfies and since is injective, we must have . So we have shown that the following is an exact sequence:   Similarly, if , the commutativity of the diagram guarantees that , and if , then . So the maps restrict to maps which then induce maps To make the notation less heavy, we denote the induced maps on the quotients by and . Again, the fact that automatically gives us that the restrictions satisfy so we only need to check equality. Consider such that , meaning that , meaning that . Let be such that . Since is surjective, there exists such that , and by commutativity, Then . Let be such that . Now in coker we have This concludes the proof of exactness of and coker .  We still need to show the parts of the statement related to the connecting homomorphism . Our definition of can be visualized as follows:   Let's recap the process in words. First, we fix . Since is surjective, we can always pick such that . Since ker , by commutativity we have so . Therefore, there exists such that . In fact, since is injective, there exists a unique such that . Our definition of sets The fact that is a homomorphism of -modules follows from the fact that all the maps involved are homomorphisms of -modules: given , and such that we have So Therefore, . Similarly, given any , and , so . We now need to show the following:   Points 2) and 3) together say that the sequence is exact, and this will complete the proof.  First, let's show that is well-defined. Ultimately, our definition of only involves one choice, when we pick such that ; we need to show that does not depend on the choice of . Given such that , by exactness we have . Therefore, there exists such that . Notice that is such that Thus our definition says that . Since , we conclude that , so for any choice of . Now consider any . Again, to show is well-defined, we need only to show it does not depend on the choice of such that . Consider such that and such that Note that and since we must have Thus and this concludes our proof that is well-defined.  Now we show 2): that .  If , then the only such that is . Therefore, , so . On the other hand, let be such that . That means that for any such that we must have for some . Let be such that . Then     so . Since ,     We conclude that , and this shows 2 .  Now we show 3 ), that is, .  Let be such that . In , this says that , so we can choose such that . Using commutativity and the fact that , we have     This shows that , and thus . Finally, if and , then       Connecting Homomorphism   The map in the is the connecting homomorphism .    The proof of the is what we call a diagram chase, for reasons that may be obvious by now: we followed the diagram in the natural way, and everything worked out in the end. The is another classical example of a diagram chase.   The Long Exact Sequence in Homology         Now that we have the , we can construct the long exact sequence in homology:  Long Exact Sequence in Homology   Given a short exact sequence in  there are connecting homomorphisms such that is an exact sequence.    For each , we have short exact sequences   The condition that and are maps of complexes implies, by , that and take cycles to cycles, so we get exact sequences Again by , the condition that and are maps of complexes also implies that and both take boundaries to boundaries, so that we get exact sequences   Let be any complex. The boundary maps on induce maps that send to , so we get induced maps . Applying this general fact to , and , and putting all this together, we have a commutative diagram with exact rows   For any complex , and   The now gives us exact sequences   Finally, we glue all these together to obtain the long exact sequence in homology.     It's helpful to carefully consider how to compute the connecting homomorphisms in the long exact sequence in homology, which we can easily put together from the proof of the . Suppose that . When we view as an element in , we can find such that , since is surjective by assumption. Since is a map of complexes, we have so . In fact, note that , so   Thus there exists such that . Finally,   So in summary, the recipe goes as follows: given , we find such that and such that , and    We will soon see that long exact sequences appear everywhere, and that they are very helpful. Before we see more examples, we want to highlight a connection between long and short exact sequences.   Suppose that is a long exact sequence. This long exact sequence breaks into the short exact sequences   The first map is simply the inclusion of the submodule into , while the second map is the canonical projection onto the quotient. While it is clear that is injective and is surjective, exactness at the middle is less obvious. This follows from the exactness of the original complex, which gives .   The long exact sequence in homology is natural.  Naturality of the long exact sequence in homology   Any commutative diagram in    with exact rows induces a commutative diagram with exact rows     The rows of the resulting diagram are the long exact sequences in homology induced by each row of the original diagram, as in . So the content of the theorem is that the maps induced in homology by , and make the diagram commute. The commutativity of   follows from the fact that is a functor, so we only need to check commutativity of the square   that involves the connecting homomorphisms and . Consider the following commutative diagram:   Given , we need to check that in . To compute , we find a lift such that , and with , and set . So . On the other hand, to compute , we start by finding such that . By commutativity of the right back square   we can choose , since   Next we take such that , and set . By commutativity of the middle square   we have   By our choice of , we have and by commutativity of the front left square   we have   So we can take . Finally, this means , as we wanted to prove.     Let be a short exact sequence in . We can think of as saying that the induced maps on homology and and the connecting homomorphism are all natural transformations. More precisely, consider the category SES of short exact sequences of -modules, which is a full subcategory of . Homology gives us functors SES -Mod that given a short exact sequence return the -modules , or . A map between two short exact sequences then induces -module homomorphisms between the corresponding homologies. With this framework, says that , and and the connecting homomorphism are all natural transformations between the corresponding homology functors.            "
},
{
  "id": "sec-les-2",
  "level": "2",
  "url": "sec-les.html#sec-les-2",
  "type": "Reminders and Recollections",
  "number": "2.3",
  "title": "",
  "body": "     "
},
{
  "id": "thm-2.26",
  "level": "2",
  "url": "sec-les.html#thm-2.26",
  "type": "Theorem",
  "number": "2.40",
  "title": "Snake Lemma.",
  "body": "Snake Lemma   Consider the commutative diagram of -modules   If the rows of the diagram are exact, then there exists an exact sequence Given , pick such that , and such that . Then The picture to keep in mind (and which explains the name of the lemma) is the following:     If , then by commutativity, so . Similarly, if then . So   We claim that the sequence obtained by restriction is exact. On the one hand, we already know that the original maps satisfy , so their restrictions must satisfy this as well, guaranteeing that On the other and, if is such that , then by exactness of the original sequence there exists such that ; we only need to check that we can choose such satisfying . An indeed, by commutativity, any with satisfies and since is injective, we must have . So we have shown that the following is an exact sequence:   Similarly, if , the commutativity of the diagram guarantees that , and if , then . So the maps restrict to maps which then induce maps To make the notation less heavy, we denote the induced maps on the quotients by and . Again, the fact that automatically gives us that the restrictions satisfy so we only need to check equality. Consider such that , meaning that , meaning that . Let be such that . Since is surjective, there exists such that , and by commutativity, Then . Let be such that . Now in coker we have This concludes the proof of exactness of and coker .  We still need to show the parts of the statement related to the connecting homomorphism . Our definition of can be visualized as follows:   Let's recap the process in words. First, we fix . Since is surjective, we can always pick such that . Since ker , by commutativity we have so . Therefore, there exists such that . In fact, since is injective, there exists a unique such that . Our definition of sets The fact that is a homomorphism of -modules follows from the fact that all the maps involved are homomorphisms of -modules: given , and such that we have So Therefore, . Similarly, given any , and , so . We now need to show the following:   Points 2) and 3) together say that the sequence is exact, and this will complete the proof.  First, let's show that is well-defined. Ultimately, our definition of only involves one choice, when we pick such that ; we need to show that does not depend on the choice of . Given such that , by exactness we have . Therefore, there exists such that . Notice that is such that Thus our definition says that . Since , we conclude that , so for any choice of . Now consider any . Again, to show is well-defined, we need only to show it does not depend on the choice of such that . Consider such that and such that Note that and since we must have Thus and this concludes our proof that is well-defined.  Now we show 2): that .  If , then the only such that is . Therefore, , so . On the other hand, let be such that . That means that for any such that we must have for some . Let be such that . Then     so . Since ,     We conclude that , and this shows 2 .  Now we show 3 ), that is, .  Let be such that . In , this says that , so we can choose such that . Using commutativity and the fact that , we have     This shows that , and thus . Finally, if and , then      "
},
{
  "id": "def-2.27",
  "level": "2",
  "url": "sec-les.html#def-2.27",
  "type": "Definition",
  "number": "2.41",
  "title": "Connecting Homomorphism.",
  "body": "Connecting Homomorphism   The map in the is the connecting homomorphism .   "
},
{
  "id": "thm-2.28",
  "level": "2",
  "url": "sec-les.html#thm-2.28",
  "type": "Theorem",
  "number": "2.42",
  "title": "Long Exact Sequence in Homology.",
  "body": "Long Exact Sequence in Homology   Given a short exact sequence in  there are connecting homomorphisms such that is an exact sequence.    For each , we have short exact sequences   The condition that and are maps of complexes implies, by , that and take cycles to cycles, so we get exact sequences Again by , the condition that and are maps of complexes also implies that and both take boundaries to boundaries, so that we get exact sequences   Let be any complex. The boundary maps on induce maps that send to , so we get induced maps . Applying this general fact to , and , and putting all this together, we have a commutative diagram with exact rows   For any complex , and   The now gives us exact sequences   Finally, we glue all these together to obtain the long exact sequence in homology.   "
},
{
  "id": "rem-2.29",
  "level": "2",
  "url": "sec-les.html#rem-2.29",
  "type": "Remark",
  "number": "2.43",
  "title": "",
  "body": " It's helpful to carefully consider how to compute the connecting homomorphisms in the long exact sequence in homology, which we can easily put together from the proof of the . Suppose that . When we view as an element in , we can find such that , since is surjective by assumption. Since is a map of complexes, we have so . In fact, note that , so   Thus there exists such that . Finally,   So in summary, the recipe goes as follows: given , we find such that and such that , and   "
},
{
  "id": "rem-2.30",
  "level": "2",
  "url": "sec-les.html#rem-2.30",
  "type": "Remark",
  "number": "2.44",
  "title": "",
  "body": " Suppose that is a long exact sequence. This long exact sequence breaks into the short exact sequences   The first map is simply the inclusion of the submodule into , while the second map is the canonical projection onto the quotient. While it is clear that is injective and is surjective, exactness at the middle is less obvious. This follows from the exactness of the original complex, which gives .  "
},
{
  "id": "thm-2.31",
  "level": "2",
  "url": "sec-les.html#thm-2.31",
  "type": "Theorem",
  "number": "2.45",
  "title": "Naturality of the long exact sequence in homology.",
  "body": "Naturality of the long exact sequence in homology   Any commutative diagram in    with exact rows induces a commutative diagram with exact rows     The rows of the resulting diagram are the long exact sequences in homology induced by each row of the original diagram, as in . So the content of the theorem is that the maps induced in homology by , and make the diagram commute. The commutativity of   follows from the fact that is a functor, so we only need to check commutativity of the square   that involves the connecting homomorphisms and . Consider the following commutative diagram:   Given , we need to check that in . To compute , we find a lift such that , and with , and set . So . On the other hand, to compute , we start by finding such that . By commutativity of the right back square   we can choose , since   Next we take such that , and set . By commutativity of the middle square   we have   By our choice of , we have and by commutativity of the front left square   we have   So we can take . Finally, this means , as we wanted to prove.   "
},
{
  "id": "rem-2.32",
  "level": "2",
  "url": "sec-les.html#rem-2.32",
  "type": "Remark",
  "number": "2.46",
  "title": "",
  "body": " Let be a short exact sequence in . We can think of as saying that the induced maps on homology and and the connecting homomorphism are all natural transformations. More precisely, consider the category SES of short exact sequences of -modules, which is a full subcategory of . Homology gives us functors SES -Mod that given a short exact sequence return the -modules , or . A map between two short exact sequences then induces -module homomorphisms between the corresponding homologies. With this framework, says that , and and the connecting homomorphism are all natural transformations between the corresponding homology functors.  "
},
{
  "id": "sec-les-5",
  "level": "2",
  "url": "sec-les.html#sec-les-5",
  "type": "Summary",
  "number": "2.3",
  "title": "",
  "body": "       "
},
{
  "id": "sec-hom",
  "level": "1",
  "url": "sec-hom.html",
  "type": "Section",
  "number": "3.1",
  "title": "<span class=\"process-math\">\\(\\Hom\\)<\/span>",
  "body": "       There's No Place Like    We shape our s and then our s shape us.   Winston Churchill   From now on, let's fix a ring . Recall that whenever we say an -module , we mean a left -module; any general facts about left modules can be naturally converted into statements about right -modules, under small appropriate corrections. When is commutative, left and right module structures agree, so the distinction is not relevant.  Our goal is to get to know the category -Mod, which as we are about to discover is a very nice category. One of the many nice things about -Mod is that the Hom-sets have an extra structure. (Roughly speaking, a locally small category where the Hom-sets are objects in some other category is called an enriched category).  To make the notation less heavy, we write instead of for the Hom-set between and in -Mod. The arrows in are all the -module homomorphisms from to . This is a locally small category, meaning that the Hom-sets are actual sets, but more even is true: the Hom-sets are actually abelian groups, and when is commutative, they are even -modules.  Given is the -module homomorphism defined by When is a commutative ring, given and is the -module homomorphism defined by     Let and be -modules. Then is an abelian group under the sum defined above.  Let and be -modules over a commutative . Then is an -module.   The main reason we need commutativity for to be a module is that given any and , we need to be an -module homomorphism, so in particular for any and any we need So This holds whenever , but not in general.   Some Hom-sets can easily be identified with other well-understood modules.  Let be a commutative ring. Let be an -module, and an ideal in . Then we have the following isomorphisms of -modules:    .     for any .     .      Additive Functors    To split yourself in two is just about the most radical thing you can do.   Ani DiFranco   Since -Mod is a locally small category, we saw in Definition 1.34 that there are two Hom-functors from -Mod to , the covariant functor -Mod Set and the contravariant functor -Mod Set. In light of , we can upgrade these functors to land in , or in -Mod when is commutative, not just in . Note that while there are two Hom-functors, we will sometimes refer to the Hom functor when talking about properties that are common to both of them.  A functor that lands in , or in particular, can have some additional good properties.  Additive Functor   Let and be rings. A functor -Mod -Mod is an additive functor if for all .    Note that to say that is a covariant additive functor is to say that for all and , the map induced by is a homomorphism of abelian groups. Similarly, a contravariant additive functor is one such that is a homomorphism of abelian groups. Notice moreover that this definition makes sense more generally in any category whose objects have an abelian group structure.  is Additive Show that and are both additive functors.  Note that in we were purposely vague about where and land: these are additive functors whether we consider them as functors with target or target -Mod, when appropriate.  Additive functors have many nice properties.  Properties of Additive Functors   Let Mod -Mod be an additive functor.   Let denote the -map between any two -modules and . Then is the .    Let denote the zero -module. Then is the zero -module.          As a function defined on each fixed is a group homomorphism, so it must send to .    An -module is the zero module if and only if the zero and identity maps on coincide. Let be the image of the zero -module via . On the one hand, any functor must send identity maps to identity maps, so the identity map on the zero module must be sent to the identity on . On the other hand, we have shown that the zero map must be sent to the zero map on , so the zero and identity maps on must coincide, so .        Note that the category of chain complexes also has a similar structure to -Mod: given two maps of complexes , we define a map of complexes : given by It is routine to check that this again gives a map of complexes, and that this operation gives the -sets in the structure of an abelian group. In fact, this abelian group structure can be upgraded to an -module structure when is commutative, by setting for all . This allows us to talk about additive functors to and from the category , and there is a version of in .   Homology is Additive Show that homology is an additive functor.  Most functors between categories or modules or chain complexes are additive. In fact, we will spend the rest of this chapter studying three very important additive functors: the two functors, and a third functor we have yet to define.  Additive Functors Preserve Direct Sums Let and be rings and let -Mod -Mod be an additive functor. Show that for all -modules and ,    satisfies a stronger version of this property.    For all -modules , there are isomorphisms of abelian groups Moreover, when is commutative, these are in fact isomorphisms of -modules.  In particular, and     For each , let be the canonical projection map. Consider the map We claim this map is the desired isomorphism. We leave it as an exercise to show that is a homomorphism of abelian groups, and a homomorphism of -modules when is commutative; we focus on proving that is a bijection. First, take . Define a map This makes the diagram   commute, so that . This shows that us surjective. Now let us show that is injective. Suppose is such that . For each , let , so . By assumption, , which means that for all , and thus for all . So . We conclude that is an isomorphism.  Now consider the map where is the inclusion of the th factor. We leave it as an exercise to prove that is a homomorphism of abelian groups, and that whenever is commutative, is in fact a homomorphism of -modules.  Given , let   Then , so for each and each , and . This shows that is surjective.  Now assume , which implies that is the zero map for each . Consider any . For each . On the other hand, , so . We conclude that , and is injective.    These two properties, however, are consequences of and : is additive, and additive functors preserve finite direct sums.  Show that the isomorphisms in are natural on both components. More precisely, given any other family of -modules such that for each there exists , a map there exist -module maps making the following diagrams commute: In fact, one can show that more generally, behaves well with limits and colimits.  Let be any ring and consider -modules and .   For any inverse system , there is a natural isomorphism     For any direct system or -modules, there is a natural isomorphism    Moreover, when is commutative, these are isomorphisms of modules.   Exact Functors    My biggest problem is retaining the exact information.   David Cross   Another important property of is how it interacts with exact sequences. First, an important note about general additive functors:   Let -Mod -Mod be an additive functor. Thanks to , if , then Thus must send complexes to complexes, and in fact, induces a functor , which we also call . Now if is a homotopy between two maps of complexes, must preserve the identities for all , so is a homotopy between and .   While additive functors send complexes to complexes, they don't have to preserve exactness. Functors that do preserve exactness are very special.  Exact Functors   An additive functor -Mod -Mod is an exact functor if it preserves short exact sequences. When is covariant, this means that every short exact sequence is taken to the short exact sequence   When is contravariant, this means that any short exact sequence is taken to the short exact sequence     Functors are Exact iff They Commute with Homology Show that an additive functor is exact if it commutes with homology, that is, for all complexes and all ,   As we will soon see, most functors are not exact. However, many functors of interest preserve some exactness.  Left and Right Exact Functors   A covariant additive functor -Mod -Mod is left exact if it takes every exact sequence of -modules to the exact sequence of -modules, and right exact if it takes every exact sequence of -modules to the exact sequence of -modules     Left and Right Exact Functors   A contravariant additive functor -Mod -Mod is left exact if it takes every exact sequence of -modules to the exact sequence of -modules, and right exact if it takes every exact sequence of -modules to the exact sequence of -modules     Exactness and SESs The definitions above all stay unchanged if for each condition we start with a short exact sequence. For example, a covariant additive functor is left exact if and only if for every short exact sequence of -modules, is exact.   Left exact covariant functors take kernels to kernels, while right exact covariant functors take cokernels to cokernels: the kernel of fits in an exact sequence and applying a left exact functor gives us an exact sequence Exactness tells us that is the kernel of .  Similarly, the cokernel of fits into an exact sequence which any right exact functor will take to an exact sequence Exactness says that is the cokernel of .  Similarly, left exact contravariant functors take cokernels to kernels, and right exact contravariant functors take kernels to cokernels. A left exact contravariant functor will take the exact sequence to an exact sequence and exactness tells us that is the kernel of .  A right exact contravariant functor will take the exact sequence to the exact sequence and exactness says that is the cokernel of .   Exactness is preserved by natural isomorphisms.   Suppose that -Mod -Mod are naturally isomorphic additive functors. We claim that is exact if and only if is exact. Let's prove it in the case when and are covariant. Given any short exact sequence applying each of our functors yields complexes of -modules which may or may not be exact. Our natural isomorphism gives us an isomorphism of complexes   Isomorphisms of complexes induce isomorphisms in homology, so the top sequence is exact if and only if the bottom sequence is exact. Thus preserves the short exact sequence if and only if does.  A similar argument shows that is left (respectively, right) exact if and only if is left (respectively, right) exact; we leave the details as an exercise.   However, an additive functor does not have to be left exact nor right exact. There are even some functors that preserve exactness in the middle.  Homology is Exact in the Middle  The homology functor is exact in the middle: given a short exact sequence the exactness of the long exact sequence in homology says in particular that is exact for all . On the other hand, we claim that the homology functor is neither left exact nor right exact. More precisely, might fail to be injective and might fail to be surjective. Finding a counterexample amounts to finding a short exact sequence of complexes such that the connecting homomorphism in the long exact sequence in homology is not the zero map.  For example, consider the following complexes and maps of complexes:   Applying gives us which is not injective, so is not exact. Similarly, applying gives which is not surjective, so is not exact. Thus homology is neither left exact nor right exact, though it is exact in the middle.   But in general, an additive functor might fail to preserve exactness even in the middle.   Fix a prime and consider the functor which on objects is defined by given a homomorphism of abelian groups , we get an induced homomorphism of abelian groups and is postcomposition with . Consider the short exact sequence where is the multiplication by map, which sends , and is the canonical quotient map by the subgroup generated by .  Note that is the submodule of of elements killed by , which is generated by the class of , so . Moreover, so is the the submodule of of elements killed by , which is generated by and isomorphic to , so . Now is the map induced by multiplication by , so it is the zero map. The map is the canonical quotient by the subgroup generated by ; any element in corresponds to choosing an element of order , and thus in the subgroup generated by , so applying always results in . We conclude that . Finally, this shows that applying to the original short exact sequence gives us the complex which is not exact anywhere.   One amazing fact, however, is that even if a functor is not exact, it must always preserve split short exact sequences.  Additive Functors Preserve Split Exact Sequences Show that additive functors preserve split short exact sequences.   is Left Exact    One should always aim at being interesting, rather than exact.   Voltaire   We are now ready for our first important example of a left exact functor: is left exact.  is Left Exact   Let be an R-module.   The covariant functor is left exact: for every exact sequence of -modules, the sequence is exact.    The contravariant functor is left exact: for every exact sequence of -modules, the sequence is exact.       To make the notation less heavy, we will write and similarly   Since additive functors send complexes to complexes, as outlined in , we at least know that and are functors, so in particular and      We have two things to show:   Suppose that is such that . By definition, this means that . But is injective, so for any  We conclude that , and is injective.    Let be in the kernel of . Then , so for each , . Then , so there exists such that . Since is injective, this element is unique for each . So setting gives us a well-defined function .  We claim that is in fact an -module homomorphism. To see that, notice that if and , then so that .  Similarly, given any , so . Finally, this element satisfies for all , so and .       Again, we have two things to show:  is injective:  If for some , then . Consider any . Since is surjective, there exists such that . Then , so .    Let be in , so that . Given any , there exists such that , since is surjective. Let be the function defined by for some with . This function is well-defined, since whenever , say , and thus . Moreover, we claim that is indeed a homomorphism of -modules. If , and , then , so   Finally, this element is such that satisfies for all , so , and .        So preserves kernels, and sends cokernels to kernels.    However, is not right exact in general.   Consider the short exact sequence of abelian groups where the first map is the inclusion of into , and the second map is the canonical projection. The elements in the abelian group are cosets of the form , where , and whenever . While says that is exact, we claim that this cannot be extended to a short exact sequence, since the map is not surjective. On the one hand, there are no nontrivial homomorphisms from to either nor , since there are no elements in nor of order . This shows that   On the other hand, is nonzero: to give a homomorphism of abelian groups is to choose an element in of order . Since is an element of order 2 in , the map sending in to in is nonzero. So after applying , we get the exact sequence So this shows that is not an exact functor, only left exact.   Similarly, we can show that is not exact:   Let's apply to the short exact sequence This time, says that is exact. We claim that the last map is not surjective. First, we claim that . Indeed, if is a homomorphism of abelian groups, then for all we have So is an integer that is divisible by every integer, which is impossible unless . We conclude that , and thus . So our exact sequence above is actually By , , so the last map in our sequence can't possibly be surjective, so our sequence is not a short exact sequence.  The other fun consequence is that and we have an exact sequence we can now conclude that    The last observation is a common trick: once we know we have an exact sequence involving certain modules we do not know, we can sometimes calculate them exactly by studying the other modules and maps in the exact sequence.  We can use the left exactness of Hom to compute some modules of interest:   Let be a commutative ring and be a finitely presented -module. This means that has a presentation with finitely many generators and relations, which translates into an exact sequence of the form   Since and are free modules, we can think of the map as multiplication by a matrix with rows and columns, after we fix a basis for and . Applying to the exact sequence above, we get an exact sequence By , and . Moreover, we claim that is multiplication by the transpose of .  First, note that given a basis for , we get a dual basis for , where   Similarly, we have a dual basis for ; we might as well assume that we picked the canonical basis in both cases, so that we can use similar notation on both.  Now the map is also given by multiplication by a matrix, now having rows and columns. To calculate its column, we need to calculate , which is given by precomposition with , so ; this reads off the th row of . Thus is indeed multiplication by , and we have an exact sequence   In particular, we have shown that is the kernel of multiplication by .            "
},
{
  "id": "sec-hom-2",
  "level": "2",
  "url": "sec-hom.html#sec-hom-2",
  "type": "Reminders and Recollections",
  "number": "3.1",
  "title": "",
  "body": "     "
},
{
  "id": "exe-36",
  "level": "2",
  "url": "sec-hom.html#exe-36",
  "type": "Exercise",
  "number": "3.1",
  "title": "",
  "body": "Let and be -modules. Then is an abelian group under the sum defined above. "
},
{
  "id": "exe-37",
  "level": "2",
  "url": "sec-hom.html#exe-37",
  "type": "Exercise",
  "number": "3.2",
  "title": "",
  "body": "Let and be -modules over a commutative . Then is an -module. "
},
{
  "id": "rem-3.1",
  "level": "2",
  "url": "sec-hom.html#rem-3.1",
  "type": "Remark",
  "number": "3.3",
  "title": "",
  "body": " The main reason we need commutativity for to be a module is that given any and , we need to be an -module homomorphism, so in particular for any and any we need So This holds whenever , but not in general.  "
},
{
  "id": "exe-38",
  "level": "2",
  "url": "sec-hom.html#exe-38",
  "type": "Exercise",
  "number": "3.4",
  "title": "",
  "body": "Let be a commutative ring. Let be an -module, and an ideal in . Then we have the following isomorphisms of -modules:    .     for any .     .    "
},
{
  "id": "def-3.2",
  "level": "2",
  "url": "sec-hom.html#def-3.2",
  "type": "Definition",
  "number": "3.5",
  "title": "Additive Functor.",
  "body": "Additive Functor   Let and be rings. A functor -Mod -Mod is an additive functor if for all .   "
},
{
  "id": "exe-39",
  "level": "2",
  "url": "sec-hom.html#exe-39",
  "type": "Exercise",
  "number": "3.6",
  "title": "<span class=\"process-math\">\\(\\Hom\\)<\/span> is Additive.",
  "body": "is Additive Show that and are both additive functors. "
},
{
  "id": "lem-3.3",
  "level": "2",
  "url": "sec-hom.html#lem-3.3",
  "type": "Lemma",
  "number": "3.7",
  "title": "Properties of Additive Functors.",
  "body": "Properties of Additive Functors   Let Mod -Mod be an additive functor.   Let denote the -map between any two -modules and . Then is the .    Let denote the zero -module. Then is the zero -module.          As a function defined on each fixed is a group homomorphism, so it must send to .    An -module is the zero module if and only if the zero and identity maps on coincide. Let be the image of the zero -module via . On the one hand, any functor must send identity maps to identity maps, so the identity map on the zero module must be sent to the identity on . On the other hand, we have shown that the zero map must be sent to the zero map on , so the zero and identity maps on must coincide, so .      "
},
{
  "id": "rem-3.4",
  "level": "2",
  "url": "sec-hom.html#rem-3.4",
  "type": "Remark",
  "number": "3.8",
  "title": "",
  "body": " Note that the category of chain complexes also has a similar structure to -Mod: given two maps of complexes , we define a map of complexes : given by It is routine to check that this again gives a map of complexes, and that this operation gives the -sets in the structure of an abelian group. In fact, this abelian group structure can be upgraded to an -module structure when is commutative, by setting for all . This allows us to talk about additive functors to and from the category , and there is a version of in .  "
},
{
  "id": "exe-40",
  "level": "2",
  "url": "sec-hom.html#exe-40",
  "type": "Exercise",
  "number": "3.9",
  "title": "Homology is Additive.",
  "body": "Homology is Additive Show that homology is an additive functor. "
},
{
  "id": "exe-41",
  "level": "2",
  "url": "sec-hom.html#exe-41",
  "type": "Exercise",
  "number": "3.10",
  "title": "Additive Functors Preserve Direct Sums.",
  "body": "Additive Functors Preserve Direct Sums Let and be rings and let -Mod -Mod be an additive functor. Show that for all -modules and ,  "
},
{
  "id": "thm-3.5",
  "level": "2",
  "url": "sec-hom.html#thm-3.5",
  "type": "Theorem",
  "number": "3.11",
  "title": "",
  "body": "  For all -modules , there are isomorphisms of abelian groups Moreover, when is commutative, these are in fact isomorphisms of -modules.  In particular, and     For each , let be the canonical projection map. Consider the map We claim this map is the desired isomorphism. We leave it as an exercise to show that is a homomorphism of abelian groups, and a homomorphism of -modules when is commutative; we focus on proving that is a bijection. First, take . Define a map This makes the diagram   commute, so that . This shows that us surjective. Now let us show that is injective. Suppose is such that . For each , let , so . By assumption, , which means that for all , and thus for all . So . We conclude that is an isomorphism.  Now consider the map where is the inclusion of the th factor. We leave it as an exercise to prove that is a homomorphism of abelian groups, and that whenever is commutative, is in fact a homomorphism of -modules.  Given , let   Then , so for each and each , and . This shows that is surjective.  Now assume , which implies that is the zero map for each . Consider any . For each . On the other hand, , so . We conclude that , and is injective.   "
},
{
  "id": "exe-42",
  "level": "2",
  "url": "sec-hom.html#exe-42",
  "type": "Exercise",
  "number": "3.12",
  "title": "",
  "body": "Show that the isomorphisms in are natural on both components. More precisely, given any other family of -modules such that for each there exists , a map there exist -module maps making the following diagrams commute: In fact, one can show that more generally, behaves well with limits and colimits. "
},
{
  "id": "exe-43",
  "level": "2",
  "url": "sec-hom.html#exe-43",
  "type": "Exercise",
  "number": "3.13",
  "title": "",
  "body": "Let be any ring and consider -modules and .   For any inverse system , there is a natural isomorphism     For any direct system or -modules, there is a natural isomorphism    Moreover, when is commutative, these are isomorphisms of modules. "
},
{
  "id": "rem-3.6",
  "level": "2",
  "url": "sec-hom.html#rem-3.6",
  "type": "Remark",
  "number": "3.14",
  "title": "",
  "body": " Let -Mod -Mod be an additive functor. Thanks to , if , then Thus must send complexes to complexes, and in fact, induces a functor , which we also call . Now if is a homotopy between two maps of complexes, must preserve the identities for all , so is a homotopy between and .  "
},
{
  "id": "def-3.7",
  "level": "2",
  "url": "sec-hom.html#def-3.7",
  "type": "Definition",
  "number": "3.15",
  "title": "Exact Functors.",
  "body": "Exact Functors   An additive functor -Mod -Mod is an exact functor if it preserves short exact sequences. When is covariant, this means that every short exact sequence is taken to the short exact sequence   When is contravariant, this means that any short exact sequence is taken to the short exact sequence    "
},
{
  "id": "exe-44",
  "level": "2",
  "url": "sec-hom.html#exe-44",
  "type": "Exercise",
  "number": "3.16",
  "title": "Functors are Exact iff They Commute with Homology.",
  "body": "Functors are Exact iff They Commute with Homology Show that an additive functor is exact if it commutes with homology, that is, for all complexes and all ,  "
},
{
  "id": "def-3.8",
  "level": "2",
  "url": "sec-hom.html#def-3.8",
  "type": "Definition",
  "number": "3.17",
  "title": "Left and Right Exact Functors.",
  "body": "Left and Right Exact Functors   A covariant additive functor -Mod -Mod is left exact if it takes every exact sequence of -modules to the exact sequence of -modules, and right exact if it takes every exact sequence of -modules to the exact sequence of -modules    "
},
{
  "id": "def-3.9",
  "level": "2",
  "url": "sec-hom.html#def-3.9",
  "type": "Definition",
  "number": "3.18",
  "title": "Left and Right Exact Functors.",
  "body": "Left and Right Exact Functors   A contravariant additive functor -Mod -Mod is left exact if it takes every exact sequence of -modules to the exact sequence of -modules, and right exact if it takes every exact sequence of -modules to the exact sequence of -modules    "
},
{
  "id": "exe-45",
  "level": "2",
  "url": "sec-hom.html#exe-45",
  "type": "Exercise",
  "number": "3.19",
  "title": "Exactness and SESs.",
  "body": "Exactness and SESs The definitions above all stay unchanged if for each condition we start with a short exact sequence. For example, a covariant additive functor is left exact if and only if for every short exact sequence of -modules, is exact. "
},
{
  "id": "rem-3.10",
  "level": "2",
  "url": "sec-hom.html#rem-3.10",
  "type": "Remark",
  "number": "3.20",
  "title": "",
  "body": " Left exact covariant functors take kernels to kernels, while right exact covariant functors take cokernels to cokernels: the kernel of fits in an exact sequence and applying a left exact functor gives us an exact sequence Exactness tells us that is the kernel of .  Similarly, the cokernel of fits into an exact sequence which any right exact functor will take to an exact sequence Exactness says that is the cokernel of .  Similarly, left exact contravariant functors take cokernels to kernels, and right exact contravariant functors take kernels to cokernels. A left exact contravariant functor will take the exact sequence to an exact sequence and exactness tells us that is the kernel of .  A right exact contravariant functor will take the exact sequence to the exact sequence and exactness says that is the cokernel of .  "
},
{
  "id": "rem-3.11",
  "level": "2",
  "url": "sec-hom.html#rem-3.11",
  "type": "Remark",
  "number": "3.21",
  "title": "",
  "body": " Suppose that -Mod -Mod are naturally isomorphic additive functors. We claim that is exact if and only if is exact. Let's prove it in the case when and are covariant. Given any short exact sequence applying each of our functors yields complexes of -modules which may or may not be exact. Our natural isomorphism gives us an isomorphism of complexes   Isomorphisms of complexes induce isomorphisms in homology, so the top sequence is exact if and only if the bottom sequence is exact. Thus preserves the short exact sequence if and only if does.  A similar argument shows that is left (respectively, right) exact if and only if is left (respectively, right) exact; we leave the details as an exercise.  "
},
{
  "id": "ex-3.12",
  "level": "2",
  "url": "sec-hom.html#ex-3.12",
  "type": "Example",
  "number": "3.22",
  "title": "Homology is Exact in the Middle.",
  "body": "Homology is Exact in the Middle  The homology functor is exact in the middle: given a short exact sequence the exactness of the long exact sequence in homology says in particular that is exact for all . On the other hand, we claim that the homology functor is neither left exact nor right exact. More precisely, might fail to be injective and might fail to be surjective. Finding a counterexample amounts to finding a short exact sequence of complexes such that the connecting homomorphism in the long exact sequence in homology is not the zero map.  For example, consider the following complexes and maps of complexes:   Applying gives us which is not injective, so is not exact. Similarly, applying gives which is not surjective, so is not exact. Thus homology is neither left exact nor right exact, though it is exact in the middle.  "
},
{
  "id": "ex-3.13",
  "level": "2",
  "url": "sec-hom.html#ex-3.13",
  "type": "Example",
  "number": "3.23",
  "title": "",
  "body": " Fix a prime and consider the functor which on objects is defined by given a homomorphism of abelian groups , we get an induced homomorphism of abelian groups and is postcomposition with . Consider the short exact sequence where is the multiplication by map, which sends , and is the canonical quotient map by the subgroup generated by .  Note that is the submodule of of elements killed by , which is generated by the class of , so . Moreover, so is the the submodule of of elements killed by , which is generated by and isomorphic to , so . Now is the map induced by multiplication by , so it is the zero map. The map is the canonical quotient by the subgroup generated by ; any element in corresponds to choosing an element of order , and thus in the subgroup generated by , so applying always results in . We conclude that . Finally, this shows that applying to the original short exact sequence gives us the complex which is not exact anywhere.  "
},
{
  "id": "exe-46",
  "level": "2",
  "url": "sec-hom.html#exe-46",
  "type": "Exercise",
  "number": "3.24",
  "title": "Additive Functors Preserve Split Exact Sequences.",
  "body": "Additive Functors Preserve Split Exact Sequences Show that additive functors preserve split short exact sequences. "
},
{
  "id": "thm-3.14",
  "level": "2",
  "url": "sec-hom.html#thm-3.14",
  "type": "Theorem",
  "number": "3.25",
  "title": "<span class=\"process-math\">\\(\\Hom\\)<\/span> is Left Exact.",
  "body": "is Left Exact   Let be an R-module.   The covariant functor is left exact: for every exact sequence of -modules, the sequence is exact.    The contravariant functor is left exact: for every exact sequence of -modules, the sequence is exact.       To make the notation less heavy, we will write and similarly   Since additive functors send complexes to complexes, as outlined in , we at least know that and are functors, so in particular and      We have two things to show:   Suppose that is such that . By definition, this means that . But is injective, so for any  We conclude that , and is injective.    Let be in the kernel of . Then , so for each , . Then , so there exists such that . Since is injective, this element is unique for each . So setting gives us a well-defined function .  We claim that is in fact an -module homomorphism. To see that, notice that if and , then so that .  Similarly, given any , so . Finally, this element satisfies for all , so and .       Again, we have two things to show:  is injective:  If for some , then . Consider any . Since is surjective, there exists such that . Then , so .    Let be in , so that . Given any , there exists such that , since is surjective. Let be the function defined by for some with . This function is well-defined, since whenever , say , and thus . Moreover, we claim that is indeed a homomorphism of -modules. If , and , then , so   Finally, this element is such that satisfies for all , so , and .        So preserves kernels, and sends cokernels to kernels.   "
},
{
  "id": "ex-3.15",
  "level": "2",
  "url": "sec-hom.html#ex-3.15",
  "type": "Example",
  "number": "3.26",
  "title": "",
  "body": " Consider the short exact sequence of abelian groups where the first map is the inclusion of into , and the second map is the canonical projection. The elements in the abelian group are cosets of the form , where , and whenever . While says that is exact, we claim that this cannot be extended to a short exact sequence, since the map is not surjective. On the one hand, there are no nontrivial homomorphisms from to either nor , since there are no elements in nor of order . This shows that   On the other hand, is nonzero: to give a homomorphism of abelian groups is to choose an element in of order . Since is an element of order 2 in , the map sending in to in is nonzero. So after applying , we get the exact sequence So this shows that is not an exact functor, only left exact.  "
},
{
  "id": "ex-3.16",
  "level": "2",
  "url": "sec-hom.html#ex-3.16",
  "type": "Example",
  "number": "3.27",
  "title": "",
  "body": " Let's apply to the short exact sequence This time, says that is exact. We claim that the last map is not surjective. First, we claim that . Indeed, if is a homomorphism of abelian groups, then for all we have So is an integer that is divisible by every integer, which is impossible unless . We conclude that , and thus . So our exact sequence above is actually By , , so the last map in our sequence can't possibly be surjective, so our sequence is not a short exact sequence.  The other fun consequence is that and we have an exact sequence we can now conclude that   "
},
{
  "id": "exe-3.17",
  "level": "2",
  "url": "sec-hom.html#exe-3.17",
  "type": "Example",
  "number": "3.28",
  "title": "",
  "body": " Let be a commutative ring and be a finitely presented -module. This means that has a presentation with finitely many generators and relations, which translates into an exact sequence of the form   Since and are free modules, we can think of the map as multiplication by a matrix with rows and columns, after we fix a basis for and . Applying to the exact sequence above, we get an exact sequence By , and . Moreover, we claim that is multiplication by the transpose of .  First, note that given a basis for , we get a dual basis for , where   Similarly, we have a dual basis for ; we might as well assume that we picked the canonical basis in both cases, so that we can use similar notation on both.  Now the map is also given by multiplication by a matrix, now having rows and columns. To calculate its column, we need to calculate , which is given by precomposition with , so ; this reads off the th row of . Thus is indeed multiplication by , and we have an exact sequence   In particular, we have shown that is the kernel of multiplication by .  "
},
{
  "id": "sec-hom-7",
  "level": "2",
  "url": "sec-hom.html#sec-hom-7",
  "type": "Summary",
  "number": "3.1",
  "title": "",
  "body": "       "
},
{
  "id": "sec-tensor",
  "level": "1",
  "url": "sec-tensor.html",
  "type": "Section",
  "number": "3.2",
  "title": "Tensor Products",
  "body": "Tensor Products        Biadditive Maps and First Properties    Tenser, said the Tensor. Tension, apprehension, and dissension have begun.   Alfred Bester     Definition 3.18. Fix a ring , and consider:    a right -module ,    a left -module ,    an abelian group .    A function is -biadditive if for all , all , and all we have               .    When is a commutative ring, suppose that is also an -module. We say that a function is -bilinear if for all , all , and all we have               .      Note that an -bilinear function is an -biadditive function that satisfies      Example 3.19. The product on is an -biadditive function . The first two rules follow from distributivity of multiplication over the sum; the final rule is a consequence of the associativity of multiplication.  When is commutative, this is an -bilinear function.     Definition 3.20. Let be a right -module and let be a left -module. The tensor product of and is an abelian group together with an -biadditive function with the following universal property: for every abelian group and every -biadditive map , there exists a unique group homomorphism such that the following diagram commutes:     We will now show that tensor products exist and are unique up to isomorphism; in particular, we can talk about the tensor product of and .    Lemma 3.21. Let be any ring, be a right -module, and a left -module. The tensor product of and is unique up to unique isomorphism. More precisely, if and are two tensor products, then there exists a unique isomorphism such that     Proof. First, note that the universal property of the tensor product implies that there exists a unique such that   commutes. Since the identity map is such a map, it must be the only such map.  Similarly, there are unique maps and such that   both commute. Stacking these up, we get commutative diagrams   Note that the identity maps on and are homomorphisms and that would make each of these triangles commute:   By uniqueness, must be the identity on and must be the identity on . In particular, and are isomorphic, and the isomorphisms and are unique.      Theorem 3.22. Given any right -modules and any left -module , their tensor product exists, and it is given by the abelian group defined as follows:    Generators: For each pair of elements and , we have a generator .    Relations: the generators of satisfy the following relations, where , , and :         Proof. Let be the free abelian group on the set . In what follows, we identify a pair with the corresponding basis element for . Let be the subgroup of generated by     Let , and let denote the class of in the quotient. We claim that this abelian group is a tensor product for and , together with the map     Notice is the restriction of the quotient map to the basis elements of . Moreover, by construction of , the following identities hold:     Together, these make an -biadditive map. The map that sends each pair to the corresponding basis element is -bilinear by construction. Moreover, there is a natural quotient map , and these maps make the diagram   commute.  Now suppose that is any other abelian group, and let by any -biadditive map. Since is the free -module on induces a homomorphism of abelian groups such that , meaning for all and all .  Finally, the fact that is bilinear implies that . Therefore, induces a group homomorphism on . All this fits in the following commutative diagram:   Finally, this map we constructed satisfies , and since is generated by such elements, is completely determined by the images of , and thus unique.    The construction in Theorem 3.22 gives us generators for . These are usually called simple tensors. So any element in is of the form     Such expressions are not unique. For a cheap example, consider the relations we used to construct from the abelian group on , which gives us nontrivial ways to write the 0 element in :     This makes things unexpectedly tricky. For starters, the tensor product of two nonzero modules might be zero nevertheless. Also, whenever we try to define some -module homomorphism from into some other -module, we must carefully check that our map is well-defined, which is in principle not an easy task. Therefore, the easiest way to define some -module homomorphism from is to give some -bilinear map from into our desired -module.  In summary: the tensor product of and is generated by the simple tensors , but it's important to remember (though we're all bound to forget once or twice) that not all elements in are simple tensors. Moreover, even if and are nonzero, could very well be zero.   Remark 3.23. Two group homomorphisms coincide if and only if they agree on simple tensors, since these are generators for .    Remark 3.24. In any tensor product , the simple tensor is the zero element, and     for all and .    Elements in Tensor Products    In the beginning God said, the four-dimensional divergence of an antisymmetric, second rank tensor equals zero, and there was light, and it was good. And on the seventh day he rested.   Michio Kaku   Let's see some examples of how tensor products can be zero.   Example 3.25. We claim that , despite the fact that both of these -modules are nonzero. To see that, simply note that given any and any ,     Since is generated by simple tensors, which are all 0 , we conclude that .    Example 3.26. Consider the abelian group . Again, this is very much nonzero, and yet we claim that . For any simple tensor,       Example 3.27. Let and be distinct prime integers. Then has inverse modulo , say , and has an inverse modulo , say . Given any simple tensor in      Since all simple tensors are 0 and is generated by simple tensors, we conclude that .   More generally, the following holds:  Exercise 47. Show that if , then .  Of course not all tensor products are zero. A good method for showing that a particular element in a module is nonzero is to give a homomorphism from sending to some nonzero element. We apply this technique to tensor products: to show that a particular element in is nonzero, we construct a homomorphism from that takes no some nonzero element. This is typically easier for simple tensors: we need an -biadditive map out of that sends the corresponding pair to a nonzero element.   Example 3.28. Consider the abelian group . The map     is -bilinear, and thus it induces a homomorphism . Via this map, , so is nonzero in , and .   Moreover, not all elements in a tensor product are simple tensors.  Exercise 48. Let and consider the ideal . Show that in , the element is not a simple tensor.   Bimodules and When Tensor Products are Modules    Envy, like a false mirror, distorts the symmetry of the sweetest form.   Norm Macdonald   We can sometimes give the structure of an -module.   Remark 3.29. Let be a commutative ring, and let and be -modules. We can give the structure of an -module, as follows: given and a simple tensor ,     We can then extend this linearly to all other elements of . We leave it as an exercise to check that this does indeed make the abelian group into an -module.   Alternatively, over a commutative ring we can define the tensor product as follows:    Definition 3.30. Let be a commutative ring and and be -modules. The tensor product of and is an -module together with an -bilinear map  with the following universal property: for every -module and every -bilinear map there exists a unique -module homomorphism such that the following diagram commutes:     One can now check that if we take the abelian group , which is the unique abelian group which satisfies the universal property of the tensor product (as defined for a general ring ), and endow it with the -module structure defined in Remark 3.29, the resulting -module satisfies the universal property in Definition 3.30, and the argument we gave in Lemma 3.21 can be repurposed to show that this is the unique -module satisfying this universal property.   Remark 3.31. We can express the universal property of the tensor product in the framework of Definition 1.87. For simplicity, assume that is a commutative ring. Consider the functor -Mod Set that sends an -module to the set of -bilinear maps , and a map of -modules to the function of sets induced by post-composition of functions. The universal property of the tensor product is encoded in the representable functor -Mod Set together with the bilinear map . Indeed, this says that induces a natural isomorphism between and by sending each -module to the bijection     The fact that this is a bijection says that for every -bilinear map there exists a unique -module homomorphism such that   commutes. So this is indeed the universal property we described before.   More generally, has a module structure when one of or is a bimodule.    Definition 3.32. Fix rings and . An -bimodule is an abelian group together with a left -module structure and a right -module structure such that for all , and ,     One sometimes writes to indicate is an -bimodule. An -bimodule is an -bimodule.     Example 3.33.  a) Let denote the ring of matrices with entries in a ring . We can also view as an -bimodule via left and right multiplication of matrices.  b) Any two-sided ideal of a ring is an -bimodule.  c) Let be a commutative ring and let be any left -module. Then is also a right -module under the same module structure, by setting     Moreover, is also an -bimodule using both of these structures at once.  d) Let be a ring homomorphism. We can view as an -bimodule via     for and , where the right hand side is just multiplication in . Similarly, can be viewed as an -bimodule and as an -bimodule.  e) Let be a commutative ring of prime characteristic , meaning that contains a copy of , or equivalently, that     Then is an -bimodule with the left module structure given by the Frobenius map     and right module structure given by the usual multiplication on . More precisely, given ,     where the right hand side is just multiplication in .   Exercise 49. Let be an -bimodule and a left -module. Consider as a left -module via   Then is a left -module via   The map   is left -linear, and for any left -module and left -linear -biadditive map , there is a unique left -linear map such that . Similarly, for a left -module and an -bimodule is a right -module via   Then is a right -module via   and the map   is right -linear, and for any -module and right -linear -biadditive map , there is a unique right -linear map such that .   The Tensor Product Functor         We can also take tensor products of maps.    Lemma 3.34. Let be a ring, be a homomorphism of right -modules, and be a homomorphism of left -modules. There exists a unique homomorphism of abelian groups such that     for all and . When is commutative, this map is a homomorphism of -modules. Moreover, if and are -bimodules and is left -linear, then is also a homomorphism of left -modules, and if and are -bimodules and is right -linear, then is also a homomorphism of right -modules.    Proof sketch. The function     is -biadditive, and -bilinear when is commutative, and right or left -linear in the bimodule case, so the universal property of tensor products in each case gives the desired homomorphism and its uniqueness.      Lemma 3.35. Given -module maps and , the composition of satisfies         Proof. It's sufficient to check that these maps agree on simple tensors, and indeed they both take to .   We are particularly interested in tensor products because of the tensor functor.    Theorem 3.36. Let be a right -module. There is an additive covariant functor     that takes each -module to , and each -module homomorphism to the homomorphism of abelian groups .  When is commutative, we can view as an additive functor -Mod.    Proof. Let . First, note that preserves identities, meaning , since the identity map on agrees with on simple tensors. Moreover, preserves compositions, since by Lemma 3.35 we have     Therefore, is a functor. To check that it is an additive functor, we need to prove that for all . It is sufficient to check that the maps and agree on simple tensors. Indeed,     We conclude that .      Definition 3.37. Given a ring and a right -module , the functor is the tensor product functor.    Note that we were purposely vague on the target of the tensor product functor: when is commutative, we get both a functor -Mod and a functor -Mod -Mod. The two functors are essentially the same: the tensor product functor is the composition of functor -Mod -Mod followed by the forgetful functor -Mod .  We can similarly define the tensor product functor ; when is commutative, it turns out that the two constructions are essentially the same.    Lemma 3.38 (Commutativity of tensor products). Let be a commutative ring. There is a natural isomorphism . In particular, for all -modules and we have       Proof. One can check (exercise!) that the map given by is -biadditive, and -bilinear if is commutative. The universal property of the tensor product gives us a homomorphism of abelian groups or -modules, depending on the case, such that the diagram   commutes. Similarly, we get a map and a commutative diagram   Then agrees with the identity on on simple tensors, so it is the identity. Similarly, is the identity on , and these are the desired isomorphisms.  The statement about naturality is more precisely the following: for every -module maps and , our isomorphisms and make the diagram   commute. To check this, it's sufficient to check commutativity on simple tensors, and indeed       Lemma 3.39 (Associativity of tensors). Given a right -module , an -bimodule , and a left -module ,       Proof. Fix . The map     is -biadditive, so it induces a homomorphism of abelian groups     This map is in fact a homomorphism of -modules when is commutative. Moreover,     is also -biadditive, and it induces a homomorphism that sends to . Similarly, we can define a homomorphism     The composition of these two homomorphisms in either order is the identity on simple tensors, and thus they are both isomorphisms.      Lemma 3.40. Let be any ring. There is a natural isomorphism between and the identity functor on -Mod. In particular, for every left -module there is an isomorphism of -modules       Proof. First, note that is an -bimodule, so is a left -module. The map     is -biadditive (by the distributive laws), -bilinear (by associativity of the action on a module), and -linear, so it induces a homomorphism of -modules . By definition, is surjective. Moreover, the map     is a homomorphism of -modules, since     For every , and for every simple tensor, . This shows that is an isomorphism.  Finally, given any , since is -linear we conclude that the diagram   commutes, so our isomorphism is natural.    Similarly to the Hom functor, tensor behaves well with respect to arbitrary direct sums.    Theorem 3.41. Let be a right -module, and let be an arbitrary family of left -modules. Then the map     is an isomorphism of abelian groups in general, of -modules in the commutative case, of modules if each is an -bimodule, and of right -modules if is an -bimodule. Moreover, this isomorphism is natural: given two families of left -modules and , and left -module homomorphisms , the -module homomorphisms     give a commutative diagram       Proof. First, note that the function     is -bilinear, so it induces a homomorphism     For each , let denote the inclusion map . The universal property of the coproduct (which in the case of -modules, means the direct sum) gives an -module homomorphism     which we obtain by assembling the -module homomorphisms . It is routine to check that is the inverse of , which must then be an isomorphism. Finally, we can check naturality by checking commutativity of the square above, element by element:      Remark 3.42. By commutativity of the tensor product, we also get natural isomorphisms      The following follows as a corollary of Lemma 3.40 and Theorem 3.41:  Exercise 50. Show that if and are free -modules on bases and , respectively, then is the free -module on basis   In particular,     Example 3.43. Let be any ring and consider . Let and . We claim that the element is not a simple tensor. Suppose, by contradiction, that there exist such that     Since is a basis for the free module , we can write     Substituting above, we see that     But by Exercise 50, is a basis for the free -module , so we can now compare coefficients: since     we must have     But since is a unit and , we must have ; similarly, since is a unit and , we must have . But we have both and that are units, which is a contradiction. We conclude that is not a simple tensor.   One of the reasons tensor products are useful is that we can use tensor products to extend module structures to ring extensions.   Remark 3.44. Let be a ring homomorphism. Since is an -bimodule, the abelian group has a left -module structure for every left -module . Thus - determines a functor from -modules to -modules.     Definition 3.45. Let be a ring homomorphism. The extension of scalars from to is the functor -Mod -mod: for each -module , we get an -module with     and for each -module homomorphism we get the -module homomorphism .    This functor is closely related to restriction of scalars: we will soon show that restriction and extension of scalars are adjoint functors.    Definition 3.46. Let be a ring homomorphism. The restriction of scalars functor from to is the functor -mod -Mod that takes each -module to the -module with underlying abelian group and -module structure     induced by . Moreover, for each -module homomorphism we get the module homomorphism defined by .    Exercise 51. Check that restriction of scalars as defined above is indeed a functor.   Tensor is Right Exact         Tensor is right exact.    Theorem 3.47. Let be a right -module. The functor is right exact, meaning that for every exact sequence     the sequence     is exact.    Proof. Since additive functors send complexes to complexes, . We have two more things to show:   we can find such that . Therefore,   .   : Let . We have already shown that , so . Let be the canonical projection. By definition, .  Consider the map     where is such that . First, we should check this map is well-defined. To see that, suppose that is another element with , so that . Then , so . Therefore, modulo , and is well-defined.  Moreover, one can check (exercise!) that is -biadditive, so it induces a homomorphism of -modules , which we will denote by . We will show that is a left inverse of , so is injective. And indeed, given and , we have     We conclude that is injective, and thus       However, tensor is not exact.   Example 3.48. Consider the short exact sequence     Applying the functor , we get an exact sequence     However, we claim that is not injective. On the one hand, by Lemma 3.40 we have an isomorphism . On the other hand, we have seen in Example 3.25 that , so the map cannot possibly be injective.   We can now show that extension of scalars turns an -module into the -module with the same presentation.   Remark 3.49. Let be a ring, be a right -module, and be a left -module. We can compute by taking a presentation of      and tensoring with to get     so is the cokernel of the map induced by . We can also compute by taking a presentation of      and tensoring with to get     so is isomorphic to the cokernel of the map induced by .            "
},
{
  "id": "sec-tensor-2",
  "level": "2",
  "url": "sec-tensor.html#sec-tensor-2",
  "type": "Reminders and Recollections",
  "number": "3.2",
  "title": "",
  "body": "     "
},
{
  "id": "def-3.18",
  "level": "2",
  "url": "sec-tensor.html#def-3.18",
  "type": "Definition",
  "number": "3.29",
  "title": "",
  "body": "  Definition 3.18. Fix a ring , and consider:    a right -module ,    a left -module ,    an abelian group .    A function is -biadditive if for all , all , and all we have               .    When is a commutative ring, suppose that is also an -module. We say that a function is -bilinear if for all , all , and all we have               .     "
},
{
  "id": "subsec-biadditive-6",
  "level": "2",
  "url": "sec-tensor.html#subsec-biadditive-6",
  "type": "Example",
  "number": "3.30",
  "title": "",
  "body": " Example 3.19. The product on is an -biadditive function . The first two rules follow from distributivity of multiplication over the sum; the final rule is a consequence of the associativity of multiplication.  When is commutative, this is an -bilinear function.  "
},
{
  "id": "def-3.20",
  "level": "2",
  "url": "sec-tensor.html#def-3.20",
  "type": "Definition",
  "number": "3.31",
  "title": "",
  "body": "  Definition 3.20. Let be a right -module and let be a left -module. The tensor product of and is an abelian group together with an -biadditive function with the following universal property: for every abelian group and every -biadditive map , there exists a unique group homomorphism such that the following diagram commutes:    "
},
{
  "id": "lem-3.21",
  "level": "2",
  "url": "sec-tensor.html#lem-3.21",
  "type": "Lemma",
  "number": "3.32",
  "title": "",
  "body": "  Lemma 3.21. Let be any ring, be a right -module, and a left -module. The tensor product of and is unique up to unique isomorphism. More precisely, if and are two tensor products, then there exists a unique isomorphism such that     Proof. First, note that the universal property of the tensor product implies that there exists a unique such that   commutes. Since the identity map is such a map, it must be the only such map.  Similarly, there are unique maps and such that   both commute. Stacking these up, we get commutative diagrams   Note that the identity maps on and are homomorphisms and that would make each of these triangles commute:   By uniqueness, must be the identity on and must be the identity on . In particular, and are isomorphic, and the isomorphisms and are unique.   "
},
{
  "id": "thm-3.22",
  "level": "2",
  "url": "sec-tensor.html#thm-3.22",
  "type": "Theorem",
  "number": "3.33",
  "title": "",
  "body": "  Theorem 3.22. Given any right -modules and any left -module , their tensor product exists, and it is given by the abelian group defined as follows:    Generators: For each pair of elements and , we have a generator .    Relations: the generators of satisfy the following relations, where , , and :         Proof. Let be the free abelian group on the set . In what follows, we identify a pair with the corresponding basis element for . Let be the subgroup of generated by     Let , and let denote the class of in the quotient. We claim that this abelian group is a tensor product for and , together with the map     Notice is the restriction of the quotient map to the basis elements of . Moreover, by construction of , the following identities hold:     Together, these make an -biadditive map. The map that sends each pair to the corresponding basis element is -bilinear by construction. Moreover, there is a natural quotient map , and these maps make the diagram   commute.  Now suppose that is any other abelian group, and let by any -biadditive map. Since is the free -module on induces a homomorphism of abelian groups such that , meaning for all and all .  Finally, the fact that is bilinear implies that . Therefore, induces a group homomorphism on . All this fits in the following commutative diagram:   Finally, this map we constructed satisfies , and since is generated by such elements, is completely determined by the images of , and thus unique.   "
},
{
  "id": "subsec-biadditive-17",
  "level": "2",
  "url": "sec-tensor.html#subsec-biadditive-17",
  "type": "Remark",
  "number": "3.34",
  "title": "",
  "body": " Remark 3.23. Two group homomorphisms coincide if and only if they agree on simple tensors, since these are generators for .  "
},
{
  "id": "subsec-biadditive-18",
  "level": "2",
  "url": "sec-tensor.html#subsec-biadditive-18",
  "type": "Remark",
  "number": "3.35",
  "title": "",
  "body": " Remark 3.24. In any tensor product , the simple tensor is the zero element, and     for all and .  "
},
{
  "id": "subsec-tensor-elements-4",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-elements-4",
  "type": "Example",
  "number": "3.36",
  "title": "",
  "body": " Example 3.25. We claim that , despite the fact that both of these -modules are nonzero. To see that, simply note that given any and any ,     Since is generated by simple tensors, which are all 0 , we conclude that .  "
},
{
  "id": "subsec-tensor-elements-5",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-elements-5",
  "type": "Example",
  "number": "3.37",
  "title": "",
  "body": " Example 3.26. Consider the abelian group . Again, this is very much nonzero, and yet we claim that . For any simple tensor,     "
},
{
  "id": "subsec-tensor-elements-6",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-elements-6",
  "type": "Example",
  "number": "3.38",
  "title": "",
  "body": " Example 3.27. Let and be distinct prime integers. Then has inverse modulo , say , and has an inverse modulo , say . Given any simple tensor in      Since all simple tensors are 0 and is generated by simple tensors, we conclude that .  "
},
{
  "id": "subsec-tensor-elements-8",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-elements-8",
  "type": "Exercise",
  "number": "3.39",
  "title": "",
  "body": "Exercise 47. Show that if , then . "
},
{
  "id": "subsec-tensor-elements-10",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-elements-10",
  "type": "Example",
  "number": "3.40",
  "title": "",
  "body": " Example 3.28. Consider the abelian group . The map     is -bilinear, and thus it induces a homomorphism . Via this map, , so is nonzero in , and .  "
},
{
  "id": "subsec-tensor-elements-12",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-elements-12",
  "type": "Exercise",
  "number": "3.41",
  "title": "",
  "body": "Exercise 48. Let and consider the ideal . Show that in , the element is not a simple tensor. "
},
{
  "id": "subsec-tensor-module-4",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-module-4",
  "type": "Remark",
  "number": "3.42",
  "title": "",
  "body": " Remark 3.29. Let be a commutative ring, and let and be -modules. We can give the structure of an -module, as follows: given and a simple tensor ,     We can then extend this linearly to all other elements of . We leave it as an exercise to check that this does indeed make the abelian group into an -module.  "
},
{
  "id": "def-3.30",
  "level": "2",
  "url": "sec-tensor.html#def-3.30",
  "type": "Definition",
  "number": "3.43",
  "title": "",
  "body": "  Definition 3.30. Let be a commutative ring and and be -modules. The tensor product of and is an -module together with an -bilinear map  with the following universal property: for every -module and every -bilinear map there exists a unique -module homomorphism such that the following diagram commutes:    "
},
{
  "id": "subsec-tensor-module-8",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-module-8",
  "type": "Remark",
  "number": "3.44",
  "title": "",
  "body": " Remark 3.31. We can express the universal property of the tensor product in the framework of Definition 1.87. For simplicity, assume that is a commutative ring. Consider the functor -Mod Set that sends an -module to the set of -bilinear maps , and a map of -modules to the function of sets induced by post-composition of functions. The universal property of the tensor product is encoded in the representable functor -Mod Set together with the bilinear map . Indeed, this says that induces a natural isomorphism between and by sending each -module to the bijection     The fact that this is a bijection says that for every -bilinear map there exists a unique -module homomorphism such that   commutes. So this is indeed the universal property we described before.  "
},
{
  "id": "def-3.32",
  "level": "2",
  "url": "sec-tensor.html#def-3.32",
  "type": "Definition",
  "number": "3.45",
  "title": "",
  "body": "  Definition 3.32. Fix rings and . An -bimodule is an abelian group together with a left -module structure and a right -module structure such that for all , and ,     One sometimes writes to indicate is an -bimodule. An -bimodule is an -bimodule.   "
},
{
  "id": "subsec-tensor-module-11",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-module-11",
  "type": "Example",
  "number": "3.46",
  "title": "",
  "body": " Example 3.33.  a) Let denote the ring of matrices with entries in a ring . We can also view as an -bimodule via left and right multiplication of matrices.  b) Any two-sided ideal of a ring is an -bimodule.  c) Let be a commutative ring and let be any left -module. Then is also a right -module under the same module structure, by setting     Moreover, is also an -bimodule using both of these structures at once.  d) Let be a ring homomorphism. We can view as an -bimodule via     for and , where the right hand side is just multiplication in . Similarly, can be viewed as an -bimodule and as an -bimodule.  e) Let be a commutative ring of prime characteristic , meaning that contains a copy of , or equivalently, that     Then is an -bimodule with the left module structure given by the Frobenius map     and right module structure given by the usual multiplication on . More precisely, given ,     where the right hand side is just multiplication in .  "
},
{
  "id": "subsec-tensor-module-12",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-module-12",
  "type": "Exercise",
  "number": "3.47",
  "title": "",
  "body": "Exercise 49. Let be an -bimodule and a left -module. Consider as a left -module via   Then is a left -module via   The map   is left -linear, and for any left -module and left -linear -biadditive map , there is a unique left -linear map such that . Similarly, for a left -module and an -bimodule is a right -module via   Then is a right -module via   and the map   is right -linear, and for any -module and right -linear -biadditive map , there is a unique right -linear map such that . "
},
{
  "id": "lem-3.34",
  "level": "2",
  "url": "sec-tensor.html#lem-3.34",
  "type": "Lemma",
  "number": "3.48",
  "title": "",
  "body": "  Lemma 3.34. Let be a ring, be a homomorphism of right -modules, and be a homomorphism of left -modules. There exists a unique homomorphism of abelian groups such that     for all and . When is commutative, this map is a homomorphism of -modules. Moreover, if and are -bimodules and is left -linear, then is also a homomorphism of left -modules, and if and are -bimodules and is right -linear, then is also a homomorphism of right -modules.    Proof sketch. The function     is -biadditive, and -bilinear when is commutative, and right or left -linear in the bimodule case, so the universal property of tensor products in each case gives the desired homomorphism and its uniqueness.   "
},
{
  "id": "lem-3.35",
  "level": "2",
  "url": "sec-tensor.html#lem-3.35",
  "type": "Lemma",
  "number": "3.49",
  "title": "",
  "body": "  Lemma 3.35. Given -module maps and , the composition of satisfies       "
},
{
  "id": "subsec-tensor-functor-6",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-functor-6",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " Proof. It's sufficient to check that these maps agree on simple tensors, and indeed they both take to .  "
},
{
  "id": "thm-3.36",
  "level": "2",
  "url": "sec-tensor.html#thm-3.36",
  "type": "Theorem",
  "number": "3.50",
  "title": "",
  "body": "  Theorem 3.36. Let be a right -module. There is an additive covariant functor     that takes each -module to , and each -module homomorphism to the homomorphism of abelian groups .  When is commutative, we can view as an additive functor -Mod.    Proof. Let . First, note that preserves identities, meaning , since the identity map on agrees with on simple tensors. Moreover, preserves compositions, since by Lemma 3.35 we have     Therefore, is a functor. To check that it is an additive functor, we need to prove that for all . It is sufficient to check that the maps and agree on simple tensors. Indeed,     We conclude that .   "
},
{
  "id": "def-3.37",
  "level": "2",
  "url": "sec-tensor.html#def-3.37",
  "type": "Definition",
  "number": "3.51",
  "title": "",
  "body": "  Definition 3.37. Given a ring and a right -module , the functor is the tensor product functor.   "
},
{
  "id": "lem-3.38",
  "level": "2",
  "url": "sec-tensor.html#lem-3.38",
  "type": "Lemma",
  "number": "3.52",
  "title": "",
  "body": "  Lemma 3.38 (Commutativity of tensor products). Let be a commutative ring. There is a natural isomorphism . In particular, for all -modules and we have       Proof. One can check (exercise!) that the map given by is -biadditive, and -bilinear if is commutative. The universal property of the tensor product gives us a homomorphism of abelian groups or -modules, depending on the case, such that the diagram   commutes. Similarly, we get a map and a commutative diagram   Then agrees with the identity on on simple tensors, so it is the identity. Similarly, is the identity on , and these are the desired isomorphisms.  The statement about naturality is more precisely the following: for every -module maps and , our isomorphisms and make the diagram   commute. To check this, it's sufficient to check commutativity on simple tensors, and indeed    "
},
{
  "id": "lem-3.39",
  "level": "2",
  "url": "sec-tensor.html#lem-3.39",
  "type": "Lemma",
  "number": "3.53",
  "title": "",
  "body": "  Lemma 3.39 (Associativity of tensors). Given a right -module , an -bimodule , and a left -module ,       Proof. Fix . The map     is -biadditive, so it induces a homomorphism of abelian groups     This map is in fact a homomorphism of -modules when is commutative. Moreover,     is also -biadditive, and it induces a homomorphism that sends to . Similarly, we can define a homomorphism     The composition of these two homomorphisms in either order is the identity on simple tensors, and thus they are both isomorphisms.   "
},
{
  "id": "lem-3.40",
  "level": "2",
  "url": "sec-tensor.html#lem-3.40",
  "type": "Lemma",
  "number": "3.54",
  "title": "",
  "body": "  Lemma 3.40. Let be any ring. There is a natural isomorphism between and the identity functor on -Mod. In particular, for every left -module there is an isomorphism of -modules       Proof. First, note that is an -bimodule, so is a left -module. The map     is -biadditive (by the distributive laws), -bilinear (by associativity of the action on a module), and -linear, so it induces a homomorphism of -modules . By definition, is surjective. Moreover, the map     is a homomorphism of -modules, since     For every , and for every simple tensor, . This shows that is an isomorphism.  Finally, given any , since is -linear we conclude that the diagram   commutes, so our isomorphism is natural.   "
},
{
  "id": "thm-3.41",
  "level": "2",
  "url": "sec-tensor.html#thm-3.41",
  "type": "Theorem",
  "number": "3.55",
  "title": "",
  "body": "  Theorem 3.41. Let be a right -module, and let be an arbitrary family of left -modules. Then the map     is an isomorphism of abelian groups in general, of -modules in the commutative case, of modules if each is an -bimodule, and of right -modules if is an -bimodule. Moreover, this isomorphism is natural: given two families of left -modules and , and left -module homomorphisms , the -module homomorphisms     give a commutative diagram       Proof. First, note that the function     is -bilinear, so it induces a homomorphism     For each , let denote the inclusion map . The universal property of the coproduct (which in the case of -modules, means the direct sum) gives an -module homomorphism     which we obtain by assembling the -module homomorphisms . It is routine to check that is the inverse of , which must then be an isomorphism. Finally, we can check naturality by checking commutativity of the square above, element by element:    "
},
{
  "id": "subsec-tensor-functor-17",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-functor-17",
  "type": "Remark",
  "number": "3.56",
  "title": "",
  "body": " Remark 3.42. By commutativity of the tensor product, we also get natural isomorphisms     "
},
{
  "id": "subsec-tensor-functor-19",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-functor-19",
  "type": "Exercise",
  "number": "3.57",
  "title": "",
  "body": "Exercise 50. Show that if and are free -modules on bases and , respectively, then is the free -module on basis   In particular,   "
},
{
  "id": "subsec-tensor-functor-20",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-functor-20",
  "type": "Example",
  "number": "3.58",
  "title": "",
  "body": " Example 3.43. Let be any ring and consider . Let and . We claim that the element is not a simple tensor. Suppose, by contradiction, that there exist such that     Since is a basis for the free module , we can write     Substituting above, we see that     But by Exercise 50, is a basis for the free -module , so we can now compare coefficients: since     we must have     But since is a unit and , we must have ; similarly, since is a unit and , we must have . But we have both and that are units, which is a contradiction. We conclude that is not a simple tensor.  "
},
{
  "id": "subsec-tensor-functor-22",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-functor-22",
  "type": "Remark",
  "number": "3.59",
  "title": "",
  "body": " Remark 3.44. Let be a ring homomorphism. Since is an -bimodule, the abelian group has a left -module structure for every left -module . Thus - determines a functor from -modules to -modules.  "
},
{
  "id": "def-3.45",
  "level": "2",
  "url": "sec-tensor.html#def-3.45",
  "type": "Definition",
  "number": "3.60",
  "title": "",
  "body": "  Definition 3.45. Let be a ring homomorphism. The extension of scalars from to is the functor -Mod -mod: for each -module , we get an -module with     and for each -module homomorphism we get the -module homomorphism .   "
},
{
  "id": "def-3.46",
  "level": "2",
  "url": "sec-tensor.html#def-3.46",
  "type": "Definition",
  "number": "3.61",
  "title": "",
  "body": "  Definition 3.46. Let be a ring homomorphism. The restriction of scalars functor from to is the functor -mod -Mod that takes each -module to the -module with underlying abelian group and -module structure     induced by . Moreover, for each -module homomorphism we get the module homomorphism defined by .   "
},
{
  "id": "subsec-tensor-functor-26",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-functor-26",
  "type": "Exercise",
  "number": "3.62",
  "title": "",
  "body": "Exercise 51. Check that restriction of scalars as defined above is indeed a functor. "
},
{
  "id": "thm-3.47",
  "level": "2",
  "url": "sec-tensor.html#thm-3.47",
  "type": "Theorem",
  "number": "3.63",
  "title": "",
  "body": "  Theorem 3.47. Let be a right -module. The functor is right exact, meaning that for every exact sequence     the sequence     is exact.    Proof. Since additive functors send complexes to complexes, . We have two more things to show:   we can find such that . Therefore,   .   : Let . We have already shown that , so . Let be the canonical projection. By definition, .  Consider the map     where is such that . First, we should check this map is well-defined. To see that, suppose that is another element with , so that . Then , so . Therefore, modulo , and is well-defined.  Moreover, one can check (exercise!) that is -biadditive, so it induces a homomorphism of -modules , which we will denote by . We will show that is a left inverse of , so is injective. And indeed, given and , we have     We conclude that is injective, and thus      "
},
{
  "id": "subsec-tensor-right-exact-6",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-right-exact-6",
  "type": "Example",
  "number": "3.64",
  "title": "",
  "body": " Example 3.48. Consider the short exact sequence     Applying the functor , we get an exact sequence     However, we claim that is not injective. On the one hand, by Lemma 3.40 we have an isomorphism . On the other hand, we have seen in Example 3.25 that , so the map cannot possibly be injective.  "
},
{
  "id": "subsec-tensor-right-exact-8",
  "level": "2",
  "url": "sec-tensor.html#subsec-tensor-right-exact-8",
  "type": "Remark",
  "number": "3.65",
  "title": "",
  "body": " Remark 3.49. Let be a ring, be a right -module, and be a left -module. We can compute by taking a presentation of      and tensoring with to get     so is the cokernel of the map induced by . We can also compute by taking a presentation of      and tensoring with to get     so is isomorphic to the cokernel of the map induced by .  "
},
{
  "id": "sec-tensor-8",
  "level": "2",
  "url": "sec-tensor.html#sec-tensor-8",
  "type": "Summary",
  "number": "3.2",
  "title": "",
  "body": "       "
},
{
  "id": "sec-localization",
  "level": "1",
  "url": "sec-localization.html",
  "type": "Section",
  "number": "3.3",
  "title": "Localization",
  "body": "Localization  Recall that a multiplicatively closed subset of a is a set that is closed for products. The three most important classes of multiplicatively closed sets are the following:   Example 3.50. Let be a commutative ring.    For any , the set is a multiplicatively closed set.    If is a prime ideal, the set is multiplicatively closed: this is an immediate translation of the definition.    An element that is not a zerodivisor is called a nonzerodivisor or regular element. The set of regular elements in forms a multiplicatively closed subset. When is a domain, this set is precisely the set of all nonzero elements .       Definition 3.51 (Localization of a ring). Let be a commutative ring, and be a multiplicative set with . The localization of at is a ring, denoted by or , given by where is the equivalence relation     The operations are given by     The zero in is and the multiplcative identity is . There is a canonical ring homomorphism     Note that we write elements in in the form even though they are equivalence classes of such expressions.  Let be an -module. The localization of at is the -module or given by     where is the equivalence relation if for some . The operations are given by     The zero in the module is given by .    Here are the most important examples of localizations you will come across in commutative algebra.   Example 3.52 (Most important localizations). Let be a commutative ring.    For and , we usually write for .    When is the set of nonzerodivisors on , we call the total ring of fractions of . When is a domain, this is just the fraction field of , and in this case this coincides with the localization at the prime , as described below.    For a prime ideal in , we generally write for , and call it the localization of at . Given an ideal in , we sometimes write to refer to , the image of via the canonical map . Notice that when we localize at a prime , the resulting ring is a local ring . We can think of the process of localization at as zooming in at the prime . Many properties of an ideal can be checked locally, by checking them for for each prime .      Remark 3.53. If is a domain, the equivalence relation defining the localization simplifies to . In particular, is a localization of .   If is not a domain, the canonical map is not necessarily injective.   Example 3.54. Consider . The canonical maps and are not injective, since in both cases is invertible in the localization, and thus      In , every element of becomes a unit. The following universal property says roughly that is the smallest -algebra in which every element of is a unit.    Theorem 3.55. Let be a commutative ring, and a multiplicative set with . Let be an -algebra in which every element of is a unit. Then there is a unique homomorphism such that the following diagram commutes:   where the vertical map is the structure homomorphism and the horizontal map is the canonical homomorphism.    Proof. Given an -algebra such that every element of is a unit, where the algebra structure is induced by the ring homomorphism , consider the map     First, note that our assumption that every element of is invertible in means that is invertible in , and thus makes sense. Moreover, we claim that is a ring homomorphism:     and moreover     and     Our definition of gives us     as desired. Moreover, if is any ring homomorphism such that     then     This proves our uniqueness claim.      Definition 3.56. Let be a commutative ring and let be a multiplicative subset of . The localization at is the functor -Mod -mod that sends each -module to the -module , and that sends each -module homomorphism to the homomorphism of -modules given by     We might denote this functor by or . When is the complement of a prime ideal , we write the localization at as .    Exercise 52. Show that for all -module homomorphisms , is a homomorphism of modules over .  Exercise 53. Show that localization is an exact additive functor.    Theorem 3.57. Let be a commutative ring, and a multiplicative subset of . Then the localization at and are naturally isomorphic functors. In particular, for every -module , there is an isomorphism of -modules     and given an -module map , the map of -modules corresponds to under these isomorphisms.    Proof. The bilinear map      induces a homomorphism that is surjective.  For an inverse map, set . To see this is well-defined, suppose , so there exists some such that . Then,     We can multiply through by to get     To see this is a homomorphism, we note that     and     The composition sends     Since this is the identity on simple tensors, and simple tensors generated the tensor product, it must be the identity.  For the claim about maps, we need check that for every -module homomorphism . And indeed,     Finally, we note that our isomorphisms give a natural isomorphism between the localization functor and the tensor functor . Indeed, given a map of -modules , the diagram   commutes, since it commutes for simple tensors:   Now since localization is exact, we conclude that is an exact functor for all commutative rings and all multiplicatively closed subsets .    Exercise 54. Let be a commutative noetherian ring, be a multiplicative set, be a finitely generated -module, and an arbitrary -module. Show that   In particular, if is prime,    Localization is a very powerful tool in commutative algebra. Many important concepts localize well, in the sense that to prove that or a module satisfy a certain property, it is often sufficient to show that all localizations of or of that module also have that property. This is a very common and helpful technique in commutative algebra. For example, a module is zero if and only if all its localizations are zero; one can even reduce to showing all localizations of at a prime ideal are zero.  One important thing to keep in mind, however, is that if is a finitely generated module, a localization of is typically not finitely generated over , though it is finitely generated over .  Exercise 55. Let be a domain and let be a nonzero nonunit. Then is not a finitely generated -module.  To solve this exercise, however, one needs a little bit of commutative algebra that we are not covering in this course.  "
},
{
  "id": "sec-localization-3",
  "level": "2",
  "url": "sec-localization.html#sec-localization-3",
  "type": "Example",
  "number": "3.66",
  "title": "",
  "body": " Example 3.50. Let be a commutative ring.    For any , the set is a multiplicatively closed set.    If is a prime ideal, the set is multiplicatively closed: this is an immediate translation of the definition.    An element that is not a zerodivisor is called a nonzerodivisor or regular element. The set of regular elements in forms a multiplicatively closed subset. When is a domain, this set is precisely the set of all nonzero elements .    "
},
{
  "id": "def-3.51",
  "level": "2",
  "url": "sec-localization.html#def-3.51",
  "type": "Definition",
  "number": "3.67",
  "title": "",
  "body": "  Definition 3.51 (Localization of a ring). Let be a commutative ring, and be a multiplicative set with . The localization of at is a ring, denoted by or , given by where is the equivalence relation     The operations are given by     The zero in is and the multiplcative identity is . There is a canonical ring homomorphism     Note that we write elements in in the form even though they are equivalence classes of such expressions.  Let be an -module. The localization of at is the -module or given by     where is the equivalence relation if for some . The operations are given by     The zero in the module is given by .   "
},
{
  "id": "sec-localization-6",
  "level": "2",
  "url": "sec-localization.html#sec-localization-6",
  "type": "Example",
  "number": "3.68",
  "title": "",
  "body": " Example 3.52 (Most important localizations). Let be a commutative ring.    For and , we usually write for .    When is the set of nonzerodivisors on , we call the total ring of fractions of . When is a domain, this is just the fraction field of , and in this case this coincides with the localization at the prime , as described below.    For a prime ideal in , we generally write for , and call it the localization of at . Given an ideal in , we sometimes write to refer to , the image of via the canonical map . Notice that when we localize at a prime , the resulting ring is a local ring . We can think of the process of localization at as zooming in at the prime . Many properties of an ideal can be checked locally, by checking them for for each prime .    "
},
{
  "id": "sec-localization-7",
  "level": "2",
  "url": "sec-localization.html#sec-localization-7",
  "type": "Remark",
  "number": "3.69",
  "title": "",
  "body": " Remark 3.53. If is a domain, the equivalence relation defining the localization simplifies to . In particular, is a localization of .  "
},
{
  "id": "sec-localization-9",
  "level": "2",
  "url": "sec-localization.html#sec-localization-9",
  "type": "Example",
  "number": "3.70",
  "title": "",
  "body": " Example 3.54. Consider . The canonical maps and are not injective, since in both cases is invertible in the localization, and thus     "
},
{
  "id": "thm-3.55",
  "level": "2",
  "url": "sec-localization.html#thm-3.55",
  "type": "Theorem",
  "number": "3.71",
  "title": "",
  "body": "  Theorem 3.55. Let be a commutative ring, and a multiplicative set with . Let be an -algebra in which every element of is a unit. Then there is a unique homomorphism such that the following diagram commutes:   where the vertical map is the structure homomorphism and the horizontal map is the canonical homomorphism.    Proof. Given an -algebra such that every element of is a unit, where the algebra structure is induced by the ring homomorphism , consider the map     First, note that our assumption that every element of is invertible in means that is invertible in , and thus makes sense. Moreover, we claim that is a ring homomorphism:     and moreover     and     Our definition of gives us     as desired. Moreover, if is any ring homomorphism such that     then     This proves our uniqueness claim.   "
},
{
  "id": "def-3.56",
  "level": "2",
  "url": "sec-localization.html#def-3.56",
  "type": "Definition",
  "number": "3.72",
  "title": "",
  "body": "  Definition 3.56. Let be a commutative ring and let be a multiplicative subset of . The localization at is the functor -Mod -mod that sends each -module to the -module , and that sends each -module homomorphism to the homomorphism of -modules given by     We might denote this functor by or . When is the complement of a prime ideal , we write the localization at as .   "
},
{
  "id": "sec-localization-13",
  "level": "2",
  "url": "sec-localization.html#sec-localization-13",
  "type": "Exercise",
  "number": "3.73",
  "title": "",
  "body": "Exercise 52. Show that for all -module homomorphisms , is a homomorphism of modules over . "
},
{
  "id": "sec-localization-14",
  "level": "2",
  "url": "sec-localization.html#sec-localization-14",
  "type": "Exercise",
  "number": "3.74",
  "title": "",
  "body": "Exercise 53. Show that localization is an exact additive functor. "
},
{
  "id": "thm-3.57",
  "level": "2",
  "url": "sec-localization.html#thm-3.57",
  "type": "Theorem",
  "number": "3.75",
  "title": "",
  "body": "  Theorem 3.57. Let be a commutative ring, and a multiplicative subset of . Then the localization at and are naturally isomorphic functors. In particular, for every -module , there is an isomorphism of -modules     and given an -module map , the map of -modules corresponds to under these isomorphisms.    Proof. The bilinear map      induces a homomorphism that is surjective.  For an inverse map, set . To see this is well-defined, suppose , so there exists some such that . Then,     We can multiply through by to get     To see this is a homomorphism, we note that     and     The composition sends     Since this is the identity on simple tensors, and simple tensors generated the tensor product, it must be the identity.  For the claim about maps, we need check that for every -module homomorphism . And indeed,     Finally, we note that our isomorphisms give a natural isomorphism between the localization functor and the tensor functor . Indeed, given a map of -modules , the diagram   commutes, since it commutes for simple tensors:   Now since localization is exact, we conclude that is an exact functor for all commutative rings and all multiplicatively closed subsets .   "
},
{
  "id": "sec-localization-16",
  "level": "2",
  "url": "sec-localization.html#sec-localization-16",
  "type": "Exercise",
  "number": "3.76",
  "title": "",
  "body": "Exercise 54. Let be a commutative noetherian ring, be a multiplicative set, be a finitely generated -module, and an arbitrary -module. Show that   In particular, if is prime,   "
},
{
  "id": "sec-localization-19",
  "level": "2",
  "url": "sec-localization.html#sec-localization-19",
  "type": "Exercise",
  "number": "3.77",
  "title": "",
  "body": "Exercise 55. Let be a domain and let be a nonzero nonunit. Then is not a finitely generated -module. "
},
{
  "id": "sec-hom-tensor",
  "level": "1",
  "url": "sec-hom-tensor.html",
  "type": "Section",
  "number": "3.4",
  "title": "Hom-Tensor Adjunction",
  "body": "Hom-Tensor Adjunction  The Hom and tensor functors are closely related. First, we note that can be a module over a ring when or have a bimodule structure.  Exercise 56. Let and be rings.   If is an -bimodule and is a left -module, then has a left -module structure via .    If is an -bimodule and is a right -module, then has a right -module structure via .    If is an -bimodule and is a right -module, then has a left -module structure via .    If is an -bimodule and is a left -module, then has a right -module structure via .     These structures can be a bit confusing at first - especially since we have left module structures written on the right and vice-versa. While the exercise is not difficult, it can be extremely enlightening - we strongly recommend the reader tries their hand at the details.  The following statements are known as Hom-tensor adjunction - and as we will see, they do encode an adjunction of functors.    Let and be rings. Assume that     is a right -module,     is an -bimodule, and     is a right -module.    There is a natural isomorphism of abelian groups     If also has a -bimodule structure, or has a -bimodule structure, then this is an isomorphism of (left or right, respectively) -modules.      Theorem 3.59. Let and be rings. Assume that     is a left -module,     is an -bimodule, and     is a left -module.    There is a natural isomorphism of abelian groups       We leave the details to the reader, and prove the case when the underlying rings are commutative. First, let's do the case when .    Theorem 3.60 (Hom-tensor adjunction I). Let be a commutative ring and let , and be -modules. There is an isomorphism of -modules     that is natural on , and .    Proof. The universal property of the tensor product says that to give an -module homomorphism is the same as giving an -bilinear map . Given such a bilinear map , the map is -linear for each , so it defines an -module homomorphism . Now the assignment     is -linear, is an -module homomorphism, and is -linear on .  Conversely, given an -module homomorphism , one can check (exercise!) that is an -bilinear map, so it induces an -module homomorphism . Moreover, the two constructions are inverse to each other.  So we have constructed a bijection of Hom-sets     It's routine to check that both of these bijections are indeed homomorphisms of -modules, so we leave it as an exercise.  Finally, naturality means we have the following commutative diagrams:   and   We leave checking these do indeed commute as an exercise.      Corollary 3.61 (Tensor and Hom are adjoint functors). Let be a commutative ring, and an -module. The functor -Mod -Mod is left adjoint to the functor -Mod -Mod.    Proof. The adjointness translates into the fact that for all -modules and there is a bijection     which is natural on and , which is a corollary of Theorem 3.60.    Later, when we talk about more general abelian categories, we will see that this adjunction implies that Hom is left exact and that tensor is right exact; in fact, this is a more general fact about adjoint pairs. For now, we want to discuss a more general version of this Hom-tensor adjunction.    Theorem 3.62 (Hom-tensor adjunction II). Let be a ring homomorphism of commutative rings. Let be an -module, and and be -modules. There is an isomorphism of abelian groups     Moreover, this isomorphism is natural on , and , so it induces natural isomorphisms    between and .    between and .    between and .      Proof. Consider the map     Fix . For each , let be the map defined by . Note that is indeed a homomorphism of -modules, since it is the composition of two -module maps, and , where is the constant map equal to .  We should check that our proposed map is indeed a map of abelian groups. It is immediate from the definition that sends the 0-map to the 0-map. Moreover, given module homomorphisms , and any , we have     so for all , and thus .  Suppose that . Then for every and every ,     so vanishes at every simple tensor, and we must have . On the other hand, if we are given , consider the map defined by . Since is a homomorphism of -modules, it is -linear on . Moreover, for each fixed is a homomorphism of -modules, so in particular is -linear. Together, these say that is an -bilinear map. Let be the homomorphism of -modules induced by . By definition, , so . We conclude that is a bijection.  We leave the statements about naturality as exercises.      Corollary 3.63 (Adjointness of restriction and extension of scalars). Let be ring homomorphism. The restriction of scalars functor -Mod -Mod is the right adjoint of the extension of scalars functor -Mod -Mod.    Proof. We need to show that for every -module and every -module there are bijections     which are natural on both and . By Theorem 3.62, we have natural bijections     The module is precisely . By Exercise as an -module. An isomorphism of -modules is in particular an -linear map, and thus also an isomorphism of -modules. So as -modules. Therefore, the Hom-tensor adjuntion gives us the natural bijections we were looking for.    The idea is that restriction of scalars and extension of scalars are the most efficient ways of making an -module out of an -module, and vice-versa.  "
},
{
  "id": "sec-hom-tensor-3",
  "level": "2",
  "url": "sec-hom-tensor.html#sec-hom-tensor-3",
  "type": "Exercise",
  "number": "3.78",
  "title": "",
  "body": "Exercise 56. Let and be rings.   If is an -bimodule and is a left -module, then has a left -module structure via .    If is an -bimodule and is a right -module, then has a right -module structure via .    If is an -bimodule and is a right -module, then has a left -module structure via .    If is an -bimodule and is a left -module, then has a right -module structure via .    "
},
{
  "id": "thm-3.58",
  "level": "2",
  "url": "sec-hom-tensor.html#thm-3.58",
  "type": "Theorem",
  "number": "3.79",
  "title": "",
  "body": "  Let and be rings. Assume that     is a right -module,     is an -bimodule, and     is a right -module.    There is a natural isomorphism of abelian groups     If also has a -bimodule structure, or has a -bimodule structure, then this is an isomorphism of (left or right, respectively) -modules.   "
},
{
  "id": "thm-3.59",
  "level": "2",
  "url": "sec-hom-tensor.html#thm-3.59",
  "type": "Theorem",
  "number": "3.80",
  "title": "",
  "body": "  Theorem 3.59. Let and be rings. Assume that     is a left -module,     is an -bimodule, and     is a left -module.    There is a natural isomorphism of abelian groups      "
},
{
  "id": "thm-3.60",
  "level": "2",
  "url": "sec-hom-tensor.html#thm-3.60",
  "type": "Theorem",
  "number": "3.81",
  "title": "",
  "body": "  Theorem 3.60 (Hom-tensor adjunction I). Let be a commutative ring and let , and be -modules. There is an isomorphism of -modules     that is natural on , and .    Proof. The universal property of the tensor product says that to give an -module homomorphism is the same as giving an -bilinear map . Given such a bilinear map , the map is -linear for each , so it defines an -module homomorphism . Now the assignment     is -linear, is an -module homomorphism, and is -linear on .  Conversely, given an -module homomorphism , one can check (exercise!) that is an -bilinear map, so it induces an -module homomorphism . Moreover, the two constructions are inverse to each other.  So we have constructed a bijection of Hom-sets     It's routine to check that both of these bijections are indeed homomorphisms of -modules, so we leave it as an exercise.  Finally, naturality means we have the following commutative diagrams:   and   We leave checking these do indeed commute as an exercise.   "
},
{
  "id": "cor-3.61",
  "level": "2",
  "url": "sec-hom-tensor.html#cor-3.61",
  "type": "Corollary",
  "number": "3.82",
  "title": "",
  "body": "  Corollary 3.61 (Tensor and Hom are adjoint functors). Let be a commutative ring, and an -module. The functor -Mod -Mod is left adjoint to the functor -Mod -Mod.    Proof. The adjointness translates into the fact that for all -modules and there is a bijection     which is natural on and , which is a corollary of Theorem 3.60.   "
},
{
  "id": "thm-3.62",
  "level": "2",
  "url": "sec-hom-tensor.html#thm-3.62",
  "type": "Theorem",
  "number": "3.83",
  "title": "",
  "body": "  Theorem 3.62 (Hom-tensor adjunction II). Let be a ring homomorphism of commutative rings. Let be an -module, and and be -modules. There is an isomorphism of abelian groups     Moreover, this isomorphism is natural on , and , so it induces natural isomorphisms    between and .    between and .    between and .      Proof. Consider the map     Fix . For each , let be the map defined by . Note that is indeed a homomorphism of -modules, since it is the composition of two -module maps, and , where is the constant map equal to .  We should check that our proposed map is indeed a map of abelian groups. It is immediate from the definition that sends the 0-map to the 0-map. Moreover, given module homomorphisms , and any , we have     so for all , and thus .  Suppose that . Then for every and every ,     so vanishes at every simple tensor, and we must have . On the other hand, if we are given , consider the map defined by . Since is a homomorphism of -modules, it is -linear on . Moreover, for each fixed is a homomorphism of -modules, so in particular is -linear. Together, these say that is an -bilinear map. Let be the homomorphism of -modules induced by . By definition, , so . We conclude that is a bijection.  We leave the statements about naturality as exercises.   "
},
{
  "id": "cor-3.63",
  "level": "2",
  "url": "sec-hom-tensor.html#cor-3.63",
  "type": "Corollary",
  "number": "3.84",
  "title": "",
  "body": "  Corollary 3.63 (Adjointness of restriction and extension of scalars). Let be ring homomorphism. The restriction of scalars functor -Mod -Mod is the right adjoint of the extension of scalars functor -Mod -Mod.    Proof. We need to show that for every -module and every -module there are bijections     which are natural on both and . By Theorem 3.62, we have natural bijections     The module is precisely . By Exercise as an -module. An isomorphism of -modules is in particular an -linear map, and thus also an isomorphism of -modules. So as -modules. Therefore, the Hom-tensor adjuntion gives us the natural bijections we were looking for.   "
},
{
  "id": "sec-projective",
  "level": "1",
  "url": "sec-projective.html",
  "type": "Section",
  "number": "4.1",
  "title": "Projective Modules",
  "body": "Projective Modules        Definition, Free Modules are Projective    I don't have time to worry about what I'm projecting to the world. I'm just busy being myself.   Demi Lovato   While Hom and tensor are not exact functors in general, , and can be exact functors for carefully chosen modules . In this chapter, we introduce these three classes of modules (projective, injective, and flat modules) and study their properties. Throughout, we consider general rings and left modules.  Projective Module   Let be a ring. An -module is projective if given any surjective -module homomorphism and any -module homomorphism , there exists an -module homomorphism such that the diagram   commutes. projective module      The commutativity of the diagram   says that , where is the induced by . Whenever this happens, we say that is a lifting of , and that lifts, or that factors through . lift    There are projective modules over any ring, as the next result shows; in fact, free modules are always projective.  Free Modules are Projective   Free modules are projective.    Let be a free -module. Suppose we are given -module homomorphisms and such that is surjective. Fix a basis for . Since is surjective, for each we can choose such that . Consider the function given by . The universal property of free modules says that there exists an -module homomorphism that coincides with for all basis elements. Now so agrees with for all basis elements. Since generates , we conclude that .    Projective modules are precisely those that make the covariant functor exact.    Let be an -module. The functor is exact if and only if is projective.    By  is left exact. The statement is that is projective if and only for any short exact sequence the induced map is surjective. Say we are given a surjective map   The induced map is surjective if and only if for every there exists a lifting of , meaning . By , the existence of such a for all such surjective maps is precisely the condition that is projective.     This is really the definition of what a projective module is, but for those that have not seen category theory, the definition given is used.     For any ring is exact. More generally, if is any free -module, then is exact.    By , free modules, and in particular, are projective. By , must be exact for any free -module .    However, not every projective module is free. But before we see such examples, we need to know a bit more about projective modules.   Direct Summands         First, we show that we can rephrase the condition that a module is projective or injective in terms of split exact sequences.  Projective Modules and Splitting   An -module is projective if and only if every short exact sequence splits.     Consider a short exact sequence   If is projective, the identity map on lifts to a map , meaning that   commutes. This says that our map  is a splitting for our short exact sequence, which must then be split, by Lemma 2.19.   Conversely, suppose that every short exact sequence splits, and consider any diagram   Let be a free module that surjects onto - for example, the free module on a set of generators of - and fix a surjection . By assumption, the short exact sequence splits, so by there exists such that . Now since is free, we can define an -module map that such that   commutes, by sending each basis element to any lift of in via . Now set , and note that so is a lift of by .    We have seen that free modules are projective; what other modules are projective?  Direct Summand   An -module is a direct summand of an -module if there exists an -module such that . direct summand      Remark 4.8. Saying that is a direct summand of is equivalent to giving a splitting of the inclusion map , meaning that . As we have argued in , such a splitting gives   Essentially repeating the argument we used in , every element in can be written as where and , and because if then .  Note that when we are dealing with graded modules over a graded ring, the kernels and images of graded maps are graded modules, and the equality is a graded direct sum of graded modules.   Projective iff Direct Summand of Free Module   An -module is projective if and only if is a direct summand of a free -module. In particular, a finitely generated -module is projective if and only if is a direct summand of for some .     Let be a projective module, and fix a free module surjecting onto . If is finitely generated, we can take for some . The short exact sequence must split by , so is a direct summand of .   Now suppose is a direct summand of a free module . In particular, we have an inclusion map that splits, so it comes together with a projection map such that . Given any diagram   we can define an -module homomorphism such that , so that the following diagram commutes:   Setting , we do indeed obtain , since      Remark 4.10. While every module is a quotient of a free module , so that we always have a surjection , not every module embeds into a free module; and even if is a submodule of some free module , the inclusion map is not necessarily split. On the other hand, as we showed in that is projective if and only if we can write it as a quotient of a free module , say , and splits, so that in fact embeds into and that map splits.     Let be any ring.   Every direct summand of a projective module is projective.    Every direct sum of projective modules is projective.          Suppose for some projective module . By , there exists a free -module and an -module such that . Then , and by this implies is projective.    Let be a family of projective modules. By , there exist free modules such that each is a direct summand of . Therefore, is a direct summand of , which is also free. By , this implies that is projective.       We are finally ready to give examples showing that projective modules are not necessarily free.  Projective but not Free Module  Example 4.12. The ring can be written as a direct sum of the ideals   Indeed, and , so . By , and are projective -modules. However, and are not free. This can be explained numerically: every finitely generated free -module is of the form , so it has elements for some , while and have and elements respectively.   Finally, to emphasize its importance we record here an easy result that we have used repeatedly at this point, and which will be very important later on.    For every -module , there exists a free module surjecting onto . If is finitely generated, we can take to be finitely generated.    We will often need only a weaker version of this: that every module is a quotient of a projective module.      Projective modules are exactly the modules that make exact.    Here are other equivalent characterizations of a projective module :   Given any surjective -module homomorphism and any -module homomorphism , there exists an -module homomorphism such that the diagram   commutes.     is the direct summand of a free module    Every short exact sequence splits.       Free modules are projective. Projective modules are free in commutative rings that are either local or graded.    For every module , there exists a free module surjecting into .     "
},
{
  "id": "sec-projective-2",
  "level": "2",
  "url": "sec-projective.html#sec-projective-2",
  "type": "Reminders and Recollections",
  "number": "4.1",
  "title": "",
  "body": "     "
},
{
  "id": "def-4.1",
  "level": "2",
  "url": "sec-projective.html#def-4.1",
  "type": "Definition",
  "number": "4.1",
  "title": "Projective Module.",
  "body": "Projective Module   Let be a ring. An -module is projective if given any surjective -module homomorphism and any -module homomorphism , there exists an -module homomorphism such that the diagram   commutes. projective module    "
},
{
  "id": "rem-4.2",
  "level": "2",
  "url": "sec-projective.html#rem-4.2",
  "type": "Remark",
  "number": "4.2",
  "title": "",
  "body": " The commutativity of the diagram   says that , where is the induced by . Whenever this happens, we say that is a lifting of , and that lifts, or that factors through . lift   "
},
{
  "id": "thm-4.3",
  "level": "2",
  "url": "sec-projective.html#thm-4.3",
  "type": "Theorem",
  "number": "4.3",
  "title": "Free Modules are Projective.",
  "body": "Free Modules are Projective   Free modules are projective.    Let be a free -module. Suppose we are given -module homomorphisms and such that is surjective. Fix a basis for . Since is surjective, for each we can choose such that . Consider the function given by . The universal property of free modules says that there exists an -module homomorphism that coincides with for all basis elements. Now so agrees with for all basis elements. Since generates , we conclude that .   "
},
{
  "id": "thm-4.4",
  "level": "2",
  "url": "sec-projective.html#thm-4.4",
  "type": "Theorem",
  "number": "4.4",
  "title": "",
  "body": "  Let be an -module. The functor is exact if and only if is projective.    By  is left exact. The statement is that is projective if and only for any short exact sequence the induced map is surjective. Say we are given a surjective map   The induced map is surjective if and only if for every there exists a lifting of , meaning . By , the existence of such a for all such surjective maps is precisely the condition that is projective.   "
},
{
  "id": "cor-4.5",
  "level": "2",
  "url": "sec-projective.html#cor-4.5",
  "type": "Corollary",
  "number": "4.5",
  "title": "",
  "body": "  For any ring is exact. More generally, if is any free -module, then is exact.    By , free modules, and in particular, are projective. By , must be exact for any free -module .   "
},
{
  "id": "thm-4.6",
  "level": "2",
  "url": "sec-projective.html#thm-4.6",
  "type": "Theorem",
  "number": "4.6",
  "title": "Projective Modules and Splitting.",
  "body": "Projective Modules and Splitting   An -module is projective if and only if every short exact sequence splits.     Consider a short exact sequence   If is projective, the identity map on lifts to a map , meaning that   commutes. This says that our map  is a splitting for our short exact sequence, which must then be split, by Lemma 2.19.   Conversely, suppose that every short exact sequence splits, and consider any diagram   Let be a free module that surjects onto - for example, the free module on a set of generators of - and fix a surjection . By assumption, the short exact sequence splits, so by there exists such that . Now since is free, we can define an -module map that such that   commutes, by sending each basis element to any lift of in via . Now set , and note that so is a lift of by .   "
},
{
  "id": "def-4.7",
  "level": "2",
  "url": "sec-projective.html#def-4.7",
  "type": "Definition",
  "number": "4.7",
  "title": "Direct Summand.",
  "body": "Direct Summand   An -module is a direct summand of an -module if there exists an -module such that . direct summand    "
},
{
  "id": "subsec-direct-summands-7",
  "level": "2",
  "url": "sec-projective.html#subsec-direct-summands-7",
  "type": "Remark",
  "number": "4.8",
  "title": "",
  "body": " Remark 4.8. Saying that is a direct summand of is equivalent to giving a splitting of the inclusion map , meaning that . As we have argued in , such a splitting gives   Essentially repeating the argument we used in , every element in can be written as where and , and because if then .  Note that when we are dealing with graded modules over a graded ring, the kernels and images of graded maps are graded modules, and the equality is a graded direct sum of graded modules.  "
},
{
  "id": "thm-4.9",
  "level": "2",
  "url": "sec-projective.html#thm-4.9",
  "type": "Theorem",
  "number": "4.9",
  "title": "Projective iff Direct Summand of Free Module.",
  "body": "Projective iff Direct Summand of Free Module   An -module is projective if and only if is a direct summand of a free -module. In particular, a finitely generated -module is projective if and only if is a direct summand of for some .     Let be a projective module, and fix a free module surjecting onto . If is finitely generated, we can take for some . The short exact sequence must split by , so is a direct summand of .   Now suppose is a direct summand of a free module . In particular, we have an inclusion map that splits, so it comes together with a projection map such that . Given any diagram   we can define an -module homomorphism such that , so that the following diagram commutes:   Setting , we do indeed obtain , since    "
},
{
  "id": "subsec-direct-summands-9",
  "level": "2",
  "url": "sec-projective.html#subsec-direct-summands-9",
  "type": "Remark",
  "number": "4.10",
  "title": "",
  "body": " Remark 4.10. While every module is a quotient of a free module , so that we always have a surjection , not every module embeds into a free module; and even if is a submodule of some free module , the inclusion map is not necessarily split. On the other hand, as we showed in that is projective if and only if we can write it as a quotient of a free module , say , and splits, so that in fact embeds into and that map splits.  "
},
{
  "id": "cor-4.11",
  "level": "2",
  "url": "sec-projective.html#cor-4.11",
  "type": "Corollary",
  "number": "4.11",
  "title": "",
  "body": "  Let be any ring.   Every direct summand of a projective module is projective.    Every direct sum of projective modules is projective.          Suppose for some projective module . By , there exists a free -module and an -module such that . Then , and by this implies is projective.    Let be a family of projective modules. By , there exist free modules such that each is a direct summand of . Therefore, is a direct summand of , which is also free. By , this implies that is projective.      "
},
{
  "id": "subsec-direct-summands-12",
  "level": "2",
  "url": "sec-projective.html#subsec-direct-summands-12",
  "type": "Example",
  "number": "4.12",
  "title": "Projective but not Free Module.",
  "body": "Projective but not Free Module  Example 4.12. The ring can be written as a direct sum of the ideals   Indeed, and , so . By , and are projective -modules. However, and are not free. This can be explained numerically: every finitely generated free -module is of the form , so it has elements for some , while and have and elements respectively.  "
},
{
  "id": "lem-4.13",
  "level": "2",
  "url": "sec-projective.html#lem-4.13",
  "type": "Lemma",
  "number": "4.13",
  "title": "",
  "body": "  For every -module , there exists a free module surjecting onto . If is finitely generated, we can take to be finitely generated.   "
},
{
  "id": "sec-projective-5",
  "level": "2",
  "url": "sec-projective.html#sec-projective-5",
  "type": "Summary",
  "number": "4.1",
  "title": "",
  "body": "   Projective modules are exactly the modules that make exact.    Here are other equivalent characterizations of a projective module :   Given any surjective -module homomorphism and any -module homomorphism , there exists an -module homomorphism such that the diagram   commutes.     is the direct summand of a free module    Every short exact sequence splits.       Free modules are projective. Projective modules are free in commutative rings that are either local or graded.    For every module , there exists a free module surjecting into .    "
},
{
  "id": "sec-injective",
  "level": "1",
  "url": "sec-injective.html",
  "type": "Section",
  "number": "4.2",
  "title": "Injective Modules",
  "body": "Injective Modules        Definition and Baer's Criterion         Injective modules are dual to projectives.  Injective Module   An -module is injective if given an injective -module homomorphism and an -module homomorphism , there exist an -module homomorphism such that   commutes.    These are precisely the modules such that is exact.    An -module is injective if and only if is exact, meaning that for every short exact sequence we get an exact sequence     By , is left exact, so for any short exact sequence we get an exact sequence   So the content of the theorem is that is injective if and only if for every injective -module homomorphism , the induced map is surjective. Now notice that is surjective if and only if every lifts to some , meaning   commutes. That is precisely what we want for to be injective.    Giving examples of injective modules is much harder than giving examples of projective modules, but we will see some examples later. First, we prove some properties of injective modules.  The class of injectives modules is closed for products and finite direct sums.    Given any family of injective modules, is injective.    Let be the projection onto the th factor. Given any diagram   the fact that is injective gives us -module homomorphisms such that   commutes for each . Now the -module homomorphism makes the diagram   commute, so is injective.      If is an injective -module, then so are and .    Any diagram   can be extended to a map by composing with the inclusion of the first factor. Since is injective, there exists such that   commutes. Let be the projection onto , so that . Now if we set ,        Baer Criterion   An -module is injective if and only if every -module homomorphism from an ideal in can be extended to the whole ring, meaning that there exists making the diagram   commute.    On the one hand, if is injective then our condition is simply a special case of the definition of injective module. On the other hand, suppose that this condition holds, and consider any diagram   To simplify notation, let's assume our map is indeed the inclusion of the submodule , so we can write for the image of in . Consider the set   First, notice is nonempty, since . Moreover, we can partially order by setting if and . So we have a nonempty partially ordered set; let's show we can apply Zorn's Lemma to it.  Given a chain in , meaning a sequence of nested submodules and maps that extend all with , let , and define   Since all the are homomorphisms of -modules, this map is indeed a map of -modules. Moreover, is well-defined, since the whenever . By construction, this map extends all the , so we conclude that is an upper bound for our chain. Moreover, follows immediately from our construction, and since each extends , so does . We conclude that , and more generally that any chain in has an upper bound in . So Zorn's Lemma applies.  By Zorn's Lemma, has a maximal element, say . We claim that . Suppose not, and let be an element not in . One can check that is an ideal in , and that is an -module homomorphism.  By assumption, we can extend to an -module homomorphism , which we will write as as well. Now the -module homomorphism is well-defined by construction, since any satisfies , and if then . Finally, this map agrees with on , and thus it agrees with on , so and . By the maximality of , we conclude that , and thus , which is a contradiction. We conclude that . Therefore, makes the diagram   commute.     Divisible Modules         It is very easy to see that every -module is a quotient of a free module. The dual statement is true as well, but it is a little more delicate.  Divisible Module   An -module is divisible if for every nonzero and every there exists such that .     Remark 4.22. Given , and an -module , the multiplication by map is an -module homomorphism. The module is divisible if and only if multiplication by is surjective for all nonzero .   Divisible Modules   The set of rational numbers , considered as a module over the ring of integers , is a divisible module. This is because for any nonzero integer , you can find a rational number such that is still a rational number.    Divisible Modules Closed Under Quotients   Any quotient of a divisible module is also divisible.    Let be a divisible -module and be a submodule of . Let and  . By assumption, there exists such that . The image of in is still a solution to , so indeed is divisible.    Closure Properties of Divisible Modules   Divisible modules are closed under taking submodules, quotients, direct sums, and localizations.    Injective Modules Divisible in Domains   Over a domain, every injective module is divisible.    Suppose that is an injective -module, where is a domain. Fix and . Since is a domain, we have for any . In particular, each element in can be written uniquely as for some . In particular, the map of -modules   is well-defined. Since is injective, we can extend this to a homomorphism . Finally, is an element such that , and is divisible.    This not true in general if we do not assume is a domain.  Injective but not Divisible Module  Example 4.25. Let be a field and . On the one hand, is not a divisible -module, since there is no such that . On the other hand, is actually an injective module over itself, although we do not have the tools to justify that this is indeed an injective -module.    The converse of does not hold in general, and quotients of injective modules are not necessarily injective.  Injective Modules not Closed Under Quotients Exercise 57. Let , where is a field, let be the fraction field of . The -module is divisible but not injective.  But the converse of does hold for some special classes of rings.  Injective iff Divisible in PID   Let be a principal ideal domain. An -module is injective if and only it is divisible.    Given , we only need to show that divisible modules are injective. By Baer's Criterion, we only need to show that any map from an ideal to can be extended to the whole ring. So let be a divisible -module, and consider any map from an ideal to . If , we could extend our map by taking the map from to , so we might as well assume that . By assumption, for some , and since is divisible, there exists such that . Now consider the multiplication by map, For every , so extends . Therefore, by Theorem 4.18, is injective.    Injectives Closed Under Quotients in PIDs   Over a principal ideal domain, quotients of injective modules are injective.    If is injective, it is also divisible, by . Given any submodule , any , and a nonzero , there exists such that , and so this also holds in . Then is divisible, and thus injective by . Using fancy words you might learn in Commutative Algebra II, this ring is an example of a complete intersection, which is a subclass of Gorenstein rings. Moreover, - this is something you'd learn about in Commutative Algebra II. Now it turns out (and this is a nontrivial fact) that Gorenstein rings of dimension 0 are injective modules over themselves.     Given an injective abelian group, we can always use it to construct an injective -module over our favorite ring .    Given an injective abelian group and a ring is an injective -module.    Let . This abelian group is an -module, via   We claim that is actually an injective -module. By , it is sufficient to prove that is an exact functor. By , is naturally isomorphic to . This last functor is the composition of   On the one hand, is naturally isomorphic to the identity on -Mod, by , so it is exact. On the other hand, is an injective -module, so is exact by . The composition of exact functors is exact, and thus is exact.     Example 4.29. Since is a divisible abelian group, by for any ring the -module is injective.    Every Module Embeds into an Injective Module         When we talked about projective modules, we showed that every module is a quotient of a projective - in fact, every module is a quotient of a free module. The dual statement is true as well: that every module embeds into an injective module. We will soon see that these two statements are extremely important.  While the statement about projectives is relatively simple - it's essentially a consequence of the universal property of free modules - the fact about injectives is a lot more delicate; the work we just did on divisible modules was precisely so we could show this deep and important fact.  First, we show that every abelian group can be embedded into an injective abelian group.    Every abelian group is a submodule of some injective abelian group.    On the one hand, is a quotient of some free abelian group, say . Now embeds in , and thus embeds into a quotient of . By Example 4.20, is an injective abelian group, and by Corollary is an injective abelian group, since is a noetherian ring. By , any quotient of is also injective, so we have shown that embeds into an injective abelian group, say .  In fact, the proof above can be repeated over any PID: if is a PID, we can show that any -module embeds into an injective module, and in fact embeds into some number of copies of the fraction field .    We can finally show that over any ring, every module can be embedded into an injective module.    Every -module is a submodule of some injective -module.    First, by we can view as a subgroup of some injective abelian group . Let be the inclusion map and .  By , is an injective -module. Since Hom is left exact, by , preserves the inclusion , so we have an inclusion . Now consider the map   This is an -module homomorphism:   Given , so .    Given , and , so .     Moreover, if then . So is injective, and thus composing with our previous inclusion gives us an inclusion of into the injective -module . However, the inclusion is a priori only a map of abelian groups, so we should check that is indeed -linear. In order to do this, we need to be careful (at least in the case when is not commutative) with how we defined the left -module structure on in Exercise 56: this is a situation where we view as a -bimodule and as a left -module, so is a left -module via   The map we need to show is -linear is Regarding as a simple inclusion, simply views the element as an element of ; to simplify notation, we drop the : so for each is the map given by For every , and ,   so . This shows that is an inclusion of -modules.    And finally, just like we did for projectives, we can characterize injectives in terms of split short exact sequences.    An -module is injective if and only if every short exact sequence splits.    Let be an injective -module, and consider any short exact sequence Since is injective, there exists a map making   commute, and such a gives a splitting for our short exact sequence.  Conversely, suppose that every short exact sequence splits, and consider a diagram   By , embeds into some injective -module , say by the inclusion . By assumption, the short exact sequence splits, so there exists a map such that . Since is injective, we can lift through , obtaining an -module homomorphism such that   commutes. Now satisfies    commutes.    Before we move on from injective modules, let us say a word about how the story continues. The next chapter is quite beautiful, and it is a shame we have no time to discuss it in detail this semester.  We proved above that every module is a submodule of some injective module. One can even do better and talk about the smallest injective module that embeds in; this is called the injective hull of . One could describe by saying that it is the intersection of all the injective modules that contain , but this is not a very practical description. Injective hulls can also be described through the theory of essential extensions, a topic which we do not have time to discuss this semester. We leave the definition here just for fun, but we do not have the time to talk about it at length.    Let . We say is an essential extension of if every nonzero submodule intersects nontrivially, meaning . More generally, an injective map is an essential extension if is an essential extension in the sense above.    One then shows that an -module is injective if and only if it has no proper essential extensions . This proves that a maximal essential extension of is injective, and that there are no other injective modules with of . Moreover, one can show that any two maximal essential extension of are isomorphic - and thus we can talk about the maximal essential extension of , up to isomorphism, which is  But the theory of injectives, and injective hulls in particular, is much more complicated than the theory of projectives. When is a finitely generated module, we can always find a finitely generated projective (even free!) module surjecting onto ; in contrast, the injective hull might not be finitely generated - in fact, is typically not finitely generated even when is cyclic.  The story of the structure of injective modules then continues in a beautiful way. Over a noetherian ring, it turns out that every injective module can be decomposed into a direct sum of injective modules of the form , where is a prime ideal in . Moreover, the injective modules are the indecomposable injective modules, so the basic building blocks of injective modules. One can in fact compute the injective hull of any finitely generated -module very explicitly. A lot of this was proved in Eben Matlis' beautiful PhD thesis [Mat58], but sadly we do not have time for the details this semester. The details, however, are very important, for example to develop the theory of local cohomology - a topic which we will briefly mention later on.      Injective modules make exact.    The Baer Criterion tells us that a module is injective if and only if a map from an ideal to can be extended to all of .    In a domain injective modules are divisible and in a PID divisible modules are injective.    Every -module is a submodule of an injective module.     "
},
{
  "id": "sec-injective-2",
  "level": "2",
  "url": "sec-injective.html#sec-injective-2",
  "type": "Reminders and Recollections",
  "number": "4.2",
  "title": "",
  "body": "     "
},
{
  "id": "def-4.14",
  "level": "2",
  "url": "sec-injective.html#def-4.14",
  "type": "Definition",
  "number": "4.14",
  "title": "Injective Module.",
  "body": "Injective Module   An -module is injective if given an injective -module homomorphism and an -module homomorphism , there exist an -module homomorphism such that   commutes.   "
},
{
  "id": "thm-4.15",
  "level": "2",
  "url": "sec-injective.html#thm-4.15",
  "type": "Theorem",
  "number": "4.15",
  "title": "",
  "body": "  An -module is injective if and only if is exact, meaning that for every short exact sequence we get an exact sequence     By , is left exact, so for any short exact sequence we get an exact sequence   So the content of the theorem is that is injective if and only if for every injective -module homomorphism , the induced map is surjective. Now notice that is surjective if and only if every lifts to some , meaning   commutes. That is precisely what we want for to be injective.   "
},
{
  "id": "lem-4.16",
  "level": "2",
  "url": "sec-injective.html#lem-4.16",
  "type": "Lemma",
  "number": "4.16",
  "title": "",
  "body": "  Given any family of injective modules, is injective.    Let be the projection onto the th factor. Given any diagram   the fact that is injective gives us -module homomorphisms such that   commutes for each . Now the -module homomorphism makes the diagram   commute, so is injective.   "
},
{
  "id": "lem-4.17",
  "level": "2",
  "url": "sec-injective.html#lem-4.17",
  "type": "Lemma",
  "number": "4.17",
  "title": "",
  "body": "  If is an injective -module, then so are and .    Any diagram   can be extended to a map by composing with the inclusion of the first factor. Since is injective, there exists such that   commutes. Let be the projection onto , so that . Now if we set ,       "
},
{
  "id": "thm-4.18",
  "level": "2",
  "url": "sec-injective.html#thm-4.18",
  "type": "Theorem",
  "number": "4.18",
  "title": "Baer Criterion.",
  "body": "Baer Criterion   An -module is injective if and only if every -module homomorphism from an ideal in can be extended to the whole ring, meaning that there exists making the diagram   commute.    On the one hand, if is injective then our condition is simply a special case of the definition of injective module. On the other hand, suppose that this condition holds, and consider any diagram   To simplify notation, let's assume our map is indeed the inclusion of the submodule , so we can write for the image of in . Consider the set   First, notice is nonempty, since . Moreover, we can partially order by setting if and . So we have a nonempty partially ordered set; let's show we can apply Zorn's Lemma to it.  Given a chain in , meaning a sequence of nested submodules and maps that extend all with , let , and define   Since all the are homomorphisms of -modules, this map is indeed a map of -modules. Moreover, is well-defined, since the whenever . By construction, this map extends all the , so we conclude that is an upper bound for our chain. Moreover, follows immediately from our construction, and since each extends , so does . We conclude that , and more generally that any chain in has an upper bound in . So Zorn's Lemma applies.  By Zorn's Lemma, has a maximal element, say . We claim that . Suppose not, and let be an element not in . One can check that is an ideal in , and that is an -module homomorphism.  By assumption, we can extend to an -module homomorphism , which we will write as as well. Now the -module homomorphism is well-defined by construction, since any satisfies , and if then . Finally, this map agrees with on , and thus it agrees with on , so and . By the maximality of , we conclude that , and thus , which is a contradiction. We conclude that . Therefore, makes the diagram   commute.   "
},
{
  "id": "def-4.21",
  "level": "2",
  "url": "sec-injective.html#def-4.21",
  "type": "Definition",
  "number": "4.19",
  "title": "Divisible Module.",
  "body": "Divisible Module   An -module is divisible if for every nonzero and every there exists such that .   "
},
{
  "id": "subsec-divisible-5",
  "level": "2",
  "url": "sec-injective.html#subsec-divisible-5",
  "type": "Remark",
  "number": "4.20",
  "title": "",
  "body": " Remark 4.22. Given , and an -module , the multiplication by map is an -module homomorphism. The module is divisible if and only if multiplication by is surjective for all nonzero .  "
},
{
  "id": "subsec-divisible-6",
  "level": "2",
  "url": "sec-injective.html#subsec-divisible-6",
  "type": "Example",
  "number": "4.21",
  "title": "Divisible Modules.",
  "body": "Divisible Modules   The set of rational numbers , considered as a module over the ring of integers , is a divisible module. This is because for any nonzero integer , you can find a rational number such that is still a rational number.   "
},
{
  "id": "lem-4.23",
  "level": "2",
  "url": "sec-injective.html#lem-4.23",
  "type": "Lemma",
  "number": "4.22",
  "title": "Divisible Modules Closed Under Quotients.",
  "body": "Divisible Modules Closed Under Quotients   Any quotient of a divisible module is also divisible.    Let be a divisible -module and be a submodule of . Let and  . By assumption, there exists such that . The image of in is still a solution to , so indeed is divisible.   "
},
{
  "id": "thm-divisible-cps",
  "level": "2",
  "url": "sec-injective.html#thm-divisible-cps",
  "type": "Theorem",
  "number": "4.23",
  "title": "Closure Properties of Divisible Modules.",
  "body": "Closure Properties of Divisible Modules   Divisible modules are closed under taking submodules, quotients, direct sums, and localizations.   "
},
{
  "id": "lem-4.24",
  "level": "2",
  "url": "sec-injective.html#lem-4.24",
  "type": "Lemma",
  "number": "4.24",
  "title": "Injective Modules Divisible in Domains.",
  "body": "Injective Modules Divisible in Domains   Over a domain, every injective module is divisible.    Suppose that is an injective -module, where is a domain. Fix and . Since is a domain, we have for any . In particular, each element in can be written uniquely as for some . In particular, the map of -modules   is well-defined. Since is injective, we can extend this to a homomorphism . Finally, is an element such that , and is divisible.   "
},
{
  "id": "subsec-divisible-11",
  "level": "2",
  "url": "sec-injective.html#subsec-divisible-11",
  "type": "Example",
  "number": "4.25",
  "title": "Injective but not Divisible Module.",
  "body": "Injective but not Divisible Module  Example 4.25. Let be a field and . On the one hand, is not a divisible -module, since there is no such that . On the other hand, is actually an injective module over itself, although we do not have the tools to justify that this is indeed an injective -module.   "
},
{
  "id": "subsec-divisible-13",
  "level": "2",
  "url": "sec-injective.html#subsec-divisible-13",
  "type": "Exercise",
  "number": "4.26",
  "title": "Injective Modules not Closed Under Quotients.",
  "body": "Injective Modules not Closed Under Quotients Exercise 57. Let , where is a field, let be the fraction field of . The -module is divisible but not injective. "
},
{
  "id": "lem-4.26",
  "level": "2",
  "url": "sec-injective.html#lem-4.26",
  "type": "Theorem",
  "number": "4.27",
  "title": "Injective iff Divisible in PID.",
  "body": "Injective iff Divisible in PID   Let be a principal ideal domain. An -module is injective if and only it is divisible.    Given , we only need to show that divisible modules are injective. By Baer's Criterion, we only need to show that any map from an ideal to can be extended to the whole ring. So let be a divisible -module, and consider any map from an ideal to . If , we could extend our map by taking the map from to , so we might as well assume that . By assumption, for some , and since is divisible, there exists such that . Now consider the multiplication by map, For every , so extends . Therefore, by Theorem 4.18, is injective.   "
},
{
  "id": "lem-4.27",
  "level": "2",
  "url": "sec-injective.html#lem-4.27",
  "type": "Corollary",
  "number": "4.28",
  "title": "Injectives Closed Under Quotients in PIDs.",
  "body": "Injectives Closed Under Quotients in PIDs   Over a principal ideal domain, quotients of injective modules are injective.    If is injective, it is also divisible, by . Given any submodule , any , and a nonzero , there exists such that , and so this also holds in . Then is divisible, and thus injective by . Using fancy words you might learn in Commutative Algebra II, this ring is an example of a complete intersection, which is a subclass of Gorenstein rings. Moreover, - this is something you'd learn about in Commutative Algebra II. Now it turns out (and this is a nontrivial fact) that Gorenstein rings of dimension 0 are injective modules over themselves.    "
},
{
  "id": "lem-4.28",
  "level": "2",
  "url": "sec-injective.html#lem-4.28",
  "type": "Lemma",
  "number": "4.29",
  "title": "",
  "body": "  Given an injective abelian group and a ring is an injective -module.    Let . This abelian group is an -module, via   We claim that is actually an injective -module. By , it is sufficient to prove that is an exact functor. By , is naturally isomorphic to . This last functor is the composition of   On the one hand, is naturally isomorphic to the identity on -Mod, by , so it is exact. On the other hand, is an injective -module, so is exact by . The composition of exact functors is exact, and thus is exact.   "
},
{
  "id": "subsec-divisible-19",
  "level": "2",
  "url": "sec-injective.html#subsec-divisible-19",
  "type": "Example",
  "number": "4.30",
  "title": "",
  "body": " Example 4.29. Since is a divisible abelian group, by for any ring the -module is injective.  "
},
{
  "id": "lem-4.30",
  "level": "2",
  "url": "sec-injective.html#lem-4.30",
  "type": "Lemma",
  "number": "4.31",
  "title": "",
  "body": "  Every abelian group is a submodule of some injective abelian group.    On the one hand, is a quotient of some free abelian group, say . Now embeds in , and thus embeds into a quotient of . By Example 4.20, is an injective abelian group, and by Corollary is an injective abelian group, since is a noetherian ring. By , any quotient of is also injective, so we have shown that embeds into an injective abelian group, say .  In fact, the proof above can be repeated over any PID: if is a PID, we can show that any -module embeds into an injective module, and in fact embeds into some number of copies of the fraction field .   "
},
{
  "id": "thm-4.31",
  "level": "2",
  "url": "sec-injective.html#thm-4.31",
  "type": "Theorem",
  "number": "4.32",
  "title": "",
  "body": "  Every -module is a submodule of some injective -module.    First, by we can view as a subgroup of some injective abelian group . Let be the inclusion map and .  By , is an injective -module. Since Hom is left exact, by , preserves the inclusion , so we have an inclusion . Now consider the map   This is an -module homomorphism:   Given , so .    Given , and , so .     Moreover, if then . So is injective, and thus composing with our previous inclusion gives us an inclusion of into the injective -module . However, the inclusion is a priori only a map of abelian groups, so we should check that is indeed -linear. In order to do this, we need to be careful (at least in the case when is not commutative) with how we defined the left -module structure on in Exercise 56: this is a situation where we view as a -bimodule and as a left -module, so is a left -module via   The map we need to show is -linear is Regarding as a simple inclusion, simply views the element as an element of ; to simplify notation, we drop the : so for each is the map given by For every , and ,   so . This shows that is an inclusion of -modules.   "
},
{
  "id": "thm-4.32",
  "level": "2",
  "url": "sec-injective.html#thm-4.32",
  "type": "Theorem",
  "number": "4.33",
  "title": "",
  "body": "  An -module is injective if and only if every short exact sequence splits.    Let be an injective -module, and consider any short exact sequence Since is injective, there exists a map making   commute, and such a gives a splitting for our short exact sequence.  Conversely, suppose that every short exact sequence splits, and consider a diagram   By , embeds into some injective -module , say by the inclusion . By assumption, the short exact sequence splits, so there exists a map such that . Since is injective, we can lift through , obtaining an -module homomorphism such that   commutes. Now satisfies    commutes.   "
},
{
  "id": "def-4.33",
  "level": "2",
  "url": "sec-injective.html#def-4.33",
  "type": "Definition",
  "number": "4.34",
  "title": "",
  "body": "  Let . We say is an essential extension of if every nonzero submodule intersects nontrivially, meaning . More generally, an injective map is an essential extension if is an essential extension in the sense above.   "
},
{
  "id": "sec-injective-6",
  "level": "2",
  "url": "sec-injective.html#sec-injective-6",
  "type": "Summary",
  "number": "4.2",
  "title": "",
  "body": "   Injective modules make exact.    The Baer Criterion tells us that a module is injective if and only if a map from an ideal to can be extended to all of .    In a domain injective modules are divisible and in a PID divisible modules are injective.    Every -module is a submodule of an injective module.    "
},
{
  "id": "sec-flat",
  "level": "1",
  "url": "sec-flat.html",
  "type": "Section",
  "number": "4.3",
  "title": "Flat Modules",
  "body": "Flat Modules        Definition         Finally, we turn to the modules that make the tensor product exact.  Flat Module   An -module is said to be flat if is an exact functor.     Remark 4.35. By , - is right exact. Therefore, is flat if and only if for every injective -module map ,    Direct Summands of Flat Modules are Flat   Given a family of -modules , the direct sum is flat if and only if every is flat. In particular, direct summands of flat modules are flat.    Given a family of -module homomorphisms , there is an -module homomorphism which is injective if and only if every is injective.  Let be an injective -module homomorphism. There is a commutative diagram where the horizontal maps are the isomorphisms from . In particular, is injective if and only if is injective. Moreover, is injective if and only if each component is injective, meaning is injective for all .  On the one hand, is flat if and only if for every injective map , the corresponding is injective. On the other hand, all the are flat if and only if for every injective map is injective for all , or equivalently, as explained above, if is injective for any given injective map . This translates into the equivalence we want to show.    All projectives are flat.  Every Projective Module is Flat   Let be any ring. Every projective -module is flat.    First, recall that is naturally isomorphic to the identity functor, by Lemma 3.40, and thus exact (see Remark 3.11). This shows that is flat, and thus any free module, being a direct sum of copies of , must also be flat by . Finally, every projective module is a direct summand of a free module, by . Direct summands of flat modules are flat, by , so every projective module is flat.    We can test whether a given module if flat by looking at the finitely generated submodules.  Flatness and Finitely Generated Submodules   If every finitely generated submodule of is flat, then is flat.    Let be an injective map of -modules. We want to show that is injective. Suppose that . We are going to construct a finitely generated submodule , with the inclusion, and an element such that and . Once we do that, our submodule is finitely generated, and thus flat by assumption, so is injective; therefore, and thus we must have . Therefore, is injective, and we conclude that is flat.  Let's say that . In , we constructed the tensor product as a quotient of the free module on by the submodule with all the necessary relations we need to impose. This gives us a short exact sequence The fact that means we can rewrite this element as for some . This element is a linear combination of elements of finitely many . Let be all the -coordinates of those elements.  Now we take to be the finitely generated submodule of generated by and , and . Now and as desired.    The reason we needed to add in these extra elements is that a priori is not necessarily a submodule of , so we do not necessarily have in without adding in all relations that make it true.   Torsion Submodules         Torsion Submodule   Let be a domain and be an -module. The torsion submodule of is The elements of are called torsion elements , and we say that is torsion if . Finally, is torsion free if .    Closure Properties of Torsion Free Modules   Torsion free modules are closed under taking submodules, quotients, direct sums, and localizations.    Flat Implies Torision Free in Domains   If is a domain and is a flat -module, then is torsion free.    Let be the fraction field of , which is a torsion free -module. Now is a -vector space, so isomorphic to a direct sum of copies of . In particular, is torsion free as an -module. Since is flat, the inclusion induces an injective -module map and since , by , we conclude that is isomorphic to a submodule of . By , submodules of torsion free modules are also torsion free, so is torsion free.    In general, the converse does not hold.  Torsion Free but not Flat Module  Example 4.41. Let be a field and . Consider the ideal . This is a submodule of the torsion free module , and thus torsion free by . However, it is not flat. For example, when we apply to the inclusion we obtain a map of -vector spaces   This map cannot possibly be injective: is a -dimensional -vector space, while is -dimensional.   The converse does hold over a PID.  Flat iff Torsion Free in PID   If is a principal ideal domain, an -module is flat if and only if it is torsion free.     This is just a special case of .   Suppose is a torsion free finitely generated -module. The structure theorem for PIDs says that must be isomorphic to a direct sum of copies of cyclic modules. The cyclic module has torsion (all the elements are killed by ) unless . Therefore, must be isomorphic to a direct sum of copies of , and thus free. By , is projective, and by projectives are flat, so is flat.  Now let be any torsion free -module. All of the finitely generated submodules of are also torsion free by , and thus flat by what we have shown so far. By , must be flat.    Not all flat modules are projective.  Flat but not Projective Module  Example 4.43. The -module is torsion free and thus flat, by . However, is not a projective -module. Suppose by contradiction, that is a projective -module. By , must be a direct summand of a free module, say . Consider the inclusion , and pick such that the image of contains some element with a nonzero entry in the component. Now consider the projection onto the th factor. By assumption, the composition is nonzero. However, there are no nontrivial abelian group homomorphisms , contradicting the fact that is nonzero. We conclude that is not projective.   However, for finitely generated modules over a commutative noetherian local ring, every flat module is free, and thus flat, projective, and free all coincide. However, to prove that we need a little bit of commutative algebra, which we introduce in the next section.  Finally, here is a very important example: localization is flat.  Flatness of Localization   Let be a commutative ring, and a multiplicative subset of . Then is flat over .    By , tensoring with is localizing at . But localization is exact, so tensoring with is exact, and thus is a flat -module.     If is a domain then its fraction field is a flat module.            "
},
{
  "id": "sec-flat-2",
  "level": "2",
  "url": "sec-flat.html#sec-flat-2",
  "type": "Reminders and Recollections",
  "number": "4.3",
  "title": "",
  "body": "     "
},
{
  "id": "def-4.34",
  "level": "2",
  "url": "sec-flat.html#def-4.34",
  "type": "Definition",
  "number": "4.35",
  "title": "Flat Module.",
  "body": "Flat Module   An -module is said to be flat if is an exact functor.   "
},
{
  "id": "subsec-flat-5",
  "level": "2",
  "url": "sec-flat.html#subsec-flat-5",
  "type": "Remark",
  "number": "4.36",
  "title": "",
  "body": " Remark 4.35. By , - is right exact. Therefore, is flat if and only if for every injective -module map ,   "
},
{
  "id": "lem-4.36",
  "level": "2",
  "url": "sec-flat.html#lem-4.36",
  "type": "Lemma",
  "number": "4.37",
  "title": "Direct Summands of Flat Modules are Flat.",
  "body": "Direct Summands of Flat Modules are Flat   Given a family of -modules , the direct sum is flat if and only if every is flat. In particular, direct summands of flat modules are flat.    Given a family of -module homomorphisms , there is an -module homomorphism which is injective if and only if every is injective.  Let be an injective -module homomorphism. There is a commutative diagram where the horizontal maps are the isomorphisms from . In particular, is injective if and only if is injective. Moreover, is injective if and only if each component is injective, meaning is injective for all .  On the one hand, is flat if and only if for every injective map , the corresponding is injective. On the other hand, all the are flat if and only if for every injective map is injective for all , or equivalently, as explained above, if is injective for any given injective map . This translates into the equivalence we want to show.   "
},
{
  "id": "thm-4.37",
  "level": "2",
  "url": "sec-flat.html#thm-4.37",
  "type": "Theorem",
  "number": "4.38",
  "title": "Every Projective Module is Flat.",
  "body": "Every Projective Module is Flat   Let be any ring. Every projective -module is flat.    First, recall that is naturally isomorphic to the identity functor, by Lemma 3.40, and thus exact (see Remark 3.11). This shows that is flat, and thus any free module, being a direct sum of copies of , must also be flat by . Finally, every projective module is a direct summand of a free module, by . Direct summands of flat modules are flat, by , so every projective module is flat.   "
},
{
  "id": "thm-4.38",
  "level": "2",
  "url": "sec-flat.html#thm-4.38",
  "type": "Theorem",
  "number": "4.39",
  "title": "Flatness and Finitely Generated Submodules.",
  "body": "Flatness and Finitely Generated Submodules   If every finitely generated submodule of is flat, then is flat.    Let be an injective map of -modules. We want to show that is injective. Suppose that . We are going to construct a finitely generated submodule , with the inclusion, and an element such that and . Once we do that, our submodule is finitely generated, and thus flat by assumption, so is injective; therefore, and thus we must have . Therefore, is injective, and we conclude that is flat.  Let's say that . In , we constructed the tensor product as a quotient of the free module on by the submodule with all the necessary relations we need to impose. This gives us a short exact sequence The fact that means we can rewrite this element as for some . This element is a linear combination of elements of finitely many . Let be all the -coordinates of those elements.  Now we take to be the finitely generated submodule of generated by and , and . Now and as desired.   "
},
{
  "id": "def-4.39",
  "level": "2",
  "url": "sec-flat.html#def-4.39",
  "type": "Definition",
  "number": "4.40",
  "title": "Torsion Submodule.",
  "body": "Torsion Submodule   Let be a domain and be an -module. The torsion submodule of is The elements of are called torsion elements , and we say that is torsion if . Finally, is torsion free if .   "
},
{
  "id": "thm-torsion-free-cps",
  "level": "2",
  "url": "sec-flat.html#thm-torsion-free-cps",
  "type": "Theorem",
  "number": "4.41",
  "title": "Closure Properties of Torsion Free Modules.",
  "body": "Closure Properties of Torsion Free Modules   Torsion free modules are closed under taking submodules, quotients, direct sums, and localizations.   "
},
{
  "id": "lem-4.40",
  "level": "2",
  "url": "sec-flat.html#lem-4.40",
  "type": "Lemma",
  "number": "4.42",
  "title": "Flat Implies Torision Free in Domains.",
  "body": "Flat Implies Torision Free in Domains   If is a domain and is a flat -module, then is torsion free.    Let be the fraction field of , which is a torsion free -module. Now is a -vector space, so isomorphic to a direct sum of copies of . In particular, is torsion free as an -module. Since is flat, the inclusion induces an injective -module map and since , by , we conclude that is isomorphic to a submodule of . By , submodules of torsion free modules are also torsion free, so is torsion free.   "
},
{
  "id": "subsec-torsion-7",
  "level": "2",
  "url": "sec-flat.html#subsec-torsion-7",
  "type": "Example",
  "number": "4.43",
  "title": "Torsion Free but not Flat Module.",
  "body": "Torsion Free but not Flat Module  Example 4.41. Let be a field and . Consider the ideal . This is a submodule of the torsion free module , and thus torsion free by . However, it is not flat. For example, when we apply to the inclusion we obtain a map of -vector spaces   This map cannot possibly be injective: is a -dimensional -vector space, while is -dimensional.  "
},
{
  "id": "lem-4.42",
  "level": "2",
  "url": "sec-flat.html#lem-4.42",
  "type": "Theorem",
  "number": "4.44",
  "title": "Flat iff Torsion Free in PID.",
  "body": "Flat iff Torsion Free in PID   If is a principal ideal domain, an -module is flat if and only if it is torsion free.     This is just a special case of .   Suppose is a torsion free finitely generated -module. The structure theorem for PIDs says that must be isomorphic to a direct sum of copies of cyclic modules. The cyclic module has torsion (all the elements are killed by ) unless . Therefore, must be isomorphic to a direct sum of copies of , and thus free. By , is projective, and by projectives are flat, so is flat.  Now let be any torsion free -module. All of the finitely generated submodules of are also torsion free by , and thus flat by what we have shown so far. By , must be flat.   "
},
{
  "id": "subsec-torsion-11",
  "level": "2",
  "url": "sec-flat.html#subsec-torsion-11",
  "type": "Example",
  "number": "4.45",
  "title": "Flat but not Projective Module.",
  "body": "Flat but not Projective Module  Example 4.43. The -module is torsion free and thus flat, by . However, is not a projective -module. Suppose by contradiction, that is a projective -module. By , must be a direct summand of a free module, say . Consider the inclusion , and pick such that the image of contains some element with a nonzero entry in the component. Now consider the projection onto the th factor. By assumption, the composition is nonzero. However, there are no nontrivial abelian group homomorphisms , contradicting the fact that is nonzero. We conclude that is not projective.  "
},
{
  "id": "thm-4.44",
  "level": "2",
  "url": "sec-flat.html#thm-4.44",
  "type": "Theorem",
  "number": "4.46",
  "title": "Flatness of Localization.",
  "body": "Flatness of Localization   Let be a commutative ring, and a multiplicative subset of . Then is flat over .    By , tensoring with is localizing at . But localization is exact, so tensoring with is exact, and thus is a flat -module.   "
},
{
  "id": "subsec-torsion-15",
  "level": "2",
  "url": "sec-flat.html#subsec-torsion-15",
  "type": "Example",
  "number": "4.47",
  "title": "",
  "body": " If is a domain then its fraction field is a flat module.  "
},
{
  "id": "sec-flat-5",
  "level": "2",
  "url": "sec-flat.html#sec-flat-5",
  "type": "Summary",
  "number": "4.3",
  "title": "",
  "body": "       "
},
{
  "id": "commutative-local-rings",
  "level": "1",
  "url": "commutative-local-rings.html",
  "type": "Section",
  "number": "4.4",
  "title": "Commutative Local Rings",
  "body": "Commutative Local Rings  We have shown that   Over a local ring, these three notions actually coincide. To show this, we need a little bit of commutative algebra. First, some notation: when is a local ring, meaning has a unique maximal ideal , we write to denote the ring and its maximal ideal. Now note that for any -module , the module is annihilated by , so it is also a module over a ring , which is a field.  The following is a classical result in commutative algebra, known by some as Nakayama's Lemma. As noted in [Mat89, page 8], Nakayama himself claimed that this should be attributed to Krull and Azumaya, but it's not clear which of the three actually had the commutative ring statement first. So some authors (eg, Matsumura) prefer to refer to it as NAK. There are actually a range of statements, rather than just one, that go under the banner of Nakayama's Lemma a.k.a. NAK.  Theorem . Let be a local ring, and be a finitely generated module. If , then .  The theorem above is the theorem most commonly referred to as NAK. The proof involves only elementary tools, and a fun linear algebra-inspired trick called the Determinantal Trick. While we will not include the details here, they can be found in any standard Commutative Algebra book. We will however use this result to prove another statement that is also commonly referred to as NAK, which allows us to talk about minimal generating sets for finitely generated modules over local rings.  Remark 4.46. Let be any commutative ring, and consider an -module and an ideal . If , meaning that for all and all , then can be given the structure of an -module, as follows: for any and any , The fact that kills is what makes this action well-defined. The fact that is actually an -module under this action is a consequence of the fact that is an -module; checking these details is routine, and we leave them as an exercise.  Notice that the structure of as an -module is essentially the same as its structure as an -module. There are many properties of as an -module that pass onto its module structure, and typically such results are easy to check.  Here is a special case of this: if is a commutative local ring, and is an -module, then the module is killed by , and thus it is also a module over . Now notice that is a field, so is actually a vector space over the field .  Theorem 4.47. Let be a commutative local ring, and be a finitely generated module. For , Thus, any generating set for consists of at least elements.  Proof. The implication is clear. For , given such that generate , consider     Since is generated by the image of , we have . By taking the quotient by , we see that     By Theorem 4.45, and thus .  As we mentioned above, this allows us to talk about minimal generating sets.  Definition 4.48. Let be a local ring, and a finitely generated module. A set of elements is a minimal generating set of if the images of form a basis for the vector space .  Note that every finitely generated module over a local ring has a minimal generating set, that every minimal generating set has the same number of elements, and that any set of generators for contains a minimal generating set, all thanks to plain old linear algebra. In particular, we can now define the following:  Definition 4.49. Let be a finitely generated module over a commutative local ring . The minimal number of generators of , denoted ,, is the number of elements in any minimal generating set for .  We now have all the key commutative algebra ingredients needed to show that for finitely generated modules over a noetherian local ring, projective free. However, the proof follows more easily with one more homological tool we haven't developed yet, so we will hold off on proving this for now - in fact, you will soon be able to prove it easily, so this will be in the next problem set.  Exercise 58. Let be a commutative local ring, and let be a finitely presented module. Then     Kaplansky [Kap58] showed that this holds even for modules that are not necessarily finitely presented, but generated by countably many elements.  Definition 4.50. An -module is locally free if is free for every prime ideal .  Exercise 59. Let be a commutative ring, and be -modules, and be a prime ideal. Show that     Exercise 60. Let be a commutative ring, be a prime ideal, and be an -module. Let be as an -module via restriction of scalars. Then as -modules, we have an isomorphism     Exercise 61. Let be a commutative ring. Show that a homomorphism of -modules is surjective if and only if is surjective for all primes .  Exercise 62. Let be a noetherian ring, be a multiplicative set, be a finitely generated -module, and an arbitrary -module. Show that   In particular, if is prime,    Theorem 4.51. Let be a commutative noetherian ring and let be a finitely presented -module. Then     Proof. We already know that projectives are flat, by Theorem 4.37.  Suppose is flat. We claim that is flat for every prime ideal . First, note that , by Theorem 3.57; moreover, is a flat -module by Exercise 53 . Note moreover that any -module can also be viewed as an -module by extension of scalars along the canonical localization map. Now given any short exact sequence of -modules, say     tensoring with over can be done in two steps: first we view this as a short exact sequence of -modules, and tensor with , but is a flat -module, so     is exact. Then we tensor with , but this is also flat -module, so we get a short exact sequence again:     By Theorem 3.57 and Exercise 59, for each -module we have     But , by ??, so we conclude that     Thus     is exact, and is a flat -module.  So whenever is flat, is a flat -module for all primes . By Exercise must be free over for all primes , that is, is locally free.  Finally, suppose that is locally free. We want to show that is projective. So by Theorem 4.4, we need to show that for all surjective -module maps , the map is surjective. By Exercise 61 , it is enough to show that is surjective for all primes . By Exercise 62,     and     But i free, and thus projective by Theorem 4.3, so is surjective. Since this holds for all , by Exercise 61 we conclude that is surjective, and thus is projective.  Note that the noetherianity assumption is just so that finitely generated implies finitely presented; the statement is also true for a general commutative ring if instead of finitely generated modules we take finitely presented.                      "
},
{
  "id": "exe-62",
  "level": "2",
  "url": "commutative-local-rings.html#exe-62",
  "type": "Exercise",
  "number": "4.48",
  "title": "",
  "body": "Exercise 62. Let be a noetherian ring, be a multiplicative set, be a finitely generated -module, and an arbitrary -module. Show that   In particular, if is prime,   "
},
{
  "id": "commutative-local-rings-54",
  "level": "2",
  "url": "commutative-local-rings.html#commutative-local-rings-54",
  "type": "Summary",
  "number": "4.4",
  "title": "",
  "body": "                   "
},
{
  "id": "sec-proj-res",
  "level": "1",
  "url": "sec-proj-res.html",
  "type": "Section",
  "number": "5.1",
  "title": "Projective Resolutions",
  "body": "Projective Resolutions        Definition, Existence, Examples         To describe an -module , we need to know a set of generators and the relations among those generators. If we continue that process, and ask for relations among the relations (treating the relations as generators for the module of relations), and relations among the relations among the relations, and so on, we construct what is known as a free resolution for . Free resolutions play a key role in many important constructions, and encode a lot of interesting information about our module. For example, if the module came from some geometric setting, geometric information about the module gets reflected in the free resolution. Studying the resolutions of all finitely generated modules over a ring also tells us important information about the ring itself, and its singularities.  In this chapter we will introduce free resolutions, and more generally projective resolutions, as well as their injective counterpart. We will also study free resolutions in a bit more detail over commutative local noetherian rings, and the graded analogue. For more details on the basics of graded free resolutions, we recommend Irena Peeva's excellent book [Pee11].  Projective Resolution   Let be an -module. A projective resolution is a complex   where all the are projective, , and for all . We may also write a projective resolution for as an exact sequence where all the modules are projective. The resolution is free if all the are free.    You will find both these definitions in the literature, often indicating the second option as an abuse of notation. We will be a bit sloppy and consider both equivalently, since at the end of the day they contain the same information. One often uses the word acyclic to refer to a complex that is exact everywhere except at homological degree ; but we caution the reader that some authors use the word acyclic to refer to exact complexes. For that reason, we will avoid the word acyclic altogether.  Every Module has a Free Resolution   Every -module has a free resolution, and thus it has a projective resolution.    Let be an -module. We are going to construct a projective resolution quite explicitly. The first step is to find a projective module that surjects onto . In fact, we can find a free module surjecting onto , by . Now consider the kernel of that projection, say Set . There exists a free module surjecting onto , again by . Now the map satisfies .   Now the process continues analougously. We find a free module surjecting onto ker , and set   At each stage, is a surjective map, ker is the inclusion of the kernel of into , and we get short exact sequences In fact, . We can continue this process for as long as , and the resulting sequence will be a projective resolution for .    A free resolution gives us a detailed description of our module :    gives us generators for .     gives us generators for all the relations among our generators for .    The next module describes the relations among the relations among our generators. And so on.     Length of Projective Resolution   If is a projective resolution of , we say that has length if for all and . If no such exists, we say that has infinite length. If has no finite projective resolution, we say that has infinite projective dimension; otherwise, the projective dimension of is the smallest length of a projective resolution.    Projective Dimension iff Projective  A module has if and only is projective. Indeed, note that if is projective, then is a projective resolution of . On the other hand, if has a projective resolution then exactness tells us that .   Projective Resolution for over  Let us construct a free resolution for over . First, since has only one generator, we can start with the canonical surjection . Note that is generated by just one element again, so we can take But now the map is injective, so we are done, and is a free resolution for . This shows that . Also, is not projective: we showed in that is not exact. Thus .   Projective Resolution for over  Consider a field and . Let us construct a free resolution for . We can start with the canonical surjection ; the kernel is , which is cyclic, so our resolution begins with Now the kernel of is , which is again cyclic. Our resolution continues with Next, we need to compute the kernel of multiplication by ; but that is , a cyclic module, and the next step in the resolution is But now we have a repeating pattern! Our two-periodic resolution goes on forever: In fact, it turns out that . But to really justify that, we need to understand that this is a minimal free resolution.    A Brief Introduction to Graded Modules         To talk about minimal free resolutions we need some reasonable conditions to hold. For the rest of the section, all rings will be commutative, and in fact we will be focusing on two types of rings: commutative local rings or -graded algebras over fields.    When is a field, the polynomial ring can be given an -grading by setting for some . The most common -grading, also known as the standard grading, is the one where we declare for all . Once we declare the degrees of the variables, we can extend that grading to all monomials as follows:       A homogeneous element in is any -linear combination of monomials of the same degree. We write for the set of all homogeneous elements of degree , which is an abelian group under addition, and note that Note also that for all and .    More generally, a graded ring is any ring that can be decomposed in pieces of this form, meaning that The elements in are called homogeneous elements of degree . Similarly, a graded  - module is a module such that   A homomorphism of graded -modules that such that for all is a graded map of degree . Any graded map can be thought of as a map of degree by shifting degrees. We write for the graded -module with .  When is standard graded,   Note here that can be though of as a homogeneous element of any degree; one sometimes declares . An ideal in is a homogeneous ideal if it can be generated by homogeneous elements; one can show that this is equivalent to   Finally, whenever itself is homogeneous, the grading on passes onto , with   We will be concerned with finitely generated -graded -algebras with , which are of the form for some homogeneous ideal . One nice feature of such rings is that while there might be many maximal ideals, there is only one homogeneous maximal ideal, which is given by     In many ways, the behavior of such a graded ring and its unique homogeneous maximal ideal is an analogue to the behavior of a local ring and its unique maximal ideal ideal , though one always needs to provide a separate proof for the graded and local versions.   Uniqueness of Minimal Projective Resolutions         Minimal Complex   Let be either a commutative local ring or a commutative -graded -algebra with and homogeneous maximal ideal . A complex is minimal if for all .     Remark 5.8. A complex is minimal if and only if the differentials in the complex are all identically . If all the are free, fix a basis for each . The differentials can be represented by matrices, though possibly infinite. We will be primarily interested in the case of finitely generated modules over noetherian rings, which are finitely presented, so all the are finitely generated as well, and each corresponds to some finite matrix. In this case, our complex is minimal if and only if all the entries in the matrices representing are in , whatever our chosen bases are.     Let be a commutative ring. Suppose is either a local ring or an graded -algebra with and homogeneous maximal ideal . Let be a finitely generated (graded) -module. A free resolution for is a minimal complex if and only if for all the module is the free module on a minimal set of generators for , which in the graded case must be homogeneous.    Suppose there exists an such that is the free module on some non-minimal set of generators for ; so there is a basis for such that , and the images of in the vector space are linearly dependent. Then there exists , not all in , such that in . In the graded case, we can take all these coefficients to be homogeneous. At least one of these coefficients is not in , and thus it must be invertible, In the graded case, homogeneous elements not in are nonzero elements in , and thus invertible. so we can multiply by its inverse. So perhaps after reordering our elements, we get   Then is not in , so .  Now suppose that im for some . Let be a basis for , so that form a generating set for . By assumption, contains some (homogeneous, in the graded case) element that is not in . So there is an element not in . In particular, some , which we can assume without loss of generality to be . Multiplying by the inverse of , we get some such that so This is a nontrivial relation among our chosen set of generators of , which must then be non-minimal.    So to construct a minimal free resolution of , we simply take as few generators as possible in each step. Ultimately, we can talk about the minimal free resolution of . To show that, we need some definitions and a lemma.  Direct Sum of Complexes   Let and be complexes of -modules. The direct sum of and is the complex of -modules that has , with differentials given by   together with the complex maps and given by the corresponding inclusion in each homological degree.    Exercise 67. Show that the direct sum of complexes is the coproduct in the category .    The homology of a direct sum is the direct sum of the homologies.    Notice and Thus      More generally, this is true because Ch(R) is an abelian category, where all additive functors preserve direct sums.   Direct Summands in  Suppose that is a subcomplex of , and that we know that each is a direct summand of , say by . In order for to be a free summand of , we also need that the differentials of behave well with : for each , we need to check that and . This does not always hold.   Trivial Complex   A complex of -modules is trivial if it is a direct sum of complexes of the form     Trival Complex  The complex is trivial.   Trivial Complexes are Exact  Trivial complexes are exact: they are the direct sums of exact complexes, and by taking homology commutes with direct sums.     Let be either a commutative local ring or a commutative -graded -algebra with and homogeneous maximal ideal . Every (graded) complex of finitely generated (graded) free -modules that is exact everywhere must be trivial.    Since is projective, says that the short exact sequence splits, so . In fact, is the canonical projection map , and our original exact sequence breaks off as   In particular, since is trivial and homology commutes with taking direct sums of complexes, by , we conclude that is also exact everywhere. In particular, we have also shown that ker is a (graded) direct summand of the (graded) free -module . In the local case, is a projective by , and thus free by .  In the graded setting, ?? says that ker is free. So we are back at our original situation, and we can repeat the same argument repeatedly to show that our complex breaks off as the direct sum of the trivial complexes and must therefore be trivial.      Let be a complex of projective -modules, and let be an exact complex. Every -module map lifts to a map of complexes , and any two such lifts are homotopic.  Moreover, if is a commutative graded -algebra, and are finitely generated graded -modules, and are finitely generated graded -modules, and is a degree-preserving homomorphism, then the induced map of complexes is made out of degree-preserving module maps.    Since is projective and is surjective, there exists an -module homomorphism such that   commutes. Notice in fact that so . In the graded case, note that we can define by sending the elements in a homogeneous basis of to homogeneous such that .  We now proceed by induction. Suppose we have constructed such that . Since is projective, there exists a map such that   commutes. And again,   so .  We can now inductively construct our map of complexes lifting .  Now suppose we are given two such maps of complexes lifting , say and . Note that and 0 are two liftings of the zero map. We are going to show that any map lifting the zero map must be nullhomotopic, which will then imply that and are homotopic as well (essentially via the same homotopy!).  So let be a map of complexes lifting the zero map , so that the following commutes:   We will explicitly construct a nullhomotopy for by induction. First, set for all . The commutativity of the rightmost square tells us that , so   Since is projective, there exists an -module homomorphism such that   commutes, and thus . Notice also that so .  Now assume that we have constructed maps such that and . Since is projective, we can find a map such that   commutes, so . Now   So we again obtain . By induction, this process allows us to construct our homotopy .    Uniqueness of Minimal Free Resolutions   Let be a commutative ring, either a local ring or a -graded graded -algebra with and homogeneous maximal ideal . If is a minimal free resolution of , then any free resolution for is isomorphic to a direct sum of with a trivial complex. In particular, the minimal free resolution of is unique up to isomorphism.    Suppose that is another free resolution of . By , there are complex maps and that lift the identity map on . Then is a map of complexes that lifts the identity on , and thus by  must be homotopic to the identity on . Let be a homotopy between and the identity, so that for all , Since is minimal, we have and , so for all . Our first goal will be to show that is an isomorphism.  First we do the local case. Let be the matrix representing in some fixed basis for , and note that is represented by , so all the entries in must be in . Our matrix can be written as for some , so that for some . In particular, is invertible, and is an isomorphism.  In the graded case, we have to be a bit more careful: not all elements that are not in are invertible, this is only true for homogeneous elements. First, we fix a basis of homogeneous elements for with , and set id . Since our map is degree-preserving, is homogeneous for each , and so we can write as a linear combination of our basis elements using only pieces of degree . We obtain a matrix such that , and represents , meaning for all . Now all the entries of must be in, so in particular we must have for all . Moreover, since we chose our basis to have increasing degrees, whenever . Since we must also have whenever , we conclude that for . We conclude that is an upper triangular matrix. Finally, , and is invertible.  So we have shown in both cases that is an isomorphism for all . By , is in fact an isomorphism of complexes, so let be its inverse. Now we want to claim that splits as a map of complexes. Notice that so let us take to be our proposed splitting for . Note that implies that our map provides splittings for the -module maps in each degree, by , so . We just need to prove that this splitting holds as complexes, that is, that as complexes. So let , and denote the differential in by . We need to check that and .  Since is a map of complexes, , so we do get . Given , we can write for some and , since . Then since is a splitting for since by assumption since is a map of complexes since is a map of complexes since .  We conclude that , and . We have now shown that .  Finally, we are going to show that is a trivial complex. First, we claim that is free for all . We have already shown that is a (graded) direct summand of a (graded) free module. In the local case, says that is projective, and then says that must in fact be free. In the graded setting, one can show that any graded module which is a direct sum of a finitely generated graded -module is a graded free module. In both cases, is free.  Since , we have . Since and are both (graded) free resolutions for , they have the same homology: for all , and . We conclude that is exact everywhere. Finally, shows that is trivial.    Horseshoe Lemma   Consider a short exact sequence of modules Let be a projective resolution of , and be a projective resolution of . There exists a projective resolution of and maps of complexes and lifting and such that is a short exact sequence of complexes.    First, we need to introduce some general notation: given homomorphisms and with the same target, we will write for the homomorphism given by . Moreover, we will denote the differential of by , and the differential of by .  For each , set , and let and be the canonical projections. By , is projective for all . Moreover, we get short exact sequences for all . We will construct the missing differentials inductively.  Since is projective and is surjective, there exists such that   commutes. Set . The universal property of the coproduct guarantees that   commutes. By the , is surjective. By the , is exact. We then proceed by induction, and at each step we apply the base case to   where the vertical arrows are surjective because and are projective resolutions and thus exact. Notice that by construction, the image of is contained in , which guarantees that is a differential.  This inductive process allows us to build a complex of projectives and a short exact sequence of complexes Applying the , we get exact sequences for all , and thus . Moreover, we constructed so that is exact, and thus . We conclude that is a projective resolution of .     why its called that    Syzygys and Betti Numbers         Now that we know that minimal free resolutions exist and are unique (in the local and graded settings), we will take the rest of this section to briefly discuss how minimal free resolutions contain a lot of important information about our modules. For example, we want to keep track of the kernels of the differentials in a minimal free resolution.  Syzygy   Let be a commutative ring, either a local ring or an -graded -algebra with and homogeneous maximal ideal . Let be a minimal free resolution for the finitely generated (graded) -module . For each , the submodule is the th syzygy of .     For each , we have a short exact sequence But and , so we get a short exact sequence    Syzygies are indeed well-defined up to isomorphism.  Syzygy's Are Well-Defined   Syzygies are indeed well-defined up to isomorphism.    Suppose that and are two minimal free resolutions for . By , there exists an isomorphism between and , say . Since is a map of complexes, , and thus must send elements in ker into elements in . Similarly, an inverse to sends ker into ker . In each homological degree, the induced maps and are inverse, and thus isomorphisms. In the graded case, one can show that we obtain graded isomorphisms, so that the graded syzygies are also well-defined up to isomorphism.    The number of generators in each homological degree is also an important invariant.  Betti Number   Let be a commutative ring, either a local ring or an -graded -algebra with and homogeneous maximal ideal . Let be a minimal free resolution for the finitely generated (graded) -module . The th betti number of is     In the graded case, we can also talk about graded betti numbers. When is a graded module, we can write a resolution that keeps track of the grading.  Betti Table   Let be a commutative -graded graded -algebra with and homogeneous maximal ideal . Let be a graded -module. The th betti number of , counts the number of generators of in degree . We often collect the betti numbers of a module in its betti table :     0  1  2     0        1        2                 By convention, the entry corresponding to in the betti table of contains , and . This is how Macaulay2 displays betti tables.   Let and . The minimal free resolution for is   From this minimal resolution, we can read the betti numbers of :    , since is a cyclic module;     , and these three quadratic generators live in degree 2;     , and these represent linear syzygies on quadrics, and thus live in degree 3 .     To write a graded free resolution for , we choose all maps to have degree , so that the graded free modules in each degree are sums of copies of shifts of . Here is the graded free resolution of :   Notice that the graded shifts in lower homological degrees affect all the higher homological degrees as well. For example, when we write the map in degree , we only need to shift the degree of each generator by , but since our map now lands on , we have to bump up degrees from to , and write . The graded betti number of counts the number of copies of in homological degree in our resolution. So we have   We can collect the graded betti numbers of in its betti table:     0  1  2     0  1       1   3  2       Let be a field, , and consider the ideal which has two generators of degree and one of degree , so there are graded betti numbers and . The minimal free resolution for is   So the betti table of is   In fact, even if all we know is the betti numbers of , there is lots of information to we can extract about . For more about the beautiful theory of free resolutions and syzygies, see [Eis05]. For a detailed treatment of graded free resolutions, see [Pee11].           "
},
{
  "id": "sec-proj-res-2",
  "level": "2",
  "url": "sec-proj-res.html#sec-proj-res-2",
  "type": "Reminders and Recollections",
  "number": "5.1",
  "title": "",
  "body": "     "
},
{
  "id": "def-5.1",
  "level": "2",
  "url": "sec-proj-res.html#def-5.1",
  "type": "Definition",
  "number": "5.1",
  "title": "Projective Resolution.",
  "body": "Projective Resolution   Let be an -module. A projective resolution is a complex   where all the are projective, , and for all . We may also write a projective resolution for as an exact sequence where all the modules are projective. The resolution is free if all the are free.   "
},
{
  "id": "thm-5.2",
  "level": "2",
  "url": "sec-proj-res.html#thm-5.2",
  "type": "Theorem",
  "number": "5.2",
  "title": "Every Module has a Free Resolution.",
  "body": "Every Module has a Free Resolution   Every -module has a free resolution, and thus it has a projective resolution.    Let be an -module. We are going to construct a projective resolution quite explicitly. The first step is to find a projective module that surjects onto . In fact, we can find a free module surjecting onto , by . Now consider the kernel of that projection, say Set . There exists a free module surjecting onto , again by . Now the map satisfies .   Now the process continues analougously. We find a free module surjecting onto ker , and set   At each stage, is a surjective map, ker is the inclusion of the kernel of into , and we get short exact sequences In fact, . We can continue this process for as long as , and the resulting sequence will be a projective resolution for .   "
},
{
  "id": "def-5.3",
  "level": "2",
  "url": "sec-proj-res.html#def-5.3",
  "type": "Definition",
  "number": "5.3",
  "title": "Length of Projective Resolution.",
  "body": "Length of Projective Resolution   If is a projective resolution of , we say that has length if for all and . If no such exists, we say that has infinite length. If has no finite projective resolution, we say that has infinite projective dimension; otherwise, the projective dimension of is the smallest length of a projective resolution.   "
},
{
  "id": "rem-5.4",
  "level": "2",
  "url": "sec-proj-res.html#rem-5.4",
  "type": "Remark",
  "number": "5.4",
  "title": "Projective Dimension <span class=\"process-math\">\\(0\\)<\/span> iff Projective.",
  "body": "Projective Dimension iff Projective  A module has if and only is projective. Indeed, note that if is projective, then is a projective resolution of . On the other hand, if has a projective resolution then exactness tells us that .  "
},
{
  "id": "ex-5.5",
  "level": "2",
  "url": "sec-proj-res.html#ex-5.5",
  "type": "Example",
  "number": "5.5",
  "title": "Projective Resolution for <span class=\"process-math\">\\(\\mathbb{Z} \/ 2\\)<\/span> over <span class=\"process-math\">\\(\\mathbb{Z}\\)<\/span>.",
  "body": "Projective Resolution for over  Let us construct a free resolution for over . First, since has only one generator, we can start with the canonical surjection . Note that is generated by just one element again, so we can take But now the map is injective, so we are done, and is a free resolution for . This shows that . Also, is not projective: we showed in that is not exact. Thus .  "
},
{
  "id": "ex-5.6",
  "level": "2",
  "url": "sec-proj-res.html#ex-5.6",
  "type": "Example",
  "number": "5.6",
  "title": "Projective Resolution for <span class=\"process-math\">\\(k\\)<\/span> over <span class=\"process-math\">\\(k[x] \/\\left(x^{3}\\right)\\)<\/span>.",
  "body": "Projective Resolution for over  Consider a field and . Let us construct a free resolution for . We can start with the canonical surjection ; the kernel is , which is cyclic, so our resolution begins with Now the kernel of is , which is again cyclic. Our resolution continues with Next, we need to compute the kernel of multiplication by ; but that is , a cyclic module, and the next step in the resolution is But now we have a repeating pattern! Our two-periodic resolution goes on forever: In fact, it turns out that . But to really justify that, we need to understand that this is a minimal free resolution.  "
},
{
  "id": "ex-grading",
  "level": "2",
  "url": "sec-proj-res.html#ex-grading",
  "type": "Example",
  "number": "5.7",
  "title": "",
  "body": "  When is a field, the polynomial ring can be given an -grading by setting for some . The most common -grading, also known as the standard grading, is the one where we declare for all . Once we declare the degrees of the variables, we can extend that grading to all monomials as follows:    "
},
{
  "id": "def-homogeneous-elements",
  "level": "2",
  "url": "sec-proj-res.html#def-homogeneous-elements",
  "type": "Definition",
  "number": "5.8",
  "title": "",
  "body": "  A homogeneous element in is any -linear combination of monomials of the same degree. We write for the set of all homogeneous elements of degree , which is an abelian group under addition, and note that Note also that for all and .   "
},
{
  "id": "def-5.7",
  "level": "2",
  "url": "sec-proj-res.html#def-5.7",
  "type": "Definition",
  "number": "5.9",
  "title": "Minimal Complex.",
  "body": "Minimal Complex   Let be either a commutative local ring or a commutative -graded -algebra with and homogeneous maximal ideal . A complex is minimal if for all .   "
},
{
  "id": "rem-5.8",
  "level": "2",
  "url": "sec-proj-res.html#rem-5.8",
  "type": "Remark",
  "number": "5.10",
  "title": "",
  "body": " Remark 5.8. A complex is minimal if and only if the differentials in the complex are all identically . If all the are free, fix a basis for each . The differentials can be represented by matrices, though possibly infinite. We will be primarily interested in the case of finitely generated modules over noetherian rings, which are finitely presented, so all the are finitely generated as well, and each corresponds to some finite matrix. In this case, our complex is minimal if and only if all the entries in the matrices representing are in , whatever our chosen bases are.  "
},
{
  "id": "lem-5.9",
  "level": "2",
  "url": "sec-proj-res.html#lem-5.9",
  "type": "Lemma",
  "number": "5.11",
  "title": "",
  "body": "  Let be a commutative ring. Suppose is either a local ring or an graded -algebra with and homogeneous maximal ideal . Let be a finitely generated (graded) -module. A free resolution for is a minimal complex if and only if for all the module is the free module on a minimal set of generators for , which in the graded case must be homogeneous.    Suppose there exists an such that is the free module on some non-minimal set of generators for ; so there is a basis for such that , and the images of in the vector space are linearly dependent. Then there exists , not all in , such that in . In the graded case, we can take all these coefficients to be homogeneous. At least one of these coefficients is not in , and thus it must be invertible, In the graded case, homogeneous elements not in are nonzero elements in , and thus invertible. so we can multiply by its inverse. So perhaps after reordering our elements, we get   Then is not in , so .  Now suppose that im for some . Let be a basis for , so that form a generating set for . By assumption, contains some (homogeneous, in the graded case) element that is not in . So there is an element not in . In particular, some , which we can assume without loss of generality to be . Multiplying by the inverse of , we get some such that so This is a nontrivial relation among our chosen set of generators of , which must then be non-minimal.   "
},
{
  "id": "def-5.10",
  "level": "2",
  "url": "sec-proj-res.html#def-5.10",
  "type": "Definition",
  "number": "5.12",
  "title": "Direct Sum of Complexes.",
  "body": "Direct Sum of Complexes   Let and be complexes of -modules. The direct sum of and is the complex of -modules that has , with differentials given by   together with the complex maps and given by the corresponding inclusion in each homological degree.   "
},
{
  "id": "exe-67",
  "level": "2",
  "url": "sec-proj-res.html#exe-67",
  "type": "Exercise",
  "number": "5.13",
  "title": "",
  "body": "Exercise 67. Show that the direct sum of complexes is the coproduct in the category . "
},
{
  "id": "rem-5.11",
  "level": "2",
  "url": "sec-proj-res.html#rem-5.11",
  "type": "Proposition",
  "number": "5.14",
  "title": "",
  "body": "  The homology of a direct sum is the direct sum of the homologies.    Notice and Thus    "
},
{
  "id": "subsec-unique-minimal-10",
  "level": "2",
  "url": "sec-proj-res.html#subsec-unique-minimal-10",
  "type": "Remark",
  "number": "5.15",
  "title": "",
  "body": " More generally, this is true because Ch(R) is an abelian category, where all additive functors preserve direct sums.  "
},
{
  "id": "rem-5.12",
  "level": "2",
  "url": "sec-proj-res.html#rem-5.12",
  "type": "Remark",
  "number": "5.16",
  "title": "Direct Summands in <span class=\"process-math\">\\(Ch(R)\\)<\/span>.",
  "body": "Direct Summands in  Suppose that is a subcomplex of , and that we know that each is a direct summand of , say by . In order for to be a free summand of , we also need that the differentials of behave well with : for each , we need to check that and . This does not always hold.  "
},
{
  "id": "def-5.13",
  "level": "2",
  "url": "sec-proj-res.html#def-5.13",
  "type": "Definition",
  "number": "5.17",
  "title": "Trivial Complex.",
  "body": "Trivial Complex   A complex of -modules is trivial if it is a direct sum of complexes of the form    "
},
{
  "id": "ex-5.14",
  "level": "2",
  "url": "sec-proj-res.html#ex-5.14",
  "type": "Example",
  "number": "5.18",
  "title": "Trival Complex.",
  "body": "Trival Complex  The complex is trivial.  "
},
{
  "id": "rem-5.15",
  "level": "2",
  "url": "sec-proj-res.html#rem-5.15",
  "type": "Remark",
  "number": "5.19",
  "title": "Trivial Complexes are Exact.",
  "body": "Trivial Complexes are Exact  Trivial complexes are exact: they are the direct sums of exact complexes, and by taking homology commutes with direct sums.  "
},
{
  "id": "lem-5.16",
  "level": "2",
  "url": "sec-proj-res.html#lem-5.16",
  "type": "Lemma",
  "number": "5.20",
  "title": "",
  "body": "  Let be either a commutative local ring or a commutative -graded -algebra with and homogeneous maximal ideal . Every (graded) complex of finitely generated (graded) free -modules that is exact everywhere must be trivial.    Since is projective, says that the short exact sequence splits, so . In fact, is the canonical projection map , and our original exact sequence breaks off as   In particular, since is trivial and homology commutes with taking direct sums of complexes, by , we conclude that is also exact everywhere. In particular, we have also shown that ker is a (graded) direct summand of the (graded) free -module . In the local case, is a projective by , and thus free by .  In the graded setting, ?? says that ker is free. So we are back at our original situation, and we can repeat the same argument repeatedly to show that our complex breaks off as the direct sum of the trivial complexes and must therefore be trivial.   "
},
{
  "id": "thm-5.17",
  "level": "2",
  "url": "sec-proj-res.html#thm-5.17",
  "type": "Theorem",
  "number": "5.21",
  "title": "",
  "body": "  Let be a complex of projective -modules, and let be an exact complex. Every -module map lifts to a map of complexes , and any two such lifts are homotopic.  Moreover, if is a commutative graded -algebra, and are finitely generated graded -modules, and are finitely generated graded -modules, and is a degree-preserving homomorphism, then the induced map of complexes is made out of degree-preserving module maps.    Since is projective and is surjective, there exists an -module homomorphism such that   commutes. Notice in fact that so . In the graded case, note that we can define by sending the elements in a homogeneous basis of to homogeneous such that .  We now proceed by induction. Suppose we have constructed such that . Since is projective, there exists a map such that   commutes. And again,   so .  We can now inductively construct our map of complexes lifting .  Now suppose we are given two such maps of complexes lifting , say and . Note that and 0 are two liftings of the zero map. We are going to show that any map lifting the zero map must be nullhomotopic, which will then imply that and are homotopic as well (essentially via the same homotopy!).  So let be a map of complexes lifting the zero map , so that the following commutes:   We will explicitly construct a nullhomotopy for by induction. First, set for all . The commutativity of the rightmost square tells us that , so   Since is projective, there exists an -module homomorphism such that   commutes, and thus . Notice also that so .  Now assume that we have constructed maps such that and . Since is projective, we can find a map such that   commutes, so . Now   So we again obtain . By induction, this process allows us to construct our homotopy .   "
},
{
  "id": "thm-5.18",
  "level": "2",
  "url": "sec-proj-res.html#thm-5.18",
  "type": "Theorem",
  "number": "5.22",
  "title": "Uniqueness of Minimal Free Resolutions.",
  "body": "Uniqueness of Minimal Free Resolutions   Let be a commutative ring, either a local ring or a -graded graded -algebra with and homogeneous maximal ideal . If is a minimal free resolution of , then any free resolution for is isomorphic to a direct sum of with a trivial complex. In particular, the minimal free resolution of is unique up to isomorphism.    Suppose that is another free resolution of . By , there are complex maps and that lift the identity map on . Then is a map of complexes that lifts the identity on , and thus by  must be homotopic to the identity on . Let be a homotopy between and the identity, so that for all , Since is minimal, we have and , so for all . Our first goal will be to show that is an isomorphism.  First we do the local case. Let be the matrix representing in some fixed basis for , and note that is represented by , so all the entries in must be in . Our matrix can be written as for some , so that for some . In particular, is invertible, and is an isomorphism.  In the graded case, we have to be a bit more careful: not all elements that are not in are invertible, this is only true for homogeneous elements. First, we fix a basis of homogeneous elements for with , and set id . Since our map is degree-preserving, is homogeneous for each , and so we can write as a linear combination of our basis elements using only pieces of degree . We obtain a matrix such that , and represents , meaning for all . Now all the entries of must be in, so in particular we must have for all . Moreover, since we chose our basis to have increasing degrees, whenever . Since we must also have whenever , we conclude that for . We conclude that is an upper triangular matrix. Finally, , and is invertible.  So we have shown in both cases that is an isomorphism for all . By , is in fact an isomorphism of complexes, so let be its inverse. Now we want to claim that splits as a map of complexes. Notice that so let us take to be our proposed splitting for . Note that implies that our map provides splittings for the -module maps in each degree, by , so . We just need to prove that this splitting holds as complexes, that is, that as complexes. So let , and denote the differential in by . We need to check that and .  Since is a map of complexes, , so we do get . Given , we can write for some and , since . Then since is a splitting for since by assumption since is a map of complexes since is a map of complexes since .  We conclude that , and . We have now shown that .  Finally, we are going to show that is a trivial complex. First, we claim that is free for all . We have already shown that is a (graded) direct summand of a (graded) free module. In the local case, says that is projective, and then says that must in fact be free. In the graded setting, one can show that any graded module which is a direct sum of a finitely generated graded -module is a graded free module. In both cases, is free.  Since , we have . Since and are both (graded) free resolutions for , they have the same homology: for all , and . We conclude that is exact everywhere. Finally, shows that is trivial.   "
},
{
  "id": "thm-5.19",
  "level": "2",
  "url": "sec-proj-res.html#thm-5.19",
  "type": "Theorem",
  "number": "5.23",
  "title": "Horseshoe Lemma.",
  "body": "Horseshoe Lemma   Consider a short exact sequence of modules Let be a projective resolution of , and be a projective resolution of . There exists a projective resolution of and maps of complexes and lifting and such that is a short exact sequence of complexes.    First, we need to introduce some general notation: given homomorphisms and with the same target, we will write for the homomorphism given by . Moreover, we will denote the differential of by , and the differential of by .  For each , set , and let and be the canonical projections. By , is projective for all . Moreover, we get short exact sequences for all . We will construct the missing differentials inductively.  Since is projective and is surjective, there exists such that   commutes. Set . The universal property of the coproduct guarantees that   commutes. By the , is surjective. By the , is exact. We then proceed by induction, and at each step we apply the base case to   where the vertical arrows are surjective because and are projective resolutions and thus exact. Notice that by construction, the image of is contained in , which guarantees that is a differential.  This inductive process allows us to build a complex of projectives and a short exact sequence of complexes Applying the , we get exact sequences for all , and thus . Moreover, we constructed so that is exact, and thus . We conclude that is a projective resolution of .   "
},
{
  "id": "subsec-unique-minimal-19",
  "level": "2",
  "url": "sec-proj-res.html#subsec-unique-minimal-19",
  "type": "Remark",
  "number": "5.24",
  "title": "",
  "body": " why its called that  "
},
{
  "id": "def-5.20",
  "level": "2",
  "url": "sec-proj-res.html#def-5.20",
  "type": "Definition",
  "number": "5.25",
  "title": "Syzygy.",
  "body": "Syzygy   Let be a commutative ring, either a local ring or an -graded -algebra with and homogeneous maximal ideal . Let be a minimal free resolution for the finitely generated (graded) -module . For each , the submodule is the th syzygy of .   "
},
{
  "id": "rem-5.21",
  "level": "2",
  "url": "sec-proj-res.html#rem-5.21",
  "type": "Remark",
  "number": "5.26",
  "title": "",
  "body": " For each , we have a short exact sequence But and , so we get a short exact sequence   "
},
{
  "id": "rem-5.22",
  "level": "2",
  "url": "sec-proj-res.html#rem-5.22",
  "type": "Proposition",
  "number": "5.27",
  "title": "Syzygy’s Are Well-Defined.",
  "body": "Syzygy's Are Well-Defined   Syzygies are indeed well-defined up to isomorphism.    Suppose that and are two minimal free resolutions for . By , there exists an isomorphism between and , say . Since is a map of complexes, , and thus must send elements in ker into elements in . Similarly, an inverse to sends ker into ker . In each homological degree, the induced maps and are inverse, and thus isomorphisms. In the graded case, one can show that we obtain graded isomorphisms, so that the graded syzygies are also well-defined up to isomorphism.   "
},
{
  "id": "def-5.23",
  "level": "2",
  "url": "sec-proj-res.html#def-5.23",
  "type": "Definition",
  "number": "5.28",
  "title": "Betti Number.",
  "body": "Betti Number   Let be a commutative ring, either a local ring or an -graded -algebra with and homogeneous maximal ideal . Let be a minimal free resolution for the finitely generated (graded) -module . The th betti number of is    "
},
{
  "id": "def-5.24",
  "level": "2",
  "url": "sec-proj-res.html#def-5.24",
  "type": "Definition",
  "number": "5.29",
  "title": "Betti Table.",
  "body": "Betti Table   Let be a commutative -graded graded -algebra with and homogeneous maximal ideal . Let be a graded -module. The th betti number of , counts the number of generators of in degree . We often collect the betti numbers of a module in its betti table :     0  1  2     0        1        2                "
},
{
  "id": "ex-5.25",
  "level": "2",
  "url": "sec-proj-res.html#ex-5.25",
  "type": "Example",
  "number": "5.30",
  "title": "",
  "body": " Let and . The minimal free resolution for is   From this minimal resolution, we can read the betti numbers of :    , since is a cyclic module;     , and these three quadratic generators live in degree 2;     , and these represent linear syzygies on quadrics, and thus live in degree 3 .     To write a graded free resolution for , we choose all maps to have degree , so that the graded free modules in each degree are sums of copies of shifts of . Here is the graded free resolution of :   Notice that the graded shifts in lower homological degrees affect all the higher homological degrees as well. For example, when we write the map in degree , we only need to shift the degree of each generator by , but since our map now lands on , we have to bump up degrees from to , and write . The graded betti number of counts the number of copies of in homological degree in our resolution. So we have   We can collect the graded betti numbers of in its betti table:     0  1  2     0  1       1   3  2     "
},
{
  "id": "ex-5.26",
  "level": "2",
  "url": "sec-proj-res.html#ex-5.26",
  "type": "Example",
  "number": "5.31",
  "title": "",
  "body": " Let be a field, , and consider the ideal which has two generators of degree and one of degree , so there are graded betti numbers and . The minimal free resolution for is   So the betti table of is  "
},
{
  "id": "sec-proj-res-7",
  "level": "2",
  "url": "sec-proj-res.html#sec-proj-res-7",
  "type": "Summary",
  "number": "5.1",
  "title": "",
  "body": "       "
},
{
  "id": "sec-inj-res",
  "level": "1",
  "url": "sec-inj-res.html",
  "type": "Section",
  "number": "5.2",
  "title": "Injective Resolutions",
  "body": "Injective Resolutions  Injective resolutions are analogous to projective resolutions, but now we want to approximate our module by injectives.  Injective Resolution   Let be an -module. An injective resolution of is a complex with and for all . We may abuse notation and instead say that an injective resolution of is an exact sequence      This is the first example we have encountered where we have a cocomplex rather than a complex. Its homology should technically be referred to as cohomology , and written with superscripts:   We can construct injective resolutions in a similar fashion to how we constructed projective resolutions.  Every Module has an Injective Resolution   Every -module has an injective resolution.    By , every -module embeds into an injective module. So we start by taking an injective -module containing , and look at the cokernel of the inclusion: Now coker includes in some other injective module .   Take . Since is injective,     Notice also that coker . So we can now we continue in a similar fashion, by finding an injective module that coker embeds into.   By construction and since is injective, , and our complex is exact at . The process continues analogously.    We can again define a minimal injective resolution for as one where at each step we take the smallest injective module that coker embeds into; this is called the injective hull of . Perhaps unsurprisingly, one can show that the minimal injective resolution of a finitely generated module over a local ring is unique up to isomorphism. The analogues to the betti numbers are called Bass numbers , although now there are some major differences. When we construct a minimal free resolution, we have only to count copies of in each homological degree, while there are many different building clocks for injective modules - the injective hulls of , where ranges over the prime ideals in . So for each homological degree , we get one bass number for each prime ideal .   Let's construct a minimal free resolution for the abelian group . We start by including in , and then note that the cokernel is actually injective, by and . So embeds in itself, and our resolution stops there. So the short exact sequence is in fact a minimal injective resolution for .   "
},
{
  "id": "def-5.27",
  "level": "2",
  "url": "sec-inj-res.html#def-5.27",
  "type": "Definition",
  "number": "5.32",
  "title": "Injective Resolution.",
  "body": "Injective Resolution   Let be an -module. An injective resolution of is a complex with and for all . We may abuse notation and instead say that an injective resolution of is an exact sequence    "
},
{
  "id": "rem-5.28",
  "level": "2",
  "url": "sec-inj-res.html#rem-5.28",
  "type": "Remark",
  "number": "5.33",
  "title": "",
  "body": " This is the first example we have encountered where we have a cocomplex rather than a complex. Its homology should technically be referred to as cohomology , and written with superscripts:  "
},
{
  "id": "thm-5.29",
  "level": "2",
  "url": "sec-inj-res.html#thm-5.29",
  "type": "Theorem",
  "number": "5.34",
  "title": "Every Module has an Injective Resolution.",
  "body": "Every Module has an Injective Resolution   Every -module has an injective resolution.    By , every -module embeds into an injective module. So we start by taking an injective -module containing , and look at the cokernel of the inclusion: Now coker includes in some other injective module .   Take . Since is injective,     Notice also that coker . So we can now we continue in a similar fashion, by finding an injective module that coker embeds into.   By construction and since is injective, , and our complex is exact at . The process continues analogously.   "
},
{
  "id": "ex-5.30",
  "level": "2",
  "url": "sec-inj-res.html#ex-5.30",
  "type": "Example",
  "number": "5.35",
  "title": "",
  "body": " Let's construct a minimal free resolution for the abelian group . We start by including in , and then note that the cokernel is actually injective, by and . So embeds in itself, and our resolution stops there. So the short exact sequence is in fact a minimal injective resolution for .  "
},
{
  "id": "sec-construction",
  "level": "1",
  "url": "sec-construction.html",
  "type": "Section",
  "number": "6.1",
  "title": "The General Construction",
  "body": "The General Construction        Making Sure Derived Functors Make Sense         While Hom and tensor are not exact functors, we can measure their lack of exactness using their derived functors Ext and Tor. These are the poster child examples of what are called derived functors, which can be constructed over any abelian category provided we have enough projective or injective objects. In this chapter, we will construct derived functors over -Mod (which does have enough injectives and enough projectives), and then later we will discuss the general construction.  We start with the general construction of derived functors, although we will soon focus on concrete examples, most importantly Ext and Tor, the derived functors of hom and tensor.    Definition 6.1 (Derived functors). Let -Mod -Mod be a covariant right exact functor. The left derived functors of are a sequence of functors defined as follows:  For each -module , fix a projective resolution of , and set Given a -module homomorphism , fix projective resolutions of and of , and a map of complexes lifting . Then   Let -Mod -Mod be a covariant left exact functor. The right derived functors of are a sequence of functors defined as follows:  For each -module , fix an injective resolution of , and set Given an -module homomorphism , fix injective resolutions of and of , and a map of complexes extending . Then   Let -Mod -Mod be a contravariant left exact functor. The right derived functors of are a sequence of functors defined as follows:  For each -module , fix a projective resolution of , and set Given an -module homomorphism , fix projective resolutions for and for , and a map of complexes extending . Then   Finally, let -Mod -Mod be a contravariant right exact functor. The left derived functors of are a sequence of functors defined as follows:  For each object in , fix an injective resolution of , and set Given an arrow , fix injective resolutions and , and a map of complexes extending . Then     It is not clear a priori that this construction is well-defined, but we will soon show that is indeed the case.   Remark 6.2. If is exact, then , so for all .    Remark 6.3. If is projective, then is a projective resolution of , and thus for all . Similarly, if is injective then .     Proposition 6.4. Let Mod be a covariant right exact functor.    is well-de ned up to isomorphism for every object .     is well-de ned for every arrow .     is an additive functor for each .     .          Let and be projective resolutions of . Theorem 5.17 gives us maps of complexes and such that is homotopic to and is homotopic to . Additive functors preserve homotopies, by Remark 7.35, so and are homotopic to the corresponding identity maps. Homotopic maps induce the same map in homology, by Lemma 2.9. Therefore, and induce isomorphisms in homology.    Fix projective resolutions and of and . Any two lifts and of to are homotopic, by Theorem 5.17. Additive functors preserve homotopies, by Remark 7.35, so and are homotopic. Homotopic maps induce the same map in homology, by Lemma 2.9, so for each .    Given an arrow , fix a lift of to projective resolutions of the source and target, which exists by Theorem 5.17. Since is an additive functor, is a homomorphism for each , and thus is a homomorphism between the corresponding Hom-groups, which as we have seen is independent of our choice of .    Let be any -module and be a projective resolution of . Since is right exact, and is exact, then so is   We claim that . The last sequence above says that and .       Exercise 68. Show that the following holds for every covariant left exact functor :    is well-defined up to isomorphism.     is well-defined for every arrow .     is an additive functor for every .     .      Forcing Exactness         And now we are ready to prove the most important result about derived functors: they fix the lack of exactness of the functor we are deriving, by inducing a long exact sequence in homology from any given short exact sequence.    Theorem 6.5. Let a right exact covariant functor. Any short exact sequence induces a natural long exact sequence   Similarly, if is a left exact covariant functor, we obtain a long exact sequence   If is a contravariant left exact functor, we obtain a natural long exact sequence     We give a proof for the case of right exact functors, and the remaining cases follow by duality. We start by fixing projective resolutions of and of . By Theorem 7.58, we can choose a projective resolution of and lifts of and such that is a short exact sequence of complexes. By Proposition 6.4, does not depend on the choice of resolution, so we can compute , and from , and . Now notice that for each is projective, so is a split short exact sequence. Now additive functors preserve split short exact sequences, by Exercise 94, so is a short exact sequence for all . Then is a short exact sequence of complexes. Note, however, that this sequence is not necessarily split anymore, since the splittings at each level do not necessarily assemble into a map of complexes. The Long Exact Sequence in homology now gives us the long exact sequence we desire.  There were many choices along the way. First, we chose resolutions , and , and lifts of and . We have shown our computations of are independent of these choices. We should check, however, that the resulting connecting arrows are natural transformations that do not depend on our choice of lifts. Once a lift is fixed, we know we already have naturality from the Snake Lemma or the Long Exact Sequence in homology. It remains to check naturality. What is left to check is that given a commutative diagram with exact rows   and chosen lifts of the original short exact sequences to projective resolutions, there are maps of complexes such that   commutes. Our derived functors will preserve these maps of complexes and the commutativity of the diagram above, so we get commutative diagrams   for each . First, notice that we know that , and can be lifted to maps of complexes by Theorem 5.17, and that any two lifts of each , or are unique up to homotopy. So let's start by fixing lifts of and of , and we will construct an appropriate lift of . Since the short exact sequences   split for each , we might as well assume that and that the arrows and are given by the canonical arrows to and from the product coproduct in each homological degree. We cannot, however, assume as complexes, only that in each homological degree . The commutativity of   does imply that , so we can say that is of the form for each . Since this is a differential, we have   Similarly, all this applies to , which must be of the form   We claim that we can define for each such that is a map of complexes, meaning   Writing the corresponding products of matrices, we must have   The only nontrivial statement we want to guarantee is that . We can solve this inductively for each , and construct an appropriate inductively. Given , set   We want to construct such that commutes, assuming we have constructed   1. First, we claim that .    By induction,   Using this to replace in the equation above, we get      We showed above that . Moreover, . We conclude that   So this concludes the proof that . Therefore, must factor through the :   On the other hand, is a resolution and thus exact, so , and factors through as   via some epi . Finally, is projective, so there exists such that   commutes - this was the we were searching for.      Let Mod be a sequence of additive covariant functors, and Mod a right exact functor. Suppose that the following hold:   For every short exact sequence in Mod, we get a natural long exact sequence      is naturally isomorphic to .     for every projective and all .   Then is naturally isomorphic to for all .    We are going to show that is naturally isomorphic to by all . The statement for is one of our assumptions. When , fix an -module , and consider a short exact sequence with projective. By assumption (1), we get a long exact sequence on the , and by (2), there exist isomorphisms such that the following is a commutative diagram:   By , and by construction. The exactness of each row now implies that and are both injective. Moreover, so the image of is contained in . Define as follows: we send each to the unique such that . This is a homomorphism of -modules because so are , and . Moreover, since is an isomorphism and is injective, the composition is injective. As a consequence, is injective. On the other hand, we claim that is also surjective. Given any , since is an isomorphism there exists such that . Thus   Since is an iso, we must have . Thus we can choose such that , which implies that . Therefore, is an isomorphism.  This shows that . Now let , and consider the diagram with exact rows   By (3), , and by construction . Therefore, and are isomorphisms. Since is also an isomorphism, we conclude that . Therefore, for all .  It remains to show that these isomorphisms are natural, that is, that any -module map gives rise to commutative diagrams   We will prove this by induction on . First, note that the commutativity of the square holds for by (2). Let . Fix projectives and and short exact sequences   Since is projective and is surjective, lifts to a map . Moreover, an argument similar to the one we used above shows that we can define a map giving a commutative diagram   Now consider the following diagram:   The big square and (1) commute by definition of .  The square (3) commutes because we assumed in (1) that gives rise to long exact sequences which are natural.  The square (5) commutes because gives rise to natural long exact sequences, by Theorem 6.5.  The square (4) commutes by induction hypothesis.  Our goal is to show that (2) commutes. First, we claim that Indeed, using the commutativity of the various other parts of the diagram, we get   On the other hand, the long exact sequence for from Theorem 6.5 says that is exact, but since and is projective we have by Remark 6.3. But the exactness of says that is injective. Therefore, and 2 commutes, as desired.    There are versions of this theorem for the three remaining cases as well; we record one of them here:    Suppose Mod is a sequence of additive covariant functors and Mod a left exact functor such that   For every short exact sequence in Mod, we get a long exact sequence      is naturally isomorphic to .     for every injective and all .   Then is naturally isomorphic to for all .    We leave the proof of this and the other two cases as an exercise.           "
},
{
  "id": "sec-construction-2",
  "level": "2",
  "url": "sec-construction.html#sec-construction-2",
  "type": "Reminders and Recollections",
  "number": "6.1",
  "title": "",
  "body": "     "
},
{
  "id": "def-6.1",
  "level": "2",
  "url": "sec-construction.html#def-6.1",
  "type": "Definition",
  "number": "6.1",
  "title": "",
  "body": "  Definition 6.1 (Derived functors). Let -Mod -Mod be a covariant right exact functor. The left derived functors of are a sequence of functors defined as follows:  For each -module , fix a projective resolution of , and set Given a -module homomorphism , fix projective resolutions of and of , and a map of complexes lifting . Then   Let -Mod -Mod be a covariant left exact functor. The right derived functors of are a sequence of functors defined as follows:  For each -module , fix an injective resolution of , and set Given an -module homomorphism , fix injective resolutions of and of , and a map of complexes extending . Then   Let -Mod -Mod be a contravariant left exact functor. The right derived functors of are a sequence of functors defined as follows:  For each -module , fix a projective resolution of , and set Given an -module homomorphism , fix projective resolutions for and for , and a map of complexes extending . Then   Finally, let -Mod -Mod be a contravariant right exact functor. The left derived functors of are a sequence of functors defined as follows:  For each object in , fix an injective resolution of , and set Given an arrow , fix injective resolutions and , and a map of complexes extending . Then    "
},
{
  "id": "subsec-derived-7",
  "level": "2",
  "url": "sec-construction.html#subsec-derived-7",
  "type": "Remark",
  "number": "6.2",
  "title": "",
  "body": " Remark 6.2. If is exact, then , so for all .  "
},
{
  "id": "subsec-derived-8",
  "level": "2",
  "url": "sec-construction.html#subsec-derived-8",
  "type": "Remark",
  "number": "6.3",
  "title": "",
  "body": " Remark 6.3. If is projective, then is a projective resolution of , and thus for all . Similarly, if is injective then .  "
},
{
  "id": "prop-6.4",
  "level": "2",
  "url": "sec-construction.html#prop-6.4",
  "type": "Proposition",
  "number": "6.4",
  "title": "",
  "body": "  Proposition 6.4. Let Mod be a covariant right exact functor.    is well-de ned up to isomorphism for every object .     is well-de ned for every arrow .     is an additive functor for each .     .          Let and be projective resolutions of . Theorem 5.17 gives us maps of complexes and such that is homotopic to and is homotopic to . Additive functors preserve homotopies, by Remark 7.35, so and are homotopic to the corresponding identity maps. Homotopic maps induce the same map in homology, by Lemma 2.9. Therefore, and induce isomorphisms in homology.    Fix projective resolutions and of and . Any two lifts and of to are homotopic, by Theorem 5.17. Additive functors preserve homotopies, by Remark 7.35, so and are homotopic. Homotopic maps induce the same map in homology, by Lemma 2.9, so for each .    Given an arrow , fix a lift of to projective resolutions of the source and target, which exists by Theorem 5.17. Since is an additive functor, is a homomorphism for each , and thus is a homomorphism between the corresponding Hom-groups, which as we have seen is independent of our choice of .    Let be any -module and be a projective resolution of . Since is right exact, and is exact, then so is   We claim that . The last sequence above says that and .      "
},
{
  "id": "subsec-derived-10",
  "level": "2",
  "url": "sec-construction.html#subsec-derived-10",
  "type": "Exercise",
  "number": "6.5",
  "title": "",
  "body": "Exercise 68. Show that the following holds for every covariant left exact functor :    is well-defined up to isomorphism.     is well-defined for every arrow .     is an additive functor for every .     .    "
},
{
  "id": "thm-6.5",
  "level": "2",
  "url": "sec-construction.html#thm-6.5",
  "type": "Theorem",
  "number": "6.6",
  "title": "",
  "body": "  Theorem 6.5. Let a right exact covariant functor. Any short exact sequence induces a natural long exact sequence   Similarly, if is a left exact covariant functor, we obtain a long exact sequence   If is a contravariant left exact functor, we obtain a natural long exact sequence     We give a proof for the case of right exact functors, and the remaining cases follow by duality. We start by fixing projective resolutions of and of . By Theorem 7.58, we can choose a projective resolution of and lifts of and such that is a short exact sequence of complexes. By Proposition 6.4, does not depend on the choice of resolution, so we can compute , and from , and . Now notice that for each is projective, so is a split short exact sequence. Now additive functors preserve split short exact sequences, by Exercise 94, so is a short exact sequence for all . Then is a short exact sequence of complexes. Note, however, that this sequence is not necessarily split anymore, since the splittings at each level do not necessarily assemble into a map of complexes. The Long Exact Sequence in homology now gives us the long exact sequence we desire.  There were many choices along the way. First, we chose resolutions , and , and lifts of and . We have shown our computations of are independent of these choices. We should check, however, that the resulting connecting arrows are natural transformations that do not depend on our choice of lifts. Once a lift is fixed, we know we already have naturality from the Snake Lemma or the Long Exact Sequence in homology. It remains to check naturality. What is left to check is that given a commutative diagram with exact rows   and chosen lifts of the original short exact sequences to projective resolutions, there are maps of complexes such that   commutes. Our derived functors will preserve these maps of complexes and the commutativity of the diagram above, so we get commutative diagrams   for each . First, notice that we know that , and can be lifted to maps of complexes by Theorem 5.17, and that any two lifts of each , or are unique up to homotopy. So let's start by fixing lifts of and of , and we will construct an appropriate lift of . Since the short exact sequences   split for each , we might as well assume that and that the arrows and are given by the canonical arrows to and from the product coproduct in each homological degree. We cannot, however, assume as complexes, only that in each homological degree . The commutativity of   does imply that , so we can say that is of the form for each . Since this is a differential, we have   Similarly, all this applies to , which must be of the form   We claim that we can define for each such that is a map of complexes, meaning   Writing the corresponding products of matrices, we must have   The only nontrivial statement we want to guarantee is that . We can solve this inductively for each , and construct an appropriate inductively. Given , set   We want to construct such that commutes, assuming we have constructed   1. First, we claim that .    By induction,   Using this to replace in the equation above, we get      We showed above that . Moreover, . We conclude that   So this concludes the proof that . Therefore, must factor through the :   On the other hand, is a resolution and thus exact, so , and factors through as   via some epi . Finally, is projective, so there exists such that   commutes - this was the we were searching for.   "
},
{
  "id": "thm-6.6",
  "level": "2",
  "url": "sec-construction.html#thm-6.6",
  "type": "Theorem",
  "number": "6.7",
  "title": "",
  "body": "  Let Mod be a sequence of additive covariant functors, and Mod a right exact functor. Suppose that the following hold:   For every short exact sequence in Mod, we get a natural long exact sequence      is naturally isomorphic to .     for every projective and all .   Then is naturally isomorphic to for all .    We are going to show that is naturally isomorphic to by all . The statement for is one of our assumptions. When , fix an -module , and consider a short exact sequence with projective. By assumption (1), we get a long exact sequence on the , and by (2), there exist isomorphisms such that the following is a commutative diagram:   By , and by construction. The exactness of each row now implies that and are both injective. Moreover, so the image of is contained in . Define as follows: we send each to the unique such that . This is a homomorphism of -modules because so are , and . Moreover, since is an isomorphism and is injective, the composition is injective. As a consequence, is injective. On the other hand, we claim that is also surjective. Given any , since is an isomorphism there exists such that . Thus   Since is an iso, we must have . Thus we can choose such that , which implies that . Therefore, is an isomorphism.  This shows that . Now let , and consider the diagram with exact rows   By (3), , and by construction . Therefore, and are isomorphisms. Since is also an isomorphism, we conclude that . Therefore, for all .  It remains to show that these isomorphisms are natural, that is, that any -module map gives rise to commutative diagrams   We will prove this by induction on . First, note that the commutativity of the square holds for by (2). Let . Fix projectives and and short exact sequences   Since is projective and is surjective, lifts to a map . Moreover, an argument similar to the one we used above shows that we can define a map giving a commutative diagram   Now consider the following diagram:   The big square and (1) commute by definition of .  The square (3) commutes because we assumed in (1) that gives rise to long exact sequences which are natural.  The square (5) commutes because gives rise to natural long exact sequences, by Theorem 6.5.  The square (4) commutes by induction hypothesis.  Our goal is to show that (2) commutes. First, we claim that Indeed, using the commutativity of the various other parts of the diagram, we get   On the other hand, the long exact sequence for from Theorem 6.5 says that is exact, but since and is projective we have by Remark 6.3. But the exactness of says that is injective. Therefore, and 2 commutes, as desired.   "
},
{
  "id": "thm-6.7",
  "level": "2",
  "url": "sec-construction.html#thm-6.7",
  "type": "Theorem",
  "number": "6.8",
  "title": "",
  "body": "  Suppose Mod is a sequence of additive covariant functors and Mod a left exact functor such that   For every short exact sequence in Mod, we get a long exact sequence      is naturally isomorphic to .     for every injective and all .   Then is naturally isomorphic to for all .   "
},
{
  "id": "sec-construction-5",
  "level": "2",
  "url": "sec-construction.html#sec-construction-5",
  "type": "Summary",
  "number": "6.1",
  "title": "",
  "body": "       "
},
{
  "id": "sec-ext-tor",
  "level": "1",
  "url": "sec-ext-tor.html",
  "type": "Section",
  "number": "6.2",
  "title": "A First Look at <span class=\"process-math\">\\(\\Ext\\)<\/span> and <span class=\"process-math\">\\(\\Tor\\)<\/span>",
  "body": "A First Look at and        Double Complexes         It's time to return to study some concrete examples of derived functors: Ext, the derived functor of Hom, and Tor, the derived functor of tensor. Given two modules and , we may consider the derived functors of , and then plug in , or we may consider the derived functors of , and plug in ; it turns out that the two are naturally isomorphic, and this is the Tor functor:   More precisely, if is a projective resolution of , and is a projective resolution of ,   There are two Hom functors, each with its own derived functor: given -modules and , we may take a projective resolution of , and compute , or we could take an injective resolution of , and compute . It turns out these two completely different sounding constructions give us isomorphic -modules:   To show that for each of Ext and Tor these two seemingly unrelated definitions agree, we will need some more tools.    The suspension or shift of a complex is the complex with   Given an integer , the th suspension of is the complex     Note that there are two conventions in the literature, the other one being .    A (homological) double complex over the ring is a family of -modules together with homomorphisms of -modules and  satisfying         Remark 6.10. Note that if is a double complex, then each row and each column is a complex: if we fix is a complex with differential ; if we fix is a complex with differential .   What we defined above is a homological double complex. A cohomological double complex would have vertical and horizontal maps that go up in index, and we instead write for the module in position . Also, please note that there are different conventions in the literature for whether refers to the row or column.    Given a double complex , its total complex is the complex given by   Similarly, the product total complex of is given by      Remark 6.12. Let be a double complex with differentials and . Then     so and are indeed complexes.   In order to prove our two definitions of Ext and Tor each agree, we will need two special double complexes: the tensor and the Hom double complex.    Definition 6.13. Let be a ring and and be complexes of -modules. The tensor product double complex of and is the double complex given by taking   We call the total complex of the tensor product double complex of and the tensor product of and in , and denote it by .     Remark 6.14. The tensor product total complex has and differential for and .     Let be a ring and and be complexes of -modules. The Hom double complex of and is the double complex given by with differentials   We call the product total complex of the Hom double complex of and the (internal) Hom complex of and , and denote it by .     Remark 6.16. The Hom complex of and is the complex with differential for each .    Remark 6.17. Given and in , what is a 0 -cycle in the Hom complex ? A 0 -cycle is a sequence of maps of -modules satisfying , so the 0 -cycles are precisely the maps of complexes . Similarly, a sequence of maps is a 0-boundary if there exists a sequence of maps such that . In other words, a 0-boundary indicates a homotopy relation - if is a 0-boundary, and are homotopic maps.     Let be a map of complexes. The cone of is the complex cone with cone and differential given by      Remark 6.19. There are different conventions for the sign in front of in the definition of the differentials on the cone of . Weibel [Wei94] defines and some authors even write    All of these choices do make our proposed differential a differential (check it!). The facts below about the mapping cone are all true up to sign whatever the sign convention we follow.  Exercise 69. Let be a map of complexes. Show that giving a map of complexes cone is the same as giving a map of complexes , and a homotopy between and 0 .  Exercise 70. Let be a map of complexes. Show that is nullhomotopic if and only of factors through the canonical map .   Remark 6.20. Given any map of complexes , there is a short exact sequence determined by the canonical arrows to and from the product coproduct. The connecting arrows from the Snake Lemma are exactly induced by , so there is a long exact sequence   As a consequence, is a quasi-isomorphism if and only if cone is exact.    Remark 6.21. Given a map of complexes , we can construct a double complex from , as follows:   Note that .   Now that we have introduced all the tools we need, the last thing we need is a technical but very useful lemma.  Acyclic Assembly Lemma   Let be a double complex in Mod.   If is an upper half plane double complex with exact rows, meaning whenever , then is exact.    If is a right half plane double complex with exact columns, meaning whenever , then is exact.    If is an upper half plane double complex with exact columns, meaning whenever , then is exact.    If is a right half plane double complex with exact rows, meaning whenever , then is exact.       Notice that and by switching the indexes. Moreover, we claim that it is sufficient to show , since it implies .  To show that implies , we need some notation. Given a double complex , consider the th truncation of defined by The natural inclusion induces an isomorphism in homology for .  Suppose that is a right half plane double complex with exact columns, and assume that holds. Then still has exact columns, so by c, is exact. On the other hand, notice that up to a vertical shift, is a first quadrant double complex, and for each fixed , there are only finitely many values of and with and such that . Therefore, , so is exact. We claim that this implies that is exact. One can make this precise by saying . The point is that any element , when we write explicitly as in terms of its coordinates in each , only finitely many are nonzero. Let be the smallest such that , and fix any . Then   So is exact, and b holds.  All we have left to do is to show c, meaning that the product total complex of any upper half plane double complex with exact columns is exact. We are going to show that , and the remaining homologies follow by shifting left and right. Consider a 0 -cycle in , meaning a sequence of elements for each such that . So   We will construct for each such that , proving that .  Set when . Since , we must have . We also assumed that the columns are exact, so in particular the 0th column is exact. We can then find such that , and thus .  Now we proceed by induction. Suppose we have constructed for with the desired property that for all . Then   The last equality comes simply from the fact that . So we have shown that . Since the columns are exact, we can find such that   Equivalently,     Exercise 71. Given a double complex with for all , the horizontal differentials induce a map of complexes where denotes the double complex we obtain from by excluding the leftmost nonzero column, and , or equivalently, .   Balancing and         We are finally ready to show that the two definitions of Tor coincide.    Theorem 6.23 (Balancing Tor). Let and be -modules, and projective resolutions of and of . For all , there is an isomorphism     Consider and and the first quadrant double complex   Each and is projective and thus flat, by Theorem 4.37, so and are both exact functors. The rows and columns of our double complex are thus exact everywhere except for the 0th row and column. We can complete our double complex to make a double complex with both exact rows if we add in a column induced by the surjection :   We can also make a double complex with exact columns by adding in a row induced by :   By Lemma 6.22, and are both exact. Notice that is a map of complexes , and is a map of . By Exercise 71,   Since and are both exact, by Remark 6.20 both are quasi-isomorphisms, so that       Theorem 6.24 (Balancing Ext). Let and be -modules, and a projective resolution of and an injective resolution of . For all , there is an isomorphism     We have a surjection and an inclusion . The double cocomplex with and is a cohomological first quadrant double complex:   We proceed just like in Theorem 6.23, now considering two cohomological double complexes:   and   We obtained from by adding in a column induced by , and by adding in a row induced by . Now we notice that and   The dual of Lemma 6.22 says that and are both exact, and thus and are both quasiisomorphisms. We conclude that       Definition 6.25. Let be a ring and and be -modules. The th Tor module from to is     Notice in particular that the -module is defined only up to isomorphism.    Definition 6.26. Let be a ring and and be -modules. The th Ext module from to is     Notice in particular that the -module is only defined up to isomorphism.  Theorem 6.5 immediately gives us long exact sequences for Ext and Tor.    Let be a ring and an -module. Every short exact sequence of modules induces a long exact sequence       For every -module , every short exact sequence of -modules induces a natural long exact sequence and       Let and be -modules. For all , there are natural isomorphisms     Let be a projective resolution of . By Theorem 6.23, and . By Lemma 3.38, and are naturally isomorphic. In fact, determines an isomorphism. So consider the map which again are isomorphisms for all . Notice that these assemble into a map of complexes , since   Since all the are isomorphisms, is an isomorphism of complexes, and must then induce isomorphisms in homology. We conclude that     However, and can be dramatically different.   Let be a field and . The following is a minimal free resolution for :   To compute , we need only to apply to this resolution; one needs to be careful, though, as this is a contravariant functor. We obtain the following complex:   One can show that is multiplication by on ; moreover, we have a natural isomorphism , giving us   In particular,   In contrast, since is free. Thus .  There is an alternative description of Ext. It turns out that measures the extensions of by modulo split extensions. More precisely, an extension of by is a short exact sequence   We can put an abelian group structure on the set of isomorphism classes of extensions of by , using an operation called the Baer sum, and one can show that the resulting abelian group is isomorphic to . Via this description, the zero in corresponds to the split short exact sequence   The higher Ext modules can also be described in a similar fashion. First, we consider the set of -fold extensions of by , meaning short exact sequences of the form and the equivalence relation on this set given by the existence of a map of complexes   where the maps between the are not necessarily isomorphisms. We then define an operation on the set of equivalence classes of -fold extensions of by that is also called the Baer sum, and one shows that the resulting abelian group is isomorphic to .  Via this description, if and only if every short exact sequence splits.   Finally, here are some nice facts about Ext and Tor we leave as exercises.  Exercise 72. If and are finitely generated -modules and is a noetherian ring, then and are both finitely generated -modules for all .  Exercise 73. Let be a commutative ring and and be -modules. Consider the -module homomorphism given by multiplication by a fixed element .   Show that the map induced by is multiplication by on .    Show that is multiplication by on .    Show that the map induced by is multiplication by on .     Exercise 74 . Let be an -module.   Show that is flat if and only if for every -module .    Show that is projective if and only if for every -module .    Show that is injective if and only if for every -module .              "
},
{
  "id": "sec-ext-tor-2",
  "level": "2",
  "url": "sec-ext-tor.html#sec-ext-tor-2",
  "type": "Reminders and Recollections",
  "number": "6.2",
  "title": "",
  "body": "     "
},
{
  "id": "def-6.8",
  "level": "2",
  "url": "sec-ext-tor.html#def-6.8",
  "type": "Definition",
  "number": "6.9",
  "title": "",
  "body": "  The suspension or shift of a complex is the complex with   Given an integer , the th suspension of is the complex    "
},
{
  "id": "def-6.9",
  "level": "2",
  "url": "sec-ext-tor.html#def-6.9",
  "type": "Definition",
  "number": "6.10",
  "title": "",
  "body": "  A (homological) double complex over the ring is a family of -modules together with homomorphisms of -modules and  satisfying       "
},
{
  "id": "subsec-double-complexes-10",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-double-complexes-10",
  "type": "Remark",
  "number": "6.11",
  "title": "",
  "body": " Remark 6.10. Note that if is a double complex, then each row and each column is a complex: if we fix is a complex with differential ; if we fix is a complex with differential .  "
},
{
  "id": "def-6.11",
  "level": "2",
  "url": "sec-ext-tor.html#def-6.11",
  "type": "Definition",
  "number": "6.12",
  "title": "",
  "body": "  Given a double complex , its total complex is the complex given by   Similarly, the product total complex of is given by    "
},
{
  "id": "subsec-double-complexes-13",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-double-complexes-13",
  "type": "Remark",
  "number": "6.13",
  "title": "",
  "body": " Remark 6.12. Let be a double complex with differentials and . Then     so and are indeed complexes.  "
},
{
  "id": "def-6.13",
  "level": "2",
  "url": "sec-ext-tor.html#def-6.13",
  "type": "Definition",
  "number": "6.14",
  "title": "",
  "body": "  Definition 6.13. Let be a ring and and be complexes of -modules. The tensor product double complex of and is the double complex given by taking   We call the total complex of the tensor product double complex of and the tensor product of and in , and denote it by .   "
},
{
  "id": "subsec-double-complexes-16",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-double-complexes-16",
  "type": "Remark",
  "number": "6.15",
  "title": "",
  "body": " Remark 6.14. The tensor product total complex has and differential for and .  "
},
{
  "id": "def-6.15",
  "level": "2",
  "url": "sec-ext-tor.html#def-6.15",
  "type": "Definition",
  "number": "6.16",
  "title": "",
  "body": "  Let be a ring and and be complexes of -modules. The Hom double complex of and is the double complex given by with differentials   We call the product total complex of the Hom double complex of and the (internal) Hom complex of and , and denote it by .   "
},
{
  "id": "subsec-double-complexes-18",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-double-complexes-18",
  "type": "Remark",
  "number": "6.17",
  "title": "",
  "body": " Remark 6.16. The Hom complex of and is the complex with differential for each .  "
},
{
  "id": "subsec-double-complexes-19",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-double-complexes-19",
  "type": "Remark",
  "number": "6.18",
  "title": "",
  "body": " Remark 6.17. Given and in , what is a 0 -cycle in the Hom complex ? A 0 -cycle is a sequence of maps of -modules satisfying , so the 0 -cycles are precisely the maps of complexes . Similarly, a sequence of maps is a 0-boundary if there exists a sequence of maps such that . In other words, a 0-boundary indicates a homotopy relation - if is a 0-boundary, and are homotopic maps.  "
},
{
  "id": "def-6.18",
  "level": "2",
  "url": "sec-ext-tor.html#def-6.18",
  "type": "Definition",
  "number": "6.19",
  "title": "",
  "body": "  Let be a map of complexes. The cone of is the complex cone with cone and differential given by    "
},
{
  "id": "subsec-double-complexes-21",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-double-complexes-21",
  "type": "Remark",
  "number": "6.20",
  "title": "",
  "body": " Remark 6.19. There are different conventions for the sign in front of in the definition of the differentials on the cone of . Weibel [Wei94] defines and some authors even write   "
},
{
  "id": "subsec-double-complexes-23",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-double-complexes-23",
  "type": "Exercise",
  "number": "6.21",
  "title": "",
  "body": "Exercise 69. Let be a map of complexes. Show that giving a map of complexes cone is the same as giving a map of complexes , and a homotopy between and 0 . "
},
{
  "id": "subsec-double-complexes-24",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-double-complexes-24",
  "type": "Exercise",
  "number": "6.22",
  "title": "",
  "body": "Exercise 70. Let be a map of complexes. Show that is nullhomotopic if and only of factors through the canonical map . "
},
{
  "id": "subsec-double-complexes-25",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-double-complexes-25",
  "type": "Remark",
  "number": "6.23",
  "title": "",
  "body": " Remark 6.20. Given any map of complexes , there is a short exact sequence determined by the canonical arrows to and from the product coproduct. The connecting arrows from the Snake Lemma are exactly induced by , so there is a long exact sequence   As a consequence, is a quasi-isomorphism if and only if cone is exact.  "
},
{
  "id": "subsec-double-complexes-26",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-double-complexes-26",
  "type": "Remark",
  "number": "6.24",
  "title": "",
  "body": " Remark 6.21. Given a map of complexes , we can construct a double complex from , as follows:   Note that .  "
},
{
  "id": "lem-6.22",
  "level": "2",
  "url": "sec-ext-tor.html#lem-6.22",
  "type": "Lemma",
  "number": "6.25",
  "title": "Acyclic Assembly Lemma.",
  "body": "Acyclic Assembly Lemma   Let be a double complex in Mod.   If is an upper half plane double complex with exact rows, meaning whenever , then is exact.    If is a right half plane double complex with exact columns, meaning whenever , then is exact.    If is an upper half plane double complex with exact columns, meaning whenever , then is exact.    If is a right half plane double complex with exact rows, meaning whenever , then is exact.       Notice that and by switching the indexes. Moreover, we claim that it is sufficient to show , since it implies .  To show that implies , we need some notation. Given a double complex , consider the th truncation of defined by The natural inclusion induces an isomorphism in homology for .  Suppose that is a right half plane double complex with exact columns, and assume that holds. Then still has exact columns, so by c, is exact. On the other hand, notice that up to a vertical shift, is a first quadrant double complex, and for each fixed , there are only finitely many values of and with and such that . Therefore, , so is exact. We claim that this implies that is exact. One can make this precise by saying . The point is that any element , when we write explicitly as in terms of its coordinates in each , only finitely many are nonzero. Let be the smallest such that , and fix any . Then   So is exact, and b holds.  All we have left to do is to show c, meaning that the product total complex of any upper half plane double complex with exact columns is exact. We are going to show that , and the remaining homologies follow by shifting left and right. Consider a 0 -cycle in , meaning a sequence of elements for each such that . So   We will construct for each such that , proving that .  Set when . Since , we must have . We also assumed that the columns are exact, so in particular the 0th column is exact. We can then find such that , and thus .  Now we proceed by induction. Suppose we have constructed for with the desired property that for all . Then   The last equality comes simply from the fact that . So we have shown that . Since the columns are exact, we can find such that   Equivalently,    "
},
{
  "id": "subsec-double-complexes-29",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-double-complexes-29",
  "type": "Exercise",
  "number": "6.26",
  "title": "",
  "body": "Exercise 71. Given a double complex with for all , the horizontal differentials induce a map of complexes where denotes the double complex we obtain from by excluding the leftmost nonzero column, and , or equivalently, . "
},
{
  "id": "thm-6.23",
  "level": "2",
  "url": "sec-ext-tor.html#thm-6.23",
  "type": "Theorem",
  "number": "6.27",
  "title": "",
  "body": "  Theorem 6.23 (Balancing Tor). Let and be -modules, and projective resolutions of and of . For all , there is an isomorphism     Consider and and the first quadrant double complex   Each and is projective and thus flat, by Theorem 4.37, so and are both exact functors. The rows and columns of our double complex are thus exact everywhere except for the 0th row and column. We can complete our double complex to make a double complex with both exact rows if we add in a column induced by the surjection :   We can also make a double complex with exact columns by adding in a row induced by :   By Lemma 6.22, and are both exact. Notice that is a map of complexes , and is a map of . By Exercise 71,   Since and are both exact, by Remark 6.20 both are quasi-isomorphisms, so that    "
},
{
  "id": "thm-6.24",
  "level": "2",
  "url": "sec-ext-tor.html#thm-6.24",
  "type": "Theorem",
  "number": "6.28",
  "title": "",
  "body": "  Theorem 6.24 (Balancing Ext). Let and be -modules, and a projective resolution of and an injective resolution of . For all , there is an isomorphism     We have a surjection and an inclusion . The double cocomplex with and is a cohomological first quadrant double complex:   We proceed just like in Theorem 6.23, now considering two cohomological double complexes:   and   We obtained from by adding in a column induced by , and by adding in a row induced by . Now we notice that and   The dual of Lemma 6.22 says that and are both exact, and thus and are both quasiisomorphisms. We conclude that    "
},
{
  "id": "def-6.25",
  "level": "2",
  "url": "sec-ext-tor.html#def-6.25",
  "type": "Definition",
  "number": "6.29",
  "title": "",
  "body": "  Definition 6.25. Let be a ring and and be -modules. The th Tor module from to is    "
},
{
  "id": "def-6.26",
  "level": "2",
  "url": "sec-ext-tor.html#def-6.26",
  "type": "Definition",
  "number": "6.30",
  "title": "",
  "body": "  Definition 6.26. Let be a ring and and be -modules. The th Ext module from to is    "
},
{
  "id": "thm-6.27",
  "level": "2",
  "url": "sec-ext-tor.html#thm-6.27",
  "type": "Theorem",
  "number": "6.31",
  "title": "",
  "body": "  Let be a ring and an -module. Every short exact sequence of modules induces a long exact sequence    "
},
{
  "id": "thm-6.28",
  "level": "2",
  "url": "sec-ext-tor.html#thm-6.28",
  "type": "Theorem",
  "number": "6.32",
  "title": "",
  "body": "  For every -module , every short exact sequence of -modules induces a natural long exact sequence and    "
},
{
  "id": "thm-6.29",
  "level": "2",
  "url": "sec-ext-tor.html#thm-6.29",
  "type": "Theorem",
  "number": "6.33",
  "title": "",
  "body": "  Let and be -modules. For all , there are natural isomorphisms     Let be a projective resolution of . By Theorem 6.23, and . By Lemma 3.38, and are naturally isomorphic. In fact, determines an isomorphism. So consider the map which again are isomorphisms for all . Notice that these assemble into a map of complexes , since   Since all the are isomorphisms, is an isomorphism of complexes, and must then induce isomorphisms in homology. We conclude that    "
},
{
  "id": "subsec-balancing-15",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-balancing-15",
  "type": "Example",
  "number": "6.34",
  "title": "",
  "body": " Let be a field and . The following is a minimal free resolution for :   To compute , we need only to apply to this resolution; one needs to be careful, though, as this is a contravariant functor. We obtain the following complex:   One can show that is multiplication by on ; moreover, we have a natural isomorphism , giving us   In particular,   In contrast, since is free. Thus .  There is an alternative description of Ext. It turns out that measures the extensions of by modulo split extensions. More precisely, an extension of by is a short exact sequence   We can put an abelian group structure on the set of isomorphism classes of extensions of by , using an operation called the Baer sum, and one can show that the resulting abelian group is isomorphic to . Via this description, the zero in corresponds to the split short exact sequence   The higher Ext modules can also be described in a similar fashion. First, we consider the set of -fold extensions of by , meaning short exact sequences of the form and the equivalence relation on this set given by the existence of a map of complexes   where the maps between the are not necessarily isomorphisms. We then define an operation on the set of equivalence classes of -fold extensions of by that is also called the Baer sum, and one shows that the resulting abelian group is isomorphic to .  Via this description, if and only if every short exact sequence splits.  "
},
{
  "id": "subsec-balancing-17",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-balancing-17",
  "type": "Exercise",
  "number": "6.35",
  "title": "",
  "body": "Exercise 72. If and are finitely generated -modules and is a noetherian ring, then and are both finitely generated -modules for all . "
},
{
  "id": "subsec-balancing-18",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-balancing-18",
  "type": "Exercise",
  "number": "6.36",
  "title": "",
  "body": "Exercise 73. Let be a commutative ring and and be -modules. Consider the -module homomorphism given by multiplication by a fixed element .   Show that the map induced by is multiplication by on .    Show that is multiplication by on .    Show that the map induced by is multiplication by on .    "
},
{
  "id": "subsec-balancing-19",
  "level": "2",
  "url": "sec-ext-tor.html#subsec-balancing-19",
  "type": "Exercise",
  "number": "6.37",
  "title": "",
  "body": "Exercise 74 . Let be an -module.   Show that is flat if and only if for every -module .    Show that is projective if and only if for every -module .    Show that is injective if and only if for every -module .    "
},
{
  "id": "sec-ext-tor-5",
  "level": "2",
  "url": "sec-ext-tor.html#sec-ext-tor-5",
  "type": "Summary",
  "number": "6.2",
  "title": "",
  "body": "       "
},
{
  "id": "sec-comp-ext-tor",
  "level": "1",
  "url": "sec-comp-ext-tor.html",
  "type": "Section",
  "number": "6.3",
  "title": "Computing Ext and Tor",
  "body": "Computing Ext and Tor        The Constructions         Given -modules and , we have two possible ways to compute from the definition.  Construction 6.31. Find a projective resolution of . Applying to the resolution (not counting ), we get a complex Its homology is :   Alternatively, we can find a free resolution of , say apply , and compute the homology of the resulting complex:   Similarly, we have two possible ways to compute .  Construction 6.32. Find a projective resolution of . Applying the contravariant functor to the resolution gives us a cocomplex rather than a complex: Its homology is :   Alternatively, we can find an injective resolution of , say apply the covariant functor , which yields the cocomplex and compute the cohomology of the resulting cocomplex: .  It helps to keep a few simple ideas in mind:  If is a projective -module, then and for all and all -modules , since is a projective resolution for . This is a special case of Remark 6.3.  If is an injective -module, for all and all -modules . Free resolutions are often easier to compute explicitly, and the best path towards finding .  Relating one of our modules to other, easier modules via a short exact sequence can often simplify complicated computations.   Examples         Let's compute some examples.   Example 6.33. Let's compute . Injective resolutions are not so easy to find, so we start from a projective resolution for :     Notice that , since is not a projective -module. We found a free resolution of length 1 for , so it must be that . This immediately tells us that for all . Now we apply to our free resolutions for , and obtain   By Exercise , via the isomorphism . Since was the map , we can simplify our complex to   Notice that multiplication by 2 is an isomorphism on , so the complex above is exact, and for all .    Example 6.34. Given an integer , with the canonical projection is a free resolution for over . Notice that since is not a free -module, there is no shorter free resolution for . Now we can use this resolution to compute and for any -module . For Tor,   By Lemma 3.40, , via the map , and the map corresponds to multiplication by on . Therefore,   So Notice that , as we already knew from Proposition 6.4.  Similarly, we can compute all the Ext modules from :   By Exercise , via the map , and corresponds to multiplication by on . So   We conclude that   Notice that , as we already knew from Proposition 6.4.    Alternatively, we can compute and by looking at some long exact sequences. The long exact sequence for Tor induced by the short exact sequence is   Since is a projective -module and thus flat, for all . As a consequence, the long exact sequence above forces . So our long exact sequence really gets reduced to   Now via , and this isomorphism turns into multiplication by on , same as above. So is the kernel of multiplication by on , or . If we want to compute , we should now look at the long exact sequence   Again, is a free -module, so for all . Then for all , and our long exact sequence is actually just   So is the cokernel of . As before, notice that via the map , and corresponds to multiplication by on . We conclude that .   Exercise 75. Let be a field and .   Compute for all .    Show that for all .     Exercise 76. Let be a field, , and .   Show that is a free resolution for .    Compute for all .    Show that               "
},
{
  "id": "sec-comp-ext-tor-2",
  "level": "2",
  "url": "sec-comp-ext-tor.html#sec-comp-ext-tor-2",
  "type": "Reminders and Recollections",
  "number": "6.3",
  "title": "",
  "body": "     "
},
{
  "id": "subsec-examples-4",
  "level": "2",
  "url": "sec-comp-ext-tor.html#subsec-examples-4",
  "type": "Example",
  "number": "6.38",
  "title": "",
  "body": " Example 6.33. Let's compute . Injective resolutions are not so easy to find, so we start from a projective resolution for :     Notice that , since is not a projective -module. We found a free resolution of length 1 for , so it must be that . This immediately tells us that for all . Now we apply to our free resolutions for , and obtain   By Exercise , via the isomorphism . Since was the map , we can simplify our complex to   Notice that multiplication by 2 is an isomorphism on , so the complex above is exact, and for all .  "
},
{
  "id": "subsec-examples-5",
  "level": "2",
  "url": "sec-comp-ext-tor.html#subsec-examples-5",
  "type": "Example",
  "number": "6.39",
  "title": "",
  "body": " Example 6.34. Given an integer , with the canonical projection is a free resolution for over . Notice that since is not a free -module, there is no shorter free resolution for . Now we can use this resolution to compute and for any -module . For Tor,   By Lemma 3.40, , via the map , and the map corresponds to multiplication by on . Therefore,   So Notice that , as we already knew from Proposition 6.4.  Similarly, we can compute all the Ext modules from :   By Exercise , via the map , and corresponds to multiplication by on . So   We conclude that   Notice that , as we already knew from Proposition 6.4.  "
},
{
  "id": "subsec-examples-6",
  "level": "2",
  "url": "sec-comp-ext-tor.html#subsec-examples-6",
  "type": "Example",
  "number": "6.40",
  "title": "",
  "body": " Alternatively, we can compute and by looking at some long exact sequences. The long exact sequence for Tor induced by the short exact sequence is   Since is a projective -module and thus flat, for all . As a consequence, the long exact sequence above forces . So our long exact sequence really gets reduced to   Now via , and this isomorphism turns into multiplication by on , same as above. So is the kernel of multiplication by on , or . If we want to compute , we should now look at the long exact sequence   Again, is a free -module, so for all . Then for all , and our long exact sequence is actually just   So is the cokernel of . As before, notice that via the map , and corresponds to multiplication by on . We conclude that .  "
},
{
  "id": "subsec-examples-7",
  "level": "2",
  "url": "sec-comp-ext-tor.html#subsec-examples-7",
  "type": "Exercise",
  "number": "6.41",
  "title": "",
  "body": "Exercise 75. Let be a field and .   Compute for all .    Show that for all .    "
},
{
  "id": "subsec-examples-8",
  "level": "2",
  "url": "sec-comp-ext-tor.html#subsec-examples-8",
  "type": "Exercise",
  "number": "6.42",
  "title": "",
  "body": "Exercise 76. Let be a field, , and .   Show that is a free resolution for .    Compute for all .    Show that     "
},
{
  "id": "sec-comp-ext-tor-5",
  "level": "2",
  "url": "sec-comp-ext-tor.html#sec-comp-ext-tor-5",
  "type": "Summary",
  "number": "6.3",
  "title": "",
  "body": "       "
},
{
  "id": "sec-other-derived-functors",
  "level": "1",
  "url": "sec-other-derived-functors.html",
  "type": "Section",
  "number": "6.4",
  "title": "Other Derived Functors",
  "body": "Other Derived Functors  Group Homology         Here are some other examples of derived functors you may encounter.  Definition 6.35. category of -modules Let be a group. A (left) -module is an abelian group with an action of by additive maps on the left, meaning that     for all and all , where we write for the action of on . Given two -modules and , a morphism of -modules is a group homomorphism that is also -equivariant, meaning for all and .  The category of -modules, which we write as -mod, has objects all -modules and arrows all -module morphisms. We write instead of .  This category -mod can be identified with the category of -modules, of modules over the (noncommutative) ring , the group ring of . It can also be identified with the functor category of functors from the category to the category of abelian groups. As a reminder, gives a category with one object and arrows the elements of .  Definition 6.36. The invariant subgroup of a -module is     The coinvariant subgroup of a -module is     Exercise 77. Given any -module and , where denotes the trivial -module. In fact, there are natural isomorphisms () and () .  Thus taking coinvariants is right exact, and taking invariants is left exact.  Definition 6.37. Let be a group and a -module. The homology groups of with coefficients in are the -modules obtained via the left derived functors of the coinvariants functor:     Similarly, the cohomology groups of with coefficients in are the -modules obtained via the right derived functors of the invariants functor:     By Exercise 77,     Thus to compute group (co)homology we need a projective resolution for the trivial -module . Note also that by Proposition and .  Group (co)homology is a rich subject. For a detailed treatment of group (co)homology, see Weibel's Homological Algebra [Wei94].   Local Cohomology         Let be an ideal in a ring . The -torsion functor -Mod -Mod is defined by     which acts on maps by restriction.  Exercise 78. The -torsion functor is a left exact covariant additive functor.  The -torsion functor gives rise to local cohomology, the right derived functors of . The th local cohomology of with support on is then given by     Local cohomology was introduced by Grothendieck in a series of seminars at Harvard in 1961, which are now of course very famous. Grothendieck himself never published any notes on the subject, but Robin Hartshorne's notes of those lectures have been published.  Local cohomology is a rich subject, and we could easily spend an entire semester on it. For a modern treatment of the local cohomology and its connections, the book 24 hours of local cohomology [?] and the very nice notes by Craig Huneke, Mel Hochster, and Jack Jeffries are all excellent resources.  It turns out that local cohomology modules can be defined in a few different ways, which are in no way obviously equivalent, and those different points of view are quite helpful. For example, we can define local cohomology via the Čech complex.  Definition 6.38 (Čech complex). Let be an -module and . The Čech complex of on is given by     The Čech complex of on is given by     Example 6.39. Let's compute the Čech complex on and and an -module .   Exercise 79. a)  b) The maps between components corresponding to subsets are zero if , and \\pm 1 if .  It turns out that the cohomology of the Čech complex gives us local cohomology. For an ideal ,     so elements in the th local cohomology can be realized as equivalence classes of fractions.  Local cohomology modules also arise as a direct limit of Ext modules:     The equivalence between all these different definitions is a fundamental result in the theory of local cohomology.  Local cohomology modules play a crucial, ubiquitous role in commutative algebra. They measure many important invariants, such as dimension and depth, and are extremely useful tools for studying all sorts of topics; for example, they can be used to detect if a ring is Gorenstein (if it has finite injective dimension as a module over itself) or Cohen-Macaulay (a nice class of rings that is both very large but also very well behaved). However, local cohomology modules are typically not finitely generated. One reason for this is that injective modules are also often not finitely generated. Local cohomology is also a major reason why commutative algebraists are interested in studying injective modules.  In fact, local cohomology is almost never finitely generated. Here's a very simple example.  Example 6.40. Let be a field, and . Then has the -vector space structure     with -module structure given by     This is not a finitely generated module! Note also that every finitely generated submodule only has terms with bounded negative degree. But this is still a very nice module: it looks like upside down.       Despite being infinitely generated, local cohomology modules enjoy many finiteness properties we have gotten used to expecting from finitely generated modules. For example, over a local ring , the local cohomology modules of a finitely generated module are Artinian - but not Noetherian!  Huneke raised the question of whether local cohomology modules of noetherian rings always have finitely many associated primes, a problem which has been a very active research are in commutative algebra in the last few decades. While the answer to Huneke's question is no - as famous examples by Katzmann, Singh, and Singh and Swanson show - the local cohomology modules of finitely generated -modules over a regular ring do have finitely many associated primes.  One very important invariant we can study with local cohomology is the arithmetic rank.  Definition 6.41. Let be an ideal in a Noetherian . The arithmetic rank of is defined by     Given a variety , the arithmetic rank of its defining ideal is the minimum number of equations needed to define . It turns out that this number is difficult to study, and it is best understood via local cohomology, a thought best described by Lyubeznik:  Part of what makes the problem about the number of defining equations so interesting is that it can be very easily stated, yet a solution, in those rare cases when it is known, usually is highly nontrivial and involves a fascinating interplay of Algebra and Geometry.  The connection to local cohomology begins with the following two elementary facts about local cohomology:     Given any ideal for some -module .  So computing local cohomology modules, or deciding when they vanish, can help us find bounds on the arithmetic rank of a variety.  We close this chapter with yet another example of a derived functor of an interesting functor.  Exercise 80. Let be a domain and be its fraction field. Let denote the torsion functor.  a) Show that .  b) Show that for every short exact sequence     of -modules gives rise to an exact sequence     c) Show that the right derived functors of are and for all .           "
},
{
  "id": "subsec-local-cohomology-18",
  "level": "2",
  "url": "sec-other-derived-functors.html#subsec-local-cohomology-18",
  "type": "Exercise",
  "number": "6.43",
  "title": "",
  "body": "Exercise 79. a)  b) The maps between components corresponding to subsets are zero if , and \\pm 1 if . "
},
{
  "id": "sec-other-derived-functors-4",
  "level": "2",
  "url": "sec-other-derived-functors.html#sec-other-derived-functors-4",
  "type": "Summary",
  "number": "6.4",
  "title": "",
  "body": "       "
},
{
  "id": "ch-abelian-categories",
  "level": "1",
  "url": "ch-abelian-categories.html",
  "type": "Chapter",
  "number": "7",
  "title": "Abelian Categories",
  "body": "Abelian Categories  Monic and Epic      An arrow is monic , a monomorphism , or a mono if for all arrows     if then .    Similarly, an arrow is an epi or an epimorphism if for all arrows if then .       Here are some examples:  Monos and Epis in Set Show that in , the monos coincide with the injective functions and the epis coincide with the surjective functions.  Isomorphisms Mono and Epi Show that in any category, every isomorphism is both epi and mono.  Epi and Surjective not the Same Show that the usual inclusion is an epi in the category .  This should feel weird: it says being epi and being surjective are not the same thing. Similarly, being monic and being injective are not the same thing.  Mono and Injective not the Same Show that the canonical projection is a mono in the category of divisible abelian groups. An abelian group is divisible if for every and every positive integer there exists such that .   Monic and Epic in Poset Category Show that given any poset , in the poset category of every morphism is both monic and epic, but no nonidentity morphism has a left or right inverse.  There are some special types of objects we will want to consider.  Initial and Terminal Objects   Let be a category. An initial object in is an object such that for every object in is a singleton, meaning there exists a unique arrow . A terminal object in is an object such that for every object in is a singleton, meaning there exists a unique arrow . A zero object in is an object that is both initial and terminal.    Uniqueness of Initial and Terminal Objects Initial objects are unique up to unique isomorphism. Terminal objects are unique up to unique isomorphism.  So we can talk about the initial object, the terminal object, and the zero object, if they exist.  Initial and Terminal Objects     The empty set is initial in Set. Any singleton is terminal. Since the empty set and a singleton are not isomorphic in Set, there is no zero object in Set.    The module is the zero object in .    The trivial group is the zero object in .    In the category of rings, is the initial object, but there is no terminal object unless we allow the ring.    There are neither initial nor terminal objects in the category of fields.      "
},
{
  "id": "def-mono-epi",
  "level": "2",
  "url": "ch-abelian-categories.html#def-mono-epi",
  "type": "Definition",
  "number": "7.1",
  "title": "Monic and Epic.",
  "body": "Monic and Epic      An arrow is monic , a monomorphism , or a mono if for all arrows     if then .    Similarly, an arrow is an epi or an epimorphism if for all arrows if then .      "
},
{
  "id": "exp-mono-epi-set",
  "level": "2",
  "url": "ch-abelian-categories.html#exp-mono-epi-set",
  "type": "Exercise",
  "number": "7.2",
  "title": "Monos and Epis in Set.",
  "body": "Monos and Epis in Set Show that in , the monos coincide with the injective functions and the epis coincide with the surjective functions. "
},
{
  "id": "exp-iso-mono-epi",
  "level": "2",
  "url": "ch-abelian-categories.html#exp-iso-mono-epi",
  "type": "Exercise",
  "number": "7.3",
  "title": "Isomorphisms Mono and Epi.",
  "body": "Isomorphisms Mono and Epi Show that in any category, every isomorphism is both epi and mono. "
},
{
  "id": "exp-epi-not-surj",
  "level": "2",
  "url": "ch-abelian-categories.html#exp-epi-not-surj",
  "type": "Exercise",
  "number": "7.4",
  "title": "Epi and Surjective not the Same.",
  "body": "Epi and Surjective not the Same Show that the usual inclusion is an epi in the category . "
},
{
  "id": "exp-mono-not-inj",
  "level": "2",
  "url": "ch-abelian-categories.html#exp-mono-not-inj",
  "type": "Exercise",
  "number": "7.5",
  "title": "Mono and Injective not the Same.",
  "body": "Mono and Injective not the Same Show that the canonical projection is a mono in the category of divisible abelian groups. An abelian group is divisible if for every and every positive integer there exists such that .  "
},
{
  "id": "exp-mono-epi-poset",
  "level": "2",
  "url": "ch-abelian-categories.html#exp-mono-epi-poset",
  "type": "Exercise",
  "number": "7.6",
  "title": "Monic and Epic in Poset Category.",
  "body": "Monic and Epic in Poset Category Show that given any poset , in the poset category of every morphism is both monic and epic, but no nonidentity morphism has a left or right inverse. "
},
{
  "id": "def-initial-terminal",
  "level": "2",
  "url": "ch-abelian-categories.html#def-initial-terminal",
  "type": "Definition",
  "number": "7.7",
  "title": "Initial and Terminal Objects.",
  "body": "Initial and Terminal Objects   Let be a category. An initial object in is an object such that for every object in is a singleton, meaning there exists a unique arrow . A terminal object in is an object such that for every object in is a singleton, meaning there exists a unique arrow . A zero object in is an object that is both initial and terminal.   "
},
{
  "id": "exp-unique-initial-terminal",
  "level": "2",
  "url": "ch-abelian-categories.html#exp-unique-initial-terminal",
  "type": "Exercise",
  "number": "7.8",
  "title": "Uniqueness of Initial and Terminal Objects.",
  "body": "Uniqueness of Initial and Terminal Objects Initial objects are unique up to unique isomorphism. Terminal objects are unique up to unique isomorphism. "
},
{
  "id": "ex-initial-terminal",
  "level": "2",
  "url": "ch-abelian-categories.html#ex-initial-terminal",
  "type": "Example",
  "number": "7.9",
  "title": "Initial and Terminal Objects.",
  "body": "Initial and Terminal Objects     The empty set is initial in Set. Any singleton is terminal. Since the empty set and a singleton are not isomorphic in Set, there is no zero object in Set.    The module is the zero object in .    The trivial group is the zero object in .    In the category of rings, is the initial object, but there is no terminal object unless we allow the ring.    There are neither initial nor terminal objects in the category of fields.     "
},
{
  "id": "sec-rings",
  "level": "1",
  "url": "sec-rings.html",
  "type": "Section",
  "number": "A.1",
  "title": "Rings",
  "body": "Rings  In this class, all rings have a multiplicative identity, written as 1 or is we want to emphasize that we are referring to the ring . This is what some authors call unital rings; since for us all rings are unital, we will omit the adjective. Moreover, we will think of 1 as part of the structure of the ring, and thus require it be preserved by all natural constructions. As such, a subring of must share the same multiplicative identity with , meaning . Moreover, any ring homomorphism must preserve the multiplicative identity. To clear any possible confusion, we include below the relevant definitions.  Ring   A ring is a set equipped with two binary operations, + and , satisfying:    is an abelian group with identity element denoted 0 or .    The operation is associative, so that is a semigroup.    For all , we have     there is a multiplicative identity, written as 1 or , such that and for all .       To simplify notation, we will often drop the when writing the multiplication of two elements, so that will mean .  Note that the requirement that makes it so that the zero ring is not a ring.    Definition A.2. A ring is a commutative ring if for all we have .      Definition A.3. A ring is a division ring if and is a group under , so every nonzero has a multiplicative inverse. A field is a commutative division ring.      Definition A.4. A commutative ring is a domain, sometimes called an integral domain, if it has no zerodivisors: or . Note that in particular we reserve the word domain for commutative rings.    For some familiar examples, (the set of matrices) is a ring with the usual addition and multiplication of matrices, and are commutative rings, and are fields, and the real Hamiltonian quaternion ring is a division ring.    Definition A.5. A ring homomorphism is a function satisfying the following:     for all .     for all .     .      Under this definition, the map sending preserves addition and multiplication but not the multiplicative identities, and thus it is not a ring homomorphism.  Exercise 65. For any ring , there exists a unique homomorphism .    Definition A.6. A subset of a ring is a subring of if it is a ring under the same addition and multiplication operations and .    So under this definition, , the set of even integers, is not a subring of ; in fact, it is not even a ring, since it does not have a multiplicative identity!    Definition A.7. Let be a ring. A subset of is an ideal if:     is nonempty.     is a subgroup of .    For every and every , we have and .      The final property is often called absorption. A left ideal satisfies only absorption on the left, meaning that we require only that for all and . Similarly, a right ideal satisfies only absorption on the right, meaning that for all and .  When is a commutative ring, the left ideals, right ideals, and ideals over are all the same. However, if is not commutative, then these can be very different classes.  One key distinction between unital rings and nonunital rings is that if one requires every ring to have a 1 , as we do, then the ideals and subrings of a ring are very different creatures. In fact, the only subring of that is also an ideal is itself. The change lies in what constitutes a subring; notice that nothing has changed in the definition of ideal.   Remark A.8. Every ring has two trivial ideals: itself and the zero ideal .   A nontrivial ideal of is an ideal that and . An ideal of is a proper ideal if .  "
},
{
  "id": "def-A1",
  "level": "2",
  "url": "sec-rings.html#def-A1",
  "type": "Definition",
  "number": "A.1",
  "title": "Ring.",
  "body": "Ring   A ring is a set equipped with two binary operations, + and , satisfying:    is an abelian group with identity element denoted 0 or .    The operation is associative, so that is a semigroup.    For all , we have     there is a multiplicative identity, written as 1 or , such that and for all .      "
},
{
  "id": "def-A2",
  "level": "2",
  "url": "sec-rings.html#def-A2",
  "type": "Definition",
  "number": "A.2",
  "title": "",
  "body": "  Definition A.2. A ring is a commutative ring if for all we have .   "
},
{
  "id": "def-A3",
  "level": "2",
  "url": "sec-rings.html#def-A3",
  "type": "Definition",
  "number": "A.3",
  "title": "",
  "body": "  Definition A.3. A ring is a division ring if and is a group under , so every nonzero has a multiplicative inverse. A field is a commutative division ring.   "
},
{
  "id": "def-A4",
  "level": "2",
  "url": "sec-rings.html#def-A4",
  "type": "Definition",
  "number": "A.4",
  "title": "",
  "body": "  Definition A.4. A commutative ring is a domain, sometimes called an integral domain, if it has no zerodivisors: or . Note that in particular we reserve the word domain for commutative rings.   "
},
{
  "id": "def-A5",
  "level": "2",
  "url": "sec-rings.html#def-A5",
  "type": "Definition",
  "number": "A.5",
  "title": "",
  "body": "  Definition A.5. A ring homomorphism is a function satisfying the following:     for all .     for all .     .     "
},
{
  "id": "sec-rings-12",
  "level": "2",
  "url": "sec-rings.html#sec-rings-12",
  "type": "Exercise",
  "number": "A.6",
  "title": "",
  "body": "Exercise 65. For any ring , there exists a unique homomorphism . "
},
{
  "id": "def-A6",
  "level": "2",
  "url": "sec-rings.html#def-A6",
  "type": "Definition",
  "number": "A.7",
  "title": "",
  "body": "  Definition A.6. A subset of a ring is a subring of if it is a ring under the same addition and multiplication operations and .   "
},
{
  "id": "def-A7",
  "level": "2",
  "url": "sec-rings.html#def-A7",
  "type": "Definition",
  "number": "A.8",
  "title": "",
  "body": "  Definition A.7. Let be a ring. A subset of is an ideal if:     is nonempty.     is a subgroup of .    For every and every , we have and .     "
},
{
  "id": "sec-rings-19",
  "level": "2",
  "url": "sec-rings.html#sec-rings-19",
  "type": "Remark",
  "number": "A.9",
  "title": "",
  "body": " Remark A.8. Every ring has two trivial ideals: itself and the zero ideal .  "
},
{
  "id": "sec-modules",
  "level": "1",
  "url": "sec-modules.html",
  "type": "Section",
  "number": "A.2",
  "title": "Modules",
  "body": "Modules  You can learn more about the basic theory of (commutative) rings and -modules in any introductory algebra book, such as [DF04].    Definition A.9. Let be a ring with . A left -module is an abelian group together with an action of on , written as , such that for all and we have the following:     ,     ,     , and     .    A right -module is an abelian group together with an action of on , written as , such that for all and we have     ,     ,     , and     .      By default, we will be studying left -modules. To make the writing less heavy, we will sometimes say -module rather than left -module whenever there is no ambiguity.   Remark A.10. If is a commutative ring, then any left -module may be regarded as a right -module by setting . Likewise, any right -module may be regarded as a left -module. Thus for commutative rings, we just refer to modules, and not left or right modules.   The definitions of submodule, quotient of modules, and homomorphism of modules are very natural and easy to guess, but here they are.    If are -modules with compatible structures, we say that is a submodule of .  A map between -modules is a homomorphism of -modules if it is a homomorphism of abelian groups that preserves the -action, meaning for all and all . We sometimes refer to -module homomorphisms as -module maps, or maps of -modules. An isomorphism of -modules is a bijective homomorphism, which we really should think about as a relabeling of the elements in our module. If two modules and are isomorphic, we write .  Given an -module and a submodule , the quotient is an -module whose elements are the equivalence classes determined by the relation on given by  . One can check that this set naturally inherits an -module structure from the -module structure on , and it comes equipped with a natural canonical map induced by sending to its equivalence class.     Example A.12. The modules over a field are precisely all the -vector spaces. Linear transformations are precisely all the -module maps.   While vector spaces make for a great first example, be warned that many of the basic facts we are used to from linear algebra are often a little more subtle in commutative algebra. These differences are features, not bugs.   Example A.13. The -modules are precisely all the abelian groups.    Example A.14. When we think of the ring as a module over itself, the submodules of are precisely the ideals of .   First Isomorphism Theorem   Any -module homomorphism satisfies .    The first big noticeable difference between vector spaces and more general -modules is that while every vector space has a basis, most -modules do not.    A subset of an -module is a generating set, or a set of generators, if every element in can be written as a finite linear combination of elements in with coefficients in . A basis for an -module is a generating set for such that implies for all . An -module is free if it has a basis.     Remark A.17. Every vector space is a free module.    Remark A.18. Every free -module is isomorphic to a direct sum of copies of . Indeed, let's construct such an isomorphism for a given free -module . Given a basis for , let   The condition that is a basis for can be restated into the statement that is an isomorphism of -modules.   One of the key things that makes commutative algebra so rich and beautiful is that most modules are in fact not free. In general, every -module has a generating set - for example, itself. Given some generating set for , we can always repeat the idea above and write a presentation for , but in general the resulting map will have a nontrivial kernel. A nonzero kernel element corresponds to a relation between the generators of .   Remark A.19. Given a set of generators for an -module , any homomorphism of modules is determined by the images of the generators.   We say that a module is finitely generated if we can find a finite generating set for . The simplest finitely generated modules are the cyclic modules.   Example A.20. An -module is cyclic if it can be generated by one element. Equivalently, we can write as a quotient of by some ideal . Indeed, given a generator for , the kernel of the map induced by is some ideal . Since we assumed that generates is automatically surjective, and thus induces an isomorphism .   Similarly, if an -module has generators, we can naturally think about it as a quotient of by the submodule of relations among those generators.  "
},
{
  "id": "def-A9",
  "level": "2",
  "url": "sec-modules.html#def-A9",
  "type": "Definition",
  "number": "A.10",
  "title": "",
  "body": "  Definition A.9. Let be a ring with . A left -module is an abelian group together with an action of on , written as , such that for all and we have the following:     ,     ,     , and     .    A right -module is an abelian group together with an action of on , written as , such that for all and we have     ,     ,     , and     .     "
},
{
  "id": "sec-modules-5",
  "level": "2",
  "url": "sec-modules.html#sec-modules-5",
  "type": "Remark",
  "number": "A.11",
  "title": "",
  "body": " Remark A.10. If is a commutative ring, then any left -module may be regarded as a right -module by setting . Likewise, any right -module may be regarded as a left -module. Thus for commutative rings, we just refer to modules, and not left or right modules.  "
},
{
  "id": "def-A11",
  "level": "2",
  "url": "sec-modules.html#def-A11",
  "type": "Definition",
  "number": "A.12",
  "title": "",
  "body": "  If are -modules with compatible structures, we say that is a submodule of .  A map between -modules is a homomorphism of -modules if it is a homomorphism of abelian groups that preserves the -action, meaning for all and all . We sometimes refer to -module homomorphisms as -module maps, or maps of -modules. An isomorphism of -modules is a bijective homomorphism, which we really should think about as a relabeling of the elements in our module. If two modules and are isomorphic, we write .  Given an -module and a submodule , the quotient is an -module whose elements are the equivalence classes determined by the relation on given by  . One can check that this set naturally inherits an -module structure from the -module structure on , and it comes equipped with a natural canonical map induced by sending to its equivalence class.   "
},
{
  "id": "sec-modules-8",
  "level": "2",
  "url": "sec-modules.html#sec-modules-8",
  "type": "Example",
  "number": "A.13",
  "title": "",
  "body": " Example A.12. The modules over a field are precisely all the -vector spaces. Linear transformations are precisely all the -module maps.  "
},
{
  "id": "sec-modules-10",
  "level": "2",
  "url": "sec-modules.html#sec-modules-10",
  "type": "Example",
  "number": "A.14",
  "title": "",
  "body": " Example A.13. The -modules are precisely all the abelian groups.  "
},
{
  "id": "sec-modules-11",
  "level": "2",
  "url": "sec-modules.html#sec-modules-11",
  "type": "Example",
  "number": "A.15",
  "title": "",
  "body": " Example A.14. When we think of the ring as a module over itself, the submodules of are precisely the ideals of .  "
},
{
  "id": "thm-A15",
  "level": "2",
  "url": "sec-modules.html#thm-A15",
  "type": "Theorem",
  "number": "A.16",
  "title": "First Isomorphism Theorem.",
  "body": "First Isomorphism Theorem   Any -module homomorphism satisfies .   "
},
{
  "id": "def-A16",
  "level": "2",
  "url": "sec-modules.html#def-A16",
  "type": "Definition",
  "number": "A.17",
  "title": "",
  "body": "  A subset of an -module is a generating set, or a set of generators, if every element in can be written as a finite linear combination of elements in with coefficients in . A basis for an -module is a generating set for such that implies for all . An -module is free if it has a basis.   "
},
{
  "id": "sec-modules-15",
  "level": "2",
  "url": "sec-modules.html#sec-modules-15",
  "type": "Remark",
  "number": "A.18",
  "title": "",
  "body": " Remark A.17. Every vector space is a free module.  "
},
{
  "id": "sec-modules-16",
  "level": "2",
  "url": "sec-modules.html#sec-modules-16",
  "type": "Remark",
  "number": "A.19",
  "title": "",
  "body": " Remark A.18. Every free -module is isomorphic to a direct sum of copies of . Indeed, let's construct such an isomorphism for a given free -module . Given a basis for , let   The condition that is a basis for can be restated into the statement that is an isomorphism of -modules.  "
},
{
  "id": "sec-modules-18",
  "level": "2",
  "url": "sec-modules.html#sec-modules-18",
  "type": "Remark",
  "number": "A.20",
  "title": "",
  "body": " Remark A.19. Given a set of generators for an -module , any homomorphism of modules is determined by the images of the generators.  "
},
{
  "id": "sec-modules-20",
  "level": "2",
  "url": "sec-modules.html#sec-modules-20",
  "type": "Example",
  "number": "A.21",
  "title": "",
  "body": " Example A.20. An -module is cyclic if it can be generated by one element. Equivalently, we can write as a quotient of by some ideal . Indeed, given a generator for , the kernel of the map induced by is some ideal . Since we assumed that generates is automatically surjective, and thus induces an isomorphism .  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
