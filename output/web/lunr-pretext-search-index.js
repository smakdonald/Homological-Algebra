var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   smakdonald.github   https:\/\/smakdonald.github.io\/index.html   copyright  "
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
  "id": "convention-1",
  "level": "2",
  "url": "ch-intro.html#convention-1",
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
  "id": "convention-2",
  "level": "2",
  "url": "ch-intro.html#convention-2",
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
  "id": "example-1",
  "level": "2",
  "url": "ch-intro.html#example-1",
  "type": "Example",
  "number": "0.9",
  "title": "",
  "body": " Let be the canonical projection . The following is a short exact sequence:   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "ch-intro.html#example-2",
  "type": "Example",
  "number": "0.10",
  "title": "",
  "body": " Let be a polynomial ring over the field . The following is a short exact sequence:   The first map is multiplication by , and the second map is the canonical projection.  "
},
{
  "id": "example-3",
  "level": "2",
  "url": "ch-intro.html#example-3",
  "type": "Example",
  "number": "0.11",
  "title": "",
  "body": " Given an ideal in a ring , the inclusion map and the canonical projection give us the following short exact sequence:   "
},
{
  "id": "example-4",
  "level": "2",
  "url": "ch-intro.html#example-4",
  "type": "Example",
  "number": "0.12",
  "title": "",
  "body": " Let . The following complex is exact:     Indeed, the image and the kernel of multiplication by are both .  "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "ch-intro.html#remark-1",
  "type": "Remark",
  "number": "0.13",
  "title": "",
  "body": " The complex is exact if and only if is an isomorphism.  "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "ch-intro.html#remark-2",
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
  "id": "convention-3",
  "level": "2",
  "url": "ch-intro.html#convention-3",
  "type": "Convention",
  "number": "0.16",
  "title": "",
  "body": " The submodules are sometimes called cycles , while the submodules are sometimes called boundaries . One sometimes uses the word boundary to refer an element of (an -boundary), and the word cycle to refer to an element of (an -cycle).  "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "ch-intro.html#remark-3",
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
  "id": "example-5",
  "level": "2",
  "url": "ch-intro.html#example-5",
  "type": "Example",
  "number": "0.19",
  "title": "",
  "body": " Let . Consider the following complex: The image of multiplication by is , while the the kernel of multiplication by is . For all ,   "
},
{
  "id": "example-6",
  "level": "2",
  "url": "ch-intro.html#example-6",
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
  "body": "Categories  Definition and First Examples    We'll only use as much category theory as is necessary. Famous last words...   Roman Abramovich   A category consists of a collection of objects and arrows or morphisms between those objects. While these are often sets and some kind of functions between them, beware that this will not always be the case. We will use the words morphism and arrows interchangeably, though arrow has the advantage of reminding us we are not necessarily talking about functions.  Category   A category  consists of three different pieces of data:   a collection of objects ,     for each two objects, say and , a collection of arrows or morphisms from to , and    for each three objects , and , a composition         We will often drop the and write simply for .  These ingredients satisfy the following axioms:   The are all disjoint. In particular, if is an arrow in , we can talk about its source  and its target  as the objects such that .    For each object , there is an identity arrow  such that and for all and all .    Composition is associative : for all appropriately chosen arrows.        We sometimes write or for an arrow .   Unique Identity Morphism  Prove that every element in a category has a unique identity morphism.   Here are some categories you have likely encountered before:  Categories     The category with objects all sets and arrows all functions between sets.    The category whose objects are the collection of all groups, and whose arrows are all the homomorphisms of groups. The identity arrows are the identity homomorphisms.    The category with objects all abelian groups, and arrows the homomorphisms of abelian groups. The identity arrows are the identity homomorphisms.    The category of rings and ring homomorphisms. Contrary to what you may expect, this is not nearly as important as the next one.    The category of modules over a fixed and with -module homomorphisms. Sometimes one writes for this category, and reserve for the category of finitely generated -modules with ule homomorphisms. When is a field, the objects in the category -Mod are -vector spaces, and the arrows are linear transformations; we may instead refer to this category as Vect- .    The category Top of topological spaces and continuous functions. One may consider many variations of the categories above. Here are some variations on vector spaces:      More Categories!  Let be a field.   The collection of finite dimensional -vector spaces with all linear transformations is a category.    The collection of all -dimensional -vector spaces with all linear transformations is a category.    The collection of all -vector spaces (or -dimensional vector spaces) with linear isomorphisms is a category.    The collection of all -vector spaces (or -dimensional vector spaces) with nonzero linear transformations is not a category, since it is not closed under composition.    The collection of all -dimensional vector spaces with linear transformations of determinant 0 is not a category, since it does not have identity maps.      Here is an important variation of Set:  Pointed Set Category  There is a category Set* of pointed sets, where the objects are pairs of sets and points , and where for two pointed sets and , the morphisms from to are functions such that , with the usual composition of functions.   While the collections of objects and arrows might not actually be sets, sometimes they are.  Locally Small   A category is locally small if for all objects and in is a set. A category is small if it is locally small and the collection of all objects in is a set.    In fact, one can define a small category as one where the collection of all arrows is a set. It follows immediately that the collection of all objects is also a set, since it must be a subset of the set of arrows - for each object, there is an identity arrow.  Many important categories are at least locally small. For example, Set is locally small but not small. In a locally small category, we can now refer to its Hom-sets.  Categories where the objects are sets with some extra structure and the arrows are some kind of functions between the objects are called concrete. Not all categories are concrete.  Poset Category  Given a partially ordered set , we can regard itself as a category: the objects are the elements of , and for each and in is either a singleton if or empty if . There is only one possible way to define composition, and the transitive property of guarantees that the composition of arrows is indeed well-defined: if there is an arrow and an arrow , then and , so and thus there is a unique arrow . This category is locally small, since all nonempty Hom-sets are in fact singletons. It is in fact small, since the objects are by construction the set .   Category  For each positive integer , the category has objects and is either empty if or a singleton if . As , composition is defined in the only way possible, and things work out. This is the poset category for the poset with the usual .   Matrix Category  Fix a field . We define a category Mat- with objects all positive integers, and given two positive integers and , the -set consists of all matrices with entries in . The composition rule is given by product of matrices: given and , the composition is the matrix . For each object , its identity arrow is given by the identity matrix.   Directed Graph Category  Let be a directed graph. We can construct a category from as follows: the objects are the vertices of , and the arrows are directed paths in the graph . In this category, composition of arrows corresponds to concatenation of paths. For each object , the identity arrow corresponds to the empty path from to .    A locally small category with just one element is completely determined by its unique Hom-set; it thus consists of a set with an associative operation that has an identity element, which in this class is what we call a semigroup. Some authors prefer the term monoid.     Diagrams and Morphisms    Death is very, very terminal.   David Lange   A key insight we get from category theory is that many important concepts can be understood through diagrams. Homological algebra is in many ways the study of commutative diagrams. One way to formalize what a diagram is involves talking about functors, which we will discuss in Section 1.2; here is a more down to earth definition.  Diagram   A diagram in a category is a directed multigraph whose vertices are objects in and whose arrows\/edges are morphisms in . A commutative diagram in is a diagram in which for each pair of vertices and , any two paths from to compose to the same morphism.    Commutative Diagram  The diagram    commutes if and only if .   There are some special types of arrows we will want to consider.  Morphism Inverses   Let be any category.   An arrow is left invertible if there exists such that . In this case, we say that is the left inverse of . So is a left inverse of if the diagram   commutes.    An arrow is right invertible if there exists such that . In this case, we say that is the right inverse of . So is a right inverse of if the diagram   commutes.    An arrow is an isomorphism if there exists such that and . Unsurprisingly, such an arrow is called the inverse of .       Monic and Epic      An arrow is monic , a monomorphism , or a mono if for all arrows     if then .    Similarly, an arrow is an epi or an epimorphism if for all arrows if then .       Here are some examples:  Monos and Epis in Set  Show that in , the monos coincide with the injective functions and the epis coincide with the surjective functions.   Isomorphisms     In , , and R the isomorphisms are the morphisms that are bijective functions.    In contrast, in the isomorphisms are the homeomorphisms, which are the bijective continuous functions with continuous inverses. These are not the same thing as just the bijective continuous functions.      Isomorphisms Mono and Epi  Show that in any category, every isomorphism is both epi and mono.   Epi and Surjective not the Same  Show that the usual inclusion is an epi in the category .   This should feel weird: it says being epi and being surjective are not the same thing. Similarly, being monic and being injective are not the same thing.  Mono and Injective not the Same  Show that the canonical projection is a mono in the category of divisible abelian groups. An abelian group is divisible if for every and every positive integer there exists such that .    Monic and Epic in Poset Category  Show that given any poset , in the poset category of every morphism is both monic and epic, but no nonidentity morphism has a left or right inverse.   There are some special types of objects we will want to consider.  Initial and Terminal Objects   Let be a category. An initial object in is an object such that for every object in is a singleton, meaning there exists a unique arrow . A terminal object in is an object such that for every object in is a singleton, meaning there exists a unique arrow . A zero object in is an object that is both initial and terminal.    Uniqueness of Initial and Terminal Objects  Initial objects are unique up to unique isomorphism. Terminal objects are unique up to unique isomorphism.   So we can talk about the initial object, the terminal object, and the zero object, if they exist.  Initial and Terminal Objects     The empty set is initial in Set. Any singleton is terminal. Since the empty set and a singleton are not isomorphic in Set, there is no zero object in Set.    The module is the zero object in .    The trivial group is the zero object in .    In the category of rings, is the initial object, but there is no terminal object unless we allow the ring.    There are neither initial nor terminal objects in the category of fields.       Opposite and Subcategories    The life of this world is nothing but the harmony of opposites.   Rumi   We will now continue to follow a familiar pattern and define the related concepts one can guess should be defined.  Subcategory   A subcategory  of a category consists of a subcollection of the objects of and a subcollection of the morphisms of such that the following hold:   For every object in , the arrow is an arrow in .    For every arrow in , its source and target in are objects in .    For every pair of arrows and in such that is an arrow that makes sense in , is an arrow in .       In particular, is a category in its own right.  Subcategories  The category of finitely generated -modules with -module homomorphisms is a subcategory of .   Full Subcategory   A subcategory of is a full subcategory if includes all of the arrows in between any two objects in .    Full Subcategories     The category of abelian groups is a full subcategory of .    Since every group is a set, and every homomorphism is a function, is a subcategory of . However, not every function between two groups is a group homomorphism, so is not a full subcategory of .    The category whose objects are all sets and with arrows all bijections is a subcategory of that is not full.      Here is another way of constructing a new category out of an old one.  Opposite Category   Let be a category. The opposite category of , denoted , is a category whose objects are the objects of , and such that each arrow is the same as some arrow in . The composition of two morphisms and in is defined as the composition in .    Many objects and concepts one might want to describe are obtained from existing ones by flipping the arrows. Opposite categories give us the formal framework to talk about such things. We will often want to refer to dual notions, which will essentially mean considering the same notion in a category and in the opposite category ; in practice, this means we should flip all the arrows involved. We will see examples of this later on.  The dual category construction gives us a formal framework to talk about dual notions. We will often make a statement in a category and make comments about the dual statement; in practice, this corresponds to simply switching the way all arrows go. Here are some examples of dual notions and statements:     source  target    epi  mono    is a right inverse for  is a left inverse for    is invertible  is invertible    initial objects  terminal objects    homology  cohomology     Note that the dual of the dual is the original statement; we can make this more formal by saying that . Sometimes we can easily prove a statement by dualizing; however, this is not always straightforward, and one needs to carefully dualize all portions of the statement in question. Nevertheless, Sanders MacLane, one of the fathers of category theory, wrote that \"If any statement about a category is deducible from the axioms for a category, the dual statement is likely deducible\". One of the upshots of duality is that any theorem in category theory must simultaneously prove two theorems: the original statement and its dual. But for this to hold, we need proofs that use the abstraction of a purely categorical proof.  Opposite categories are more interesting than they might appear at first; there is more than just flipping all the arrows. For example, consider the opposite category of Set. For any nonempty set , there is a unique morphism in Set (a function) , but there are no functions , so is not a function. Thus thinking about Set is a bit difficult. One can show that this is the category of complete atomic Boolean algebras - but we won't concern ourselves with what that means.   "
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
  "id": "convention-4",
  "level": "2",
  "url": "sec-categories.html#convention-4",
  "type": "Convention",
  "number": "1.2",
  "title": "",
  "body": " We sometimes write or for an arrow .  "
},
{
  "id": "exp-unique-id-morphism",
  "level": "2",
  "url": "sec-categories.html#exp-unique-id-morphism",
  "type": "Exploration",
  "number": "1.1",
  "title": "Unique Identity Morphism.",
  "body": "Unique Identity Morphism  Prove that every element in a category has a unique identity morphism.  "
},
{
  "id": "ex-categories",
  "level": "2",
  "url": "sec-categories.html#ex-categories",
  "type": "Example",
  "number": "1.3",
  "title": "Categories.",
  "body": "Categories     The category with objects all sets and arrows all functions between sets.    The category whose objects are the collection of all groups, and whose arrows are all the homomorphisms of groups. The identity arrows are the identity homomorphisms.    The category with objects all abelian groups, and arrows the homomorphisms of abelian groups. The identity arrows are the identity homomorphisms.    The category of rings and ring homomorphisms. Contrary to what you may expect, this is not nearly as important as the next one.    The category of modules over a fixed and with -module homomorphisms. Sometimes one writes for this category, and reserve for the category of finitely generated -modules with ule homomorphisms. When is a field, the objects in the category -Mod are -vector spaces, and the arrows are linear transformations; we may instead refer to this category as Vect- .    The category Top of topological spaces and continuous functions. One may consider many variations of the categories above. Here are some variations on vector spaces:     "
},
{
  "id": "ex-more-categories",
  "level": "2",
  "url": "sec-categories.html#ex-more-categories",
  "type": "Example",
  "number": "1.4",
  "title": "More Categories!",
  "body": "More Categories!  Let be a field.   The collection of finite dimensional -vector spaces with all linear transformations is a category.    The collection of all -dimensional -vector spaces with all linear transformations is a category.    The collection of all -vector spaces (or -dimensional vector spaces) with linear isomorphisms is a category.    The collection of all -vector spaces (or -dimensional vector spaces) with nonzero linear transformations is not a category, since it is not closed under composition.    The collection of all -dimensional vector spaces with linear transformations of determinant 0 is not a category, since it does not have identity maps.     "
},
{
  "id": "ex-pointed-set",
  "level": "2",
  "url": "sec-categories.html#ex-pointed-set",
  "type": "Example",
  "number": "1.5",
  "title": "Pointed Set Category.",
  "body": "Pointed Set Category  There is a category Set* of pointed sets, where the objects are pairs of sets and points , and where for two pointed sets and , the morphisms from to are functions such that , with the usual composition of functions.  "
},
{
  "id": "def-locally-small",
  "level": "2",
  "url": "sec-categories.html#def-locally-small",
  "type": "Definition",
  "number": "1.6",
  "title": "Locally Small.",
  "body": "Locally Small   A category is locally small if for all objects and in is a set. A category is small if it is locally small and the collection of all objects in is a set.   "
},
{
  "id": "ex-poset-category",
  "level": "2",
  "url": "sec-categories.html#ex-poset-category",
  "type": "Example",
  "number": "1.7",
  "title": "Poset Category.",
  "body": "Poset Category  Given a partially ordered set , we can regard itself as a category: the objects are the elements of , and for each and in is either a singleton if or empty if . There is only one possible way to define composition, and the transitive property of guarantees that the composition of arrows is indeed well-defined: if there is an arrow and an arrow , then and , so and thus there is a unique arrow . This category is locally small, since all nonempty Hom-sets are in fact singletons. It is in fact small, since the objects are by construction the set .  "
},
{
  "id": "poset-categories-2",
  "level": "2",
  "url": "sec-categories.html#poset-categories-2",
  "type": "Example",
  "number": "1.8",
  "title": "<span class=\"process-math\">\\(\\mathbf{n}\\)<\/span> Category.",
  "body": "Category  For each positive integer , the category has objects and is either empty if or a singleton if . As , composition is defined in the only way possible, and things work out. This is the poset category for the poset with the usual .  "
},
{
  "id": "ex-mat-category",
  "level": "2",
  "url": "sec-categories.html#ex-mat-category",
  "type": "Example",
  "number": "1.9",
  "title": "Matrix Category.",
  "body": "Matrix Category  Fix a field . We define a category Mat- with objects all positive integers, and given two positive integers and , the -set consists of all matrices with entries in . The composition rule is given by product of matrices: given and , the composition is the matrix . For each object , its identity arrow is given by the identity matrix.  "
},
{
  "id": "ex-directed-graph-category",
  "level": "2",
  "url": "sec-categories.html#ex-directed-graph-category",
  "type": "Example",
  "number": "1.10",
  "title": "Directed Graph Category.",
  "body": "Directed Graph Category  Let be a directed graph. We can construct a category from as follows: the objects are the vertices of , and the arrows are directed paths in the graph . In this category, composition of arrows corresponds to concatenation of paths. For each object , the identity arrow corresponds to the empty path from to .  "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-categories.html#remark-4",
  "type": "Remark",
  "number": "1.11",
  "title": "",
  "body": " A locally small category with just one element is completely determined by its unique Hom-set; it thus consists of a set with an associative operation that has an identity element, which in this class is what we call a semigroup. Some authors prefer the term monoid.   "
},
{
  "id": "def-diagram",
  "level": "2",
  "url": "sec-categories.html#def-diagram",
  "type": "Definition",
  "number": "1.12",
  "title": "Diagram.",
  "body": "Diagram   A diagram in a category is a directed multigraph whose vertices are objects in and whose arrows\/edges are morphisms in . A commutative diagram in is a diagram in which for each pair of vertices and , any two paths from to compose to the same morphism.   "
},
{
  "id": "ex-commutative-diagram",
  "level": "2",
  "url": "sec-categories.html#ex-commutative-diagram",
  "type": "Example",
  "number": "1.13",
  "title": "Commutative Diagram.",
  "body": "Commutative Diagram  The diagram    commutes if and only if .  "
},
{
  "id": "def-inverses",
  "level": "2",
  "url": "sec-categories.html#def-inverses",
  "type": "Definition",
  "number": "1.14",
  "title": "Morphism Inverses.",
  "body": "Morphism Inverses   Let be any category.   An arrow is left invertible if there exists such that . In this case, we say that is the left inverse of . So is a left inverse of if the diagram   commutes.    An arrow is right invertible if there exists such that . In this case, we say that is the right inverse of . So is a right inverse of if the diagram   commutes.    An arrow is an isomorphism if there exists such that and . Unsurprisingly, such an arrow is called the inverse of .      "
},
{
  "id": "def-mono-epi",
  "level": "2",
  "url": "sec-categories.html#def-mono-epi",
  "type": "Definition",
  "number": "1.15",
  "title": "Monic and Epic.",
  "body": "Monic and Epic      An arrow is monic , a monomorphism , or a mono if for all arrows     if then .    Similarly, an arrow is an epi or an epimorphism if for all arrows if then .      "
},
{
  "id": "exp-mono-epi-set",
  "level": "2",
  "url": "sec-categories.html#exp-mono-epi-set",
  "type": "Exploration",
  "number": "1.2",
  "title": "Monos and Epis in Set.",
  "body": "Monos and Epis in Set  Show that in , the monos coincide with the injective functions and the epis coincide with the surjective functions.  "
},
{
  "id": "ex-isomorphisms",
  "level": "2",
  "url": "sec-categories.html#ex-isomorphisms",
  "type": "Example",
  "number": "1.16",
  "title": "Isomorphisms.",
  "body": "Isomorphisms     In , , and R the isomorphisms are the morphisms that are bijective functions.    In contrast, in the isomorphisms are the homeomorphisms, which are the bijective continuous functions with continuous inverses. These are not the same thing as just the bijective continuous functions.     "
},
{
  "id": "exp-iso-mono-epi",
  "level": "2",
  "url": "sec-categories.html#exp-iso-mono-epi",
  "type": "Exploration",
  "number": "1.3",
  "title": "Isomorphisms Mono and Epi.",
  "body": "Isomorphisms Mono and Epi  Show that in any category, every isomorphism is both epi and mono.  "
},
{
  "id": "exp-epi-not-surj",
  "level": "2",
  "url": "sec-categories.html#exp-epi-not-surj",
  "type": "Exploration",
  "number": "1.4",
  "title": "Epi and Surjective not the Same.",
  "body": "Epi and Surjective not the Same  Show that the usual inclusion is an epi in the category .  "
},
{
  "id": "exp-mono-not-inj",
  "level": "2",
  "url": "sec-categories.html#exp-mono-not-inj",
  "type": "Exploration",
  "number": "1.5",
  "title": "Mono and Injective not the Same.",
  "body": "Mono and Injective not the Same  Show that the canonical projection is a mono in the category of divisible abelian groups. An abelian group is divisible if for every and every positive integer there exists such that .   "
},
{
  "id": "exp-mono-epi-poset",
  "level": "2",
  "url": "sec-categories.html#exp-mono-epi-poset",
  "type": "Exploration",
  "number": "1.6",
  "title": "Monic and Epic in Poset Category.",
  "body": "Monic and Epic in Poset Category  Show that given any poset , in the poset category of every morphism is both monic and epic, but no nonidentity morphism has a left or right inverse.  "
},
{
  "id": "def-initial-terminal",
  "level": "2",
  "url": "sec-categories.html#def-initial-terminal",
  "type": "Definition",
  "number": "1.17",
  "title": "Initial and Terminal Objects.",
  "body": "Initial and Terminal Objects   Let be a category. An initial object in is an object such that for every object in is a singleton, meaning there exists a unique arrow . A terminal object in is an object such that for every object in is a singleton, meaning there exists a unique arrow . A zero object in is an object that is both initial and terminal.   "
},
{
  "id": "exp-unique-initial-terminal",
  "level": "2",
  "url": "sec-categories.html#exp-unique-initial-terminal",
  "type": "Exploration",
  "number": "1.7",
  "title": "Uniqueness of Initial and Terminal Objects.",
  "body": "Uniqueness of Initial and Terminal Objects  Initial objects are unique up to unique isomorphism. Terminal objects are unique up to unique isomorphism.  "
},
{
  "id": "ex-initial-terminal",
  "level": "2",
  "url": "sec-categories.html#ex-initial-terminal",
  "type": "Example",
  "number": "1.18",
  "title": "Initial and Terminal Objects.",
  "body": "Initial and Terminal Objects     The empty set is initial in Set. Any singleton is terminal. Since the empty set and a singleton are not isomorphic in Set, there is no zero object in Set.    The module is the zero object in .    The trivial group is the zero object in .    In the category of rings, is the initial object, but there is no terminal object unless we allow the ring.    There are neither initial nor terminal objects in the category of fields.     "
},
{
  "id": "def-subcategory",
  "level": "2",
  "url": "sec-categories.html#def-subcategory",
  "type": "Definition",
  "number": "1.19",
  "title": "Subcategory.",
  "body": "Subcategory   A subcategory  of a category consists of a subcollection of the objects of and a subcollection of the morphisms of such that the following hold:   For every object in , the arrow is an arrow in .    For every arrow in , its source and target in are objects in .    For every pair of arrows and in such that is an arrow that makes sense in , is an arrow in .      "
},
{
  "id": "ex-subcategories",
  "level": "2",
  "url": "sec-categories.html#ex-subcategories",
  "type": "Example",
  "number": "1.20",
  "title": "Subcategories.",
  "body": "Subcategories  The category of finitely generated -modules with -module homomorphisms is a subcategory of .  "
},
{
  "id": "def-full-subcategory",
  "level": "2",
  "url": "sec-categories.html#def-full-subcategory",
  "type": "Definition",
  "number": "1.21",
  "title": "Full Subcategory.",
  "body": "Full Subcategory   A subcategory of is a full subcategory if includes all of the arrows in between any two objects in .   "
},
{
  "id": "ex-full-subcategories",
  "level": "2",
  "url": "sec-categories.html#ex-full-subcategories",
  "type": "Example",
  "number": "1.22",
  "title": "Full Subcategories.",
  "body": "Full Subcategories     The category of abelian groups is a full subcategory of .    Since every group is a set, and every homomorphism is a function, is a subcategory of . However, not every function between two groups is a group homomorphism, so is not a full subcategory of .    The category whose objects are all sets and with arrows all bijections is a subcategory of that is not full.     "
},
{
  "id": "def-opposite-category",
  "level": "2",
  "url": "sec-categories.html#def-opposite-category",
  "type": "Definition",
  "number": "1.23",
  "title": "Opposite Category.",
  "body": "Opposite Category   Let be a category. The opposite category of , denoted , is a category whose objects are the objects of , and such that each arrow is the same as some arrow in . The composition of two morphisms and in is defined as the composition in .   "
},
{
  "id": "table-1",
  "level": "2",
  "url": "sec-categories.html#table-1",
  "type": "Table",
  "number": "1.24",
  "title": "",
  "body": "   source  target    epi  mono    is a right inverse for  is a left inverse for    is invertible  is invertible    initial objects  terminal objects    homology  cohomology    "
},
{
  "id": "sec-functors",
  "level": "1",
  "url": "sec-functors.html",
  "type": "Section",
  "number": "1.2",
  "title": "Functors",
  "body": "Functors  Functor? Damn Near Killed 'er!  Many mathematical constructions are functorial, in the sense that they behave well with respect to morphisms. In the formalism of category theory, this means that we can think of a functorial construction as a functor.  Functor   Let and be categories. A covariant functor is a mapping that assigns to each object in an object in , and to each arrow an arrow , such that    preserves the composition of maps, meaning for all arrows and in , and     preserves the identity arrows, meaning for all objects in .     A contravariant functor  is a mapping that assigns to each object in an object in , and to each arrow an arrow , such that    preserves the composition of maps, meaning for all composable arrows and in , and     preserves the identity arrows, meaning for all objects in .       So a contravariant functor is a functor that flips all the arrows. We can also describe a contravariant functor as a covariant functor from to the opposite category of , .   A contravariant functor can be thought of as a covariant functor , or also as a covariant functor . If using one of these conventions, one needs to be careful, however, when composing functors, so that the respective sources and targets match up correctly. While we haven't specially discussed how one composes functors, it should be clear that applying a functor and is the same as applying a functor , which we can write as .  For example, if and are both contravariant functors, the composition is a covariant functor, since   So we could think of as a covariant functor and as a covariant functor . Similarly, if is a covariant functor and is a contravariant functor, is a contravariant functor. In this case, we can think of as a covariant functor , so that is now a covariant functor .    Show that functors preserve isomorphisms.    Any functor sends isos to isos, since it preserves compositions and identities.   Here are some examples of functors you may have encountered before.      Many categories one may think about are concrete categories, where the objects are sets with some extra structure, and the arrows are functions between those sets that preserved that extra structure. The forgetful functor from such a category to is the functor that, just as the name says, forgets that extra structure, and sees only the underlying sets and functions of sets. For example, the forgetful functor  sends each group to its underlying set, and each group homomorphism to the corresponding function of sets.    The identity functor  on any category does what the name suggests: it sends each object to itself and each arrow to itself.    Given a group , the subgroup of generated by the set of commutators is a normal subgroup, and the quotient is called the abelianization of . The group is abelian. Given a group homomorphism automatically takes commutators to commutators, so it induces a homomorphism . More precisely, abelianization gives a covariant functor from to .    The unit group functor  :   sends a ring to its group of units . To see this is indeed a functor, we should check it behaves well on morphisms; and indeed if is a ring homomorphism, and is a unit in , then so is a unit in . Thus induces a function given by restriction of to , which must therefore be a group homomorphism since preserves products.    Fix a field . Given a vector space , the collection of linear transformations from to is again a -vector space, the dual vector space of . If is a linear transformation and is an element of , then is in . Doing this for all elements gives a function , and one can show that is a linear transformation. The assignment that sends each vector space to its dual vector space and each linear transformation to is a contravariant functor on Vect- .    Localization is a functor. Let be a ring and be a multiplicatively closed set in . There is localization at induces a a functor  that sends each -module to , and each -module homomorphism to the -module homomorphism .       If we apply a covariant functor to a diagram, then we get a diagram of the same shape:   However, if we apply a contravariant functor to the same diagram, we get a similar diagram but with the arrows reversed:    Category of Small Categories   The category Cat has objects all small categories and arrows all functors between them.     Properties of Functors  If we think about functors as functions between categories, it's natural to consider what would be the appropriate versions of the notions of injective or surjective.    A covariant functor between locally small categories is      faithful if all the functions of sets     are injective.     full if all the functions of sets     are surjective.     fully faithful if it is full and faithful.     essentially surjective if every object in is isomorphic to for in .    an embedding if it is fully faithful and injective on objects.        The forgetful functor   is faithful since any two maps of -modules with the same source and target coincide if and only if they are the same function of sets. This functor is not full, since there not every functions between the underlying sets of two -modules is an -module homomorphism.    A fully faithful functor is not necessarily injective on objects, but it is injective on objects up to isomorphism.    A subcategory of is full if the inclusion functor is full.       The category of abelian groups is a full subcategory of .    The category whose objects are all sets and with arrows all bijections is a subcategory of that is not full.      To close this section, here are the two of the most important functors we will discuss this semester:  Functors   Let be a locally small category. An object in induces two functors:   The covariant functor Set is defined as follows:   We may refer to this functor as the covariant functor represented by . Given an arrow in , we write . It is easier to see what does through the following commutative diagram:      The contravariant functor is defined as follows:   We may refer to this functor as the contravariant functor represented by . Given an arrow in , we write . It is easier to see what does through the following commutative diagram:          Check that and are indeed functors.   We will be particularly interested in the Hom-functors in the category , which we will study in detail in a later chapter.   "
},
{
  "id": "def-functor",
  "level": "2",
  "url": "sec-functors.html#def-functor",
  "type": "Definition",
  "number": "1.25",
  "title": "Functor.",
  "body": "Functor   Let and be categories. A covariant functor is a mapping that assigns to each object in an object in , and to each arrow an arrow , such that    preserves the composition of maps, meaning for all arrows and in , and     preserves the identity arrows, meaning for all objects in .     A contravariant functor  is a mapping that assigns to each object in an object in , and to each arrow an arrow , such that    preserves the composition of maps, meaning for all composable arrows and in , and     preserves the identity arrows, meaning for all objects in .      "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-functors.html#remark-5",
  "type": "Remark",
  "number": "1.26",
  "title": "",
  "body": " A contravariant functor can be thought of as a covariant functor , or also as a covariant functor . If using one of these conventions, one needs to be careful, however, when composing functors, so that the respective sources and targets match up correctly. While we haven't specially discussed how one composes functors, it should be clear that applying a functor and is the same as applying a functor , which we can write as .  For example, if and are both contravariant functors, the composition is a covariant functor, since   So we could think of as a covariant functor and as a covariant functor . Similarly, if is a covariant functor and is a contravariant functor, is a contravariant functor. In this case, we can think of as a covariant functor , so that is now a covariant functor .  "
},
{
  "id": "exploration-8",
  "level": "2",
  "url": "sec-functors.html#exploration-8",
  "type": "Exploration",
  "number": "1.8",
  "title": "",
  "body": " Show that functors preserve isomorphisms.  "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-functors.html#remark-6",
  "type": "Remark",
  "number": "1.27",
  "title": "",
  "body": " Any functor sends isos to isos, since it preserves compositions and identities.  "
},
{
  "id": "example-19",
  "level": "2",
  "url": "sec-functors.html#example-19",
  "type": "Example",
  "number": "1.28",
  "title": "",
  "body": "    Many categories one may think about are concrete categories, where the objects are sets with some extra structure, and the arrows are functions between those sets that preserved that extra structure. The forgetful functor from such a category to is the functor that, just as the name says, forgets that extra structure, and sees only the underlying sets and functions of sets. For example, the forgetful functor  sends each group to its underlying set, and each group homomorphism to the corresponding function of sets.    The identity functor  on any category does what the name suggests: it sends each object to itself and each arrow to itself.    Given a group , the subgroup of generated by the set of commutators is a normal subgroup, and the quotient is called the abelianization of . The group is abelian. Given a group homomorphism automatically takes commutators to commutators, so it induces a homomorphism . More precisely, abelianization gives a covariant functor from to .    The unit group functor  :   sends a ring to its group of units . To see this is indeed a functor, we should check it behaves well on morphisms; and indeed if is a ring homomorphism, and is a unit in , then so is a unit in . Thus induces a function given by restriction of to , which must therefore be a group homomorphism since preserves products.    Fix a field . Given a vector space , the collection of linear transformations from to is again a -vector space, the dual vector space of . If is a linear transformation and is an element of , then is in . Doing this for all elements gives a function , and one can show that is a linear transformation. The assignment that sends each vector space to its dual vector space and each linear transformation to is a contravariant functor on Vect- .    Localization is a functor. Let be a ring and be a multiplicatively closed set in . There is localization at induces a a functor  that sends each -module to , and each -module homomorphism to the -module homomorphism .     "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "sec-functors.html#remark-7",
  "type": "Remark",
  "number": "1.29",
  "title": "",
  "body": " If we apply a covariant functor to a diagram, then we get a diagram of the same shape:   However, if we apply a contravariant functor to the same diagram, we get a similar diagram but with the arrows reversed:   "
},
{
  "id": "def-cat-cat",
  "level": "2",
  "url": "sec-functors.html#def-cat-cat",
  "type": "Definition",
  "number": "1.30",
  "title": "Category of Small Categories.",
  "body": "Category of Small Categories   The category Cat has objects all small categories and arrows all functors between them.   "
},
{
  "id": "def-functor-properties",
  "level": "2",
  "url": "sec-functors.html#def-functor-properties",
  "type": "Definition",
  "number": "1.31",
  "title": "",
  "body": "  A covariant functor between locally small categories is      faithful if all the functions of sets     are injective.     full if all the functions of sets     are surjective.     fully faithful if it is full and faithful.     essentially surjective if every object in is isomorphic to for in .    an embedding if it is fully faithful and injective on objects.      "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec-functors.html#example-20",
  "type": "Example",
  "number": "1.32",
  "title": "",
  "body": " The forgetful functor   is faithful since any two maps of -modules with the same source and target coincide if and only if they are the same function of sets. This functor is not full, since there not every functions between the underlying sets of two -modules is an -module homomorphism.  "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "sec-functors.html#remark-8",
  "type": "Remark",
  "number": "1.33",
  "title": "",
  "body": " A fully faithful functor is not necessarily injective on objects, but it is injective on objects up to isomorphism.  "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "sec-functors.html#remark-9",
  "type": "Remark",
  "number": "1.34",
  "title": "",
  "body": " A subcategory of is full if the inclusion functor is full.  "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec-functors.html#example-21",
  "type": "Example",
  "number": "1.35",
  "title": "",
  "body": "    The category of abelian groups is a full subcategory of .    The category whose objects are all sets and with arrows all bijections is a subcategory of that is not full.     "
},
{
  "id": "def-hom-functor",
  "level": "2",
  "url": "sec-functors.html#def-hom-functor",
  "type": "Definition",
  "number": "1.36",
  "title": "<span class=\"process-math\">\\(\\Hom\\)<\/span> Functors.",
  "body": "Functors   Let be a locally small category. An object in induces two functors:   The covariant functor Set is defined as follows:   We may refer to this functor as the covariant functor represented by . Given an arrow in , we write . It is easier to see what does through the following commutative diagram:      The contravariant functor is defined as follows:   We may refer to this functor as the contravariant functor represented by . Given an arrow in , we write . It is easier to see what does through the following commutative diagram:        "
},
{
  "id": "exploration-9",
  "level": "2",
  "url": "sec-functors.html#exploration-9",
  "type": "Exploration",
  "number": "1.9",
  "title": "",
  "body": " Check that and are indeed functors.  "
},
{
  "id": "sec-natural-transformations",
  "level": "1",
  "url": "sec-natural-transformations.html",
  "type": "Section",
  "number": "1.3",
  "title": "Natural Transformations",
  "body": "Natural Transformations  Natural Transformations    Let and be covariant functors . A natural transformation between and is a mapping that to each object in assigns an arrow such that for all , the diagram   commutes. A natural isomorphism is a natural transformation where each is an isomorphism. We sometimes write   or simply .  Let and be contravariant functors . A natural transformation between and is a mapping that to each object in assigns an arrow such that for all , the diagram   commutes.    Often, when studying a particular topic, we sometimes say a certain map is natural to mean that there is actually a natural transformation behind it.   Recall the abelianization functor we discussed in Example 1.26. The abelianization comes equipped with a natural projection map , the usual quotient map from to a normal subgroup. Here we mean natural in two different ways: both that this is common sense map to consider, and that this is in fact coming from a natural transformation. What's happening behind the scenes is that abelianization is a functor . On objects, the abelianizations functor is defined as . Given an arrow, meaning a group homomorphism , one can check that is contained in the kernel of , so factors through , and there exists a group homomorphism making the following diagram commute:   So the abelianization functor takes the arrow to . The commutativity of the diagram above says that is a natural transformation between the identity functor on and the abelianization functor, which we can write more compactly as    Functor Category   Let be two functors between the categories and . We write   Given two categories and , one can build a functor category Yes, the madness is neverending. with objects all covariant functors , and arrows the corresponding natural transformations. This category is denoted . Sometimes one writes for , but we will avoid that, as it might make things even more confusing.    For the functor category to truly be a category, though, we need to know how to compose natural transformations.   Consider natural transformations   and   We can compose them for form a new natural transformation   We should think of this composition as happening vertically. For each object in sends to the arrow . This makes the diagram   commute.    Show that a natural transformation is a natural isomorphism if and only if there exists a natural transformation such that is the identity natural isomorphism on and is the identity natural isomorphism on .     Two categories and are equivalent if there exist functors and and two natural isomorphisms and . We say that a functor is an equivalence of categories if there exists a functor and natural isomorphisms and as above.    If one assumes the Axiom of Choice, this is the right notion of isomorphism of two categories (though not in the categorical sense!); better said, two categories that are equivalent are essentially the same. Note that this does not mean that there is a bijection between the objects of and the objects of . In fact, one can show that a functor is an equivalence of categories if and only if it is fully faithful and essentially surjective - though this fact requires the Axiom of Choice!   Let be the category with one object and a unique arrow . Let be the category with two objects and and four arrows: the identities and two isomorphisms and . Let be the category with two objects and and only two arrows, and .   Show that and are equivalent categories.    Show that and are not equivalent categories.       The Yoneda Lemma  Even though this is only a short introduction to category theory, we would be remiss not to mention the , arguably the most important statement in category theory.  Yoneda Lemma   Let be a locally small category, and fix an object in . Let Set be a covariant functor. Then there is a bijection Moreover, this correspondence is natural in both and .    Let be a natural transformation in . The proof of the Yoneda Lemma is essentially the following diagram:   Our bijection will be defined by . We should first check that this makes sense: arrows in Set are just functions between sets, and so is a function of sets . Also, is a set that contains at least the element , and is some element in the set .  Given any fixed , the fact that is a natural transformation translates into the outer commutative diagram. In particular, the maps of sets and coincide, and must in particular take to the same element in . This is the commutativity of the inner diagram, with .  The commutativity of the diagram above says that is completely determined by , since for any other object in and any arrow , we necessarily have . In particular, our map is injective. Moreover, note that each choice of gives rise to a different natural transformation by setting . So our map is indeed a bijection.  We now have two naturality statements to prove. Naturality in the functor means that given a natural isomorphism , the diagram   commutes. Given a natural transformation between and , so commutativity does hold. Naturality on the object means that given an arrow , the diagram   commutes. Given a natural transformation between and , while Now notice that   Let's look back at the big commutative diagram we started our proof with: it says in particular that . So commutativity does hold, and we are done.    One can naturally (pun intended) define the notion of functor category of contravariant functors, and then prove the corresponding , which will instead use the contravariant Hom functor.  Contravariant version of the Yoneda Lemma  Let be a locally small category, and fix an object in . Let Set be a contravariant functor. Then there is a bijection    In a way, the says that to give a natural transformation between the functors and is choosing an element in .   Notice that the says in particular that the collection of all natural transformations from to is a set. This wasn't clear a priori, since the collection of objects in is not necessarily a set.    If we apply the to the case when itself is also a Hom functor, say , the says that there is a bijection between and . In particular, each arrow in determines a natural transformation between Hom functors.   One of the consequences of the is the Yoneda Embedding, which roughly says that every locally small category can be embedded into the category of contravariant functors from to Set. In particular, the Yoneda embedding says that natural transformations between representable functors correspond to arrows between the representing objects.  Yoneda Embedding   Let be a locally small category. The covariant functor   from to the category of contravariant functors Set is an embedding. Moreover, the contravariant functor   from the category to the category of covariant functors Set is also an embedding.    First, note that our functors are injective on objects because the Hom-sets in our category are all disjoint. We need to check that given objects and in , we have bijections and   We will do the details for the first one, and leave the second as an exercise.  First, let us take a sanity check and confirm that indeed our proposed functors take arrows in to natural transformations between and . This is essentially the content of Remark 1.43, but let's carefully check the details. The applied here tells us that each natural transformation between and corresponds to an element , which we obtain by taking . As we discussed in the proof of the , we can recover from by taking the natural transformation that for each object in has given by .  We can see that different arrows give rise to different natural transformations by applying the resulting natural transformation to the identity arrow , which takes it to . Moreover, the tells us that every natural transformation between and is the image of some , as described above.    The functors that are naturally isomorphic to some Hom functor are important.    A covariant functor Set is representable if there exists an object in such that is naturally isomorphic to . A contravariant functor Set is representable if there exists an object in such that is naturally isomorphic to .     We claim that the identity functor Set Set is representable. Let 1 be a singleton set. Given any set , there is a bijection between elements and functions sending the one element in to each . Moreover, given any other set , and a function , our bijections make the following diagram commute:   This data gives a natural isomorphism between the identity functor and .   A representable functor encodes a universal property of the object that represents it. For example, in Example 1.46, mapping out of the singleton set is the same as choosing an element in a set . We have all seen constructions that are at first a bit messy but that end up satisfying some nice universal property that makes everything work out. At the end of the day, a universal property allows us to ignore the messy details and focus on the universal property, which usually says everything we need to know about the construction. And as you may have already realized, universal properties are everywhere. Before we give a formal definition, we want to discuss some important examples.   "
},
{
  "id": "def-natural-transformation",
  "level": "2",
  "url": "sec-natural-transformations.html#def-natural-transformation",
  "type": "Definition",
  "number": "1.37",
  "title": "",
  "body": "  Let and be covariant functors . A natural transformation between and is a mapping that to each object in assigns an arrow such that for all , the diagram   commutes. A natural isomorphism is a natural transformation where each is an isomorphism. We sometimes write   or simply .  Let and be contravariant functors . A natural transformation between and is a mapping that to each object in assigns an arrow such that for all , the diagram   commutes.   "
},
{
  "id": "example-22",
  "level": "2",
  "url": "sec-natural-transformations.html#example-22",
  "type": "Example",
  "number": "1.38",
  "title": "",
  "body": " Recall the abelianization functor we discussed in Example 1.26. The abelianization comes equipped with a natural projection map , the usual quotient map from to a normal subgroup. Here we mean natural in two different ways: both that this is common sense map to consider, and that this is in fact coming from a natural transformation. What's happening behind the scenes is that abelianization is a functor . On objects, the abelianizations functor is defined as . Given an arrow, meaning a group homomorphism , one can check that is contained in the kernel of , so factors through , and there exists a group homomorphism making the following diagram commute:   So the abelianization functor takes the arrow to . The commutativity of the diagram above says that is a natural transformation between the identity functor on and the abelianization functor, which we can write more compactly as   "
},
{
  "id": "def-functor-category",
  "level": "2",
  "url": "sec-natural-transformations.html#def-functor-category",
  "type": "Definition",
  "number": "1.39",
  "title": "Functor Category.",
  "body": "Functor Category   Let be two functors between the categories and . We write   Given two categories and , one can build a functor category Yes, the madness is neverending. with objects all covariant functors , and arrows the corresponding natural transformations. This category is denoted . Sometimes one writes for , but we will avoid that, as it might make things even more confusing.   "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "sec-natural-transformations.html#remark-10",
  "type": "Remark",
  "number": "1.40",
  "title": "",
  "body": " Consider natural transformations   and   We can compose them for form a new natural transformation   We should think of this composition as happening vertically. For each object in sends to the arrow . This makes the diagram   commute.  "
},
{
  "id": "exploration-10",
  "level": "2",
  "url": "sec-natural-transformations.html#exploration-10",
  "type": "Exploration",
  "number": "1.10",
  "title": "",
  "body": " Show that a natural transformation is a natural isomorphism if and only if there exists a natural transformation such that is the identity natural isomorphism on and is the identity natural isomorphism on .  "
},
{
  "id": "def-equivalent-categories",
  "level": "2",
  "url": "sec-natural-transformations.html#def-equivalent-categories",
  "type": "Definition",
  "number": "1.41",
  "title": "",
  "body": "  Two categories and are equivalent if there exist functors and and two natural isomorphisms and . We say that a functor is an equivalence of categories if there exists a functor and natural isomorphisms and as above.   "
},
{
  "id": "exploration-11",
  "level": "2",
  "url": "sec-natural-transformations.html#exploration-11",
  "type": "Exploration",
  "number": "1.11",
  "title": "",
  "body": " Let be the category with one object and a unique arrow . Let be the category with two objects and and four arrows: the identities and two isomorphisms and . Let be the category with two objects and and only two arrows, and .   Show that and are equivalent categories.    Show that and are not equivalent categories.     "
},
{
  "id": "thm-yoneda",
  "level": "2",
  "url": "sec-natural-transformations.html#thm-yoneda",
  "type": "Theorem",
  "number": "1.42",
  "title": "Yoneda Lemma.",
  "body": "Yoneda Lemma   Let be a locally small category, and fix an object in . Let Set be a covariant functor. Then there is a bijection Moreover, this correspondence is natural in both and .    Let be a natural transformation in . The proof of the Yoneda Lemma is essentially the following diagram:   Our bijection will be defined by . We should first check that this makes sense: arrows in Set are just functions between sets, and so is a function of sets . Also, is a set that contains at least the element , and is some element in the set .  Given any fixed , the fact that is a natural transformation translates into the outer commutative diagram. In particular, the maps of sets and coincide, and must in particular take to the same element in . This is the commutativity of the inner diagram, with .  The commutativity of the diagram above says that is completely determined by , since for any other object in and any arrow , we necessarily have . In particular, our map is injective. Moreover, note that each choice of gives rise to a different natural transformation by setting . So our map is indeed a bijection.  We now have two naturality statements to prove. Naturality in the functor means that given a natural isomorphism , the diagram   commutes. Given a natural transformation between and , so commutativity does hold. Naturality on the object means that given an arrow , the diagram   commutes. Given a natural transformation between and , while Now notice that   Let's look back at the big commutative diagram we started our proof with: it says in particular that . So commutativity does hold, and we are done.   "
},
{
  "id": "exploration-12",
  "level": "2",
  "url": "sec-natural-transformations.html#exploration-12",
  "type": "Exploration",
  "number": "1.12",
  "title": "Contravariant version of the Yoneda Lemma.",
  "body": "Contravariant version of the Yoneda Lemma  Let be a locally small category, and fix an object in . Let Set be a contravariant functor. Then there is a bijection   "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "sec-natural-transformations.html#remark-11",
  "type": "Remark",
  "number": "1.43",
  "title": "",
  "body": " Notice that the says in particular that the collection of all natural transformations from to is a set. This wasn't clear a priori, since the collection of objects in is not necessarily a set.  "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "sec-natural-transformations.html#remark-12",
  "type": "Remark",
  "number": "1.44",
  "title": "",
  "body": " If we apply the to the case when itself is also a Hom functor, say , the says that there is a bijection between and . In particular, each arrow in determines a natural transformation between Hom functors.  "
},
{
  "id": "thm-yondea-embedding",
  "level": "2",
  "url": "sec-natural-transformations.html#thm-yondea-embedding",
  "type": "Theorem",
  "number": "1.45",
  "title": "Yoneda Embedding.",
  "body": "Yoneda Embedding   Let be a locally small category. The covariant functor   from to the category of contravariant functors Set is an embedding. Moreover, the contravariant functor   from the category to the category of covariant functors Set is also an embedding.    First, note that our functors are injective on objects because the Hom-sets in our category are all disjoint. We need to check that given objects and in , we have bijections and   We will do the details for the first one, and leave the second as an exercise.  First, let us take a sanity check and confirm that indeed our proposed functors take arrows in to natural transformations between and . This is essentially the content of Remark 1.43, but let's carefully check the details. The applied here tells us that each natural transformation between and corresponds to an element , which we obtain by taking . As we discussed in the proof of the , we can recover from by taking the natural transformation that for each object in has given by .  We can see that different arrows give rise to different natural transformations by applying the resulting natural transformation to the identity arrow , which takes it to . Moreover, the tells us that every natural transformation between and is the image of some , as described above.   "
},
{
  "id": "def-representable-functor",
  "level": "2",
  "url": "sec-natural-transformations.html#def-representable-functor",
  "type": "Definition",
  "number": "1.46",
  "title": "",
  "body": "  A covariant functor Set is representable if there exists an object in such that is naturally isomorphic to . A contravariant functor Set is representable if there exists an object in such that is naturally isomorphic to .   "
},
{
  "id": "example-23",
  "level": "2",
  "url": "sec-natural-transformations.html#example-23",
  "type": "Example",
  "number": "1.47",
  "title": "",
  "body": " We claim that the identity functor Set Set is representable. Let 1 be a singleton set. Given any set , there is a bijection between elements and functions sending the one element in to each . Moreover, given any other set , and a function , our bijections make the following diagram commute:   This data gives a natural isomorphism between the identity functor and .  "
},
{
  "id": "sec-compelx-maps",
  "level": "1",
  "url": "sec-compelx-maps.html",
  "type": "Section",
  "number": "2.1",
  "title": "Maps of Complexes",
  "body": "Maps of Complexes  Unsurprisingly, we can form a category of complexes, but to do that we need the right definition of maps between complexes. We also take this section as a chance to set up some definitions we will need later. One thing to keep in mind as we build our basic definitions: we also want homology to be functorial.    Let and be complexes. A map of complexes or a chain map, which we write as or simply , is a sequence of homomorphisms of -modules such that the following diagram commutes:   This means that for all .    Note that throughout, whenever we call a function between -modules and a map, we really mean to say it is a homomorphism of -modules.   Example 2.2. The zero and the identity maps of complexes are exactly what they sound like: the zero map is 0 in every homological degree, and the identity map is the identity in every homological degree.   This is the notion of morphism we would want to form a category of chain complexes.    Let be a ring. The category of chain complexes of -modules, denoted -mod or simply , is the category with objects all chain complexes of -modules and arrows all maps of complexes of -modules. When , we write for , the category of chain complexes of abelian groups.    Note that the identity maps defined above are precisely the identity arrows in the category of chain complexes.  Exercise 25. Show that the isomorphisms in the category are precisely the maps of complexes such that is an isomorphism for all .  This is a good notion of map of complexes: it induces homomorphisms in homology, which in particular allows us to say that homology is a functor.    Let be a map of complexes. For all restricts to homomorphisms and . As a consequence, induces homomorphisms on homology .    Since , any element , say , is taken to   Similarly, if , then so . Finally, the restriction of to sends into , and thus it induces a well-defined homomorphism on the quotients .      Let be a map of complexes. We call the map the induced map in homology, and sometimes denote it by .    One can show that preserves compositions, and that moreover, the map in homology induced by the identity is the identity. Thus taking th homology is a functor which takes each map of complexes to the -module homomorphism     A map of chain complexes is a quasi-isomorphism if it induces an isomorphism in homology, meaning is an isomorphism of -modules for all . If there exists a quasi-isomorphism between two complexes and , we say that and are quasi-isomorphic, and write .     Remark 2.7. Note that saying that if is a quasi-isomorphism between and is a stronger statement that the fact that for all : it also says that there are isomorphisms that are all induced by .   Not all quasi-isomorphisms are isomorphisms, as the following example shows:  Exercise 26. Let denote the projection map from to . The chain map is a quasi-isomorphism.    Let be maps complexes. A homotopy, sometimes referred to as a chain homotopy, between and is a sequence of maps    such that for all . If there exists a homotopy between and , we say that and are homotopic or that they have the same homotopy type. We write to say that and are homotopic. If is homotopic to the zero map, we say is nullhomotopic, and write . This should not be confused with the notation on complexes.    Exercise 27. Homotopy is an equivalence relation.  The equivalence classes under homotopy are called homotopy classes. Homotopy is an interesting equivalence relation because homotopic maps induce the same map on homology.    Let be maps of complexes. If is homotopic to , then for all . In particular, every nullhomotopic map induces the zero map in homology.    Let be homotopic maps of complexes, and let be a homotopy between and . We claim that the map of complexes (defined in the obvious way) sends cycles to boundaries. If , then The map on homology induced by must then be the 0 map, so and induce the same map on homology. Here we are implicitly using the fact that , which we leave as an exercise to be further explored in Remark 3.4.    Notice, however, that the converse is false: the induced map in homology can be the zero map (for all homological degrees) even if the original map of complexes is not nullhomotopic.  Exercise 28. Consider the following map of complexes: Show that this map is not nullhomotopic, but that the induced map in homology is zero.    If and are maps of complexes such that is homotopic to the identity map on and is homotopic to the identity chain map on , we say that and are homotopy equivalences and and are homotopy equivalent.      Homotopy equivalences are quasi-isomorphisms.    If and are such that is homotopic to and is homotopic to , then by Lemma 2.9 the map induces the identity map on homology. So for all we have Therefore, and must both be isomorphisms.    The converse is false.  Exercise 29. Let denote the projection map from to . The chain map is a quasi-isomorphism but not a homotopy equivalence.   Remark 2.12. The relation , meaning \"there is a quasi-isomorphism from to \", is not symmetric: in Exercise 29, there is no quasi-isomorphism going in the opposite direction of the one given.   Now that we know about maps between complexes, it's time to point out that we can also talk about complexes of complexes and exact sequences of complexes. While we will later formalize this a little better when we discover that is an abelian category, let's for now give quick definitions that we can use.    Given complexes and is a subcomplex of if is a submodule of for all , and the inclusion maps define a map of complexes . Given a subcomplex of , the quotient of by is the complex that has in homological degree , with differential induced by the differential on .    Exercise 30. If is a subcomplex of , then the differential on satisfies . Therefore, induces a map of -modules for all , so that our definition of the differential on actually makes sense.  We can also talk about kernels and cokernels of maps of complexes.    Given any map of complexes , the kernel of is the subcomplex of that we can assemble from the the kernels . More precisely, is the complex where the differentials are simply the corresponding restrictions of the differentials on . Similarly, the image of is the subcomplex of . where the differentials are given by restriction of the corresponding differentials in . The cokernel of is the quotient complex .    Again, there are some details to check.  Exercise 31. Show that the kernel, image, and cokernel of a complex map are indeed complexes.    A complex in is a sequence of complexes of -modules and chain maps between them such that for all . A complex of complexes is a diagram of the form   where is the module in homological degree in the complex . The th column corresponds to the complex , and every row is also a complex. The vertical maps are the differentials on each individual complex; the horizontal maps are the differentials on the complex of complexes.    Given a complex in , we can talk about cycles and boundaries, which are a sequence of subcomplexes of the complexes in , and thus its homology. Such a complex is exact if for all .    Definition 2.16. A short exact sequence of complexes is an exact complex in of the form Equivalently, a short exact sequence of complexes is a commutative diagram   where the rows are exact and the columns are complexes.    "
},
{
  "id": "def-2.1",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.1",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "  Let and be complexes. A map of complexes or a chain map, which we write as or simply , is a sequence of homomorphisms of -modules such that the following diagram commutes:   This means that for all .   "
},
{
  "id": "example-24",
  "level": "2",
  "url": "sec-compelx-maps.html#example-24",
  "type": "Example",
  "number": "2.2",
  "title": "",
  "body": " Example 2.2. The zero and the identity maps of complexes are exactly what they sound like: the zero map is 0 in every homological degree, and the identity map is the identity in every homological degree.  "
},
{
  "id": "def-2.3",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.3",
  "type": "Definition",
  "number": "2.3",
  "title": "",
  "body": "  Let be a ring. The category of chain complexes of -modules, denoted -mod or simply , is the category with objects all chain complexes of -modules and arrows all maps of complexes of -modules. When , we write for , the category of chain complexes of abelian groups.   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec-compelx-maps.html#exercise-4",
  "type": "Exercise",
  "number": "2.4",
  "title": "",
  "body": "Exercise 25. Show that the isomorphisms in the category are precisely the maps of complexes such that is an isomorphism for all . "
},
{
  "id": "lem-2.4",
  "level": "2",
  "url": "sec-compelx-maps.html#lem-2.4",
  "type": "Lemma",
  "number": "2.5",
  "title": "",
  "body": "  Let be a map of complexes. For all restricts to homomorphisms and . As a consequence, induces homomorphisms on homology .    Since , any element , say , is taken to   Similarly, if , then so . Finally, the restriction of to sends into , and thus it induces a well-defined homomorphism on the quotients .   "
},
{
  "id": "def-2.5",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.5",
  "type": "Definition",
  "number": "2.6",
  "title": "",
  "body": "  Let be a map of complexes. We call the map the induced map in homology, and sometimes denote it by .   "
},
{
  "id": "def-2.6",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.6",
  "type": "Definition",
  "number": "2.7",
  "title": "",
  "body": "  A map of chain complexes is a quasi-isomorphism if it induces an isomorphism in homology, meaning is an isomorphism of -modules for all . If there exists a quasi-isomorphism between two complexes and , we say that and are quasi-isomorphic, and write .   "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "sec-compelx-maps.html#remark-13",
  "type": "Remark",
  "number": "2.8",
  "title": "",
  "body": " Remark 2.7. Note that saying that if is a quasi-isomorphism between and is a stronger statement that the fact that for all : it also says that there are isomorphisms that are all induced by .  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-compelx-maps.html#exercise-5",
  "type": "Exercise",
  "number": "2.9",
  "title": "",
  "body": "Exercise 26. Let denote the projection map from to . The chain map is a quasi-isomorphism. "
},
{
  "id": "def-2.8",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.8",
  "type": "Definition",
  "number": "2.10",
  "title": "",
  "body": "  Let be maps complexes. A homotopy, sometimes referred to as a chain homotopy, between and is a sequence of maps    such that for all . If there exists a homotopy between and , we say that and are homotopic or that they have the same homotopy type. We write to say that and are homotopic. If is homotopic to the zero map, we say is nullhomotopic, and write . This should not be confused with the notation on complexes.   "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-compelx-maps.html#exercise-6",
  "type": "Exercise",
  "number": "2.11",
  "title": "",
  "body": "Exercise 27. Homotopy is an equivalence relation. "
},
{
  "id": "lem-2.9",
  "level": "2",
  "url": "sec-compelx-maps.html#lem-2.9",
  "type": "Lemma",
  "number": "2.12",
  "title": "",
  "body": "  Let be maps of complexes. If is homotopic to , then for all . In particular, every nullhomotopic map induces the zero map in homology.    Let be homotopic maps of complexes, and let be a homotopy between and . We claim that the map of complexes (defined in the obvious way) sends cycles to boundaries. If , then The map on homology induced by must then be the 0 map, so and induce the same map on homology. Here we are implicitly using the fact that , which we leave as an exercise to be further explored in Remark 3.4.   "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-compelx-maps.html#exercise-7",
  "type": "Exercise",
  "number": "2.13",
  "title": "",
  "body": "Exercise 28. Consider the following map of complexes: Show that this map is not nullhomotopic, but that the induced map in homology is zero. "
},
{
  "id": "def-2.10",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.10",
  "type": "Definition",
  "number": "2.14",
  "title": "",
  "body": "  If and are maps of complexes such that is homotopic to the identity map on and is homotopic to the identity chain map on , we say that and are homotopy equivalences and and are homotopy equivalent.   "
},
{
  "id": "cor-2.11",
  "level": "2",
  "url": "sec-compelx-maps.html#cor-2.11",
  "type": "Corollary",
  "number": "2.15",
  "title": "",
  "body": "  Homotopy equivalences are quasi-isomorphisms.    If and are such that is homotopic to and is homotopic to , then by Lemma 2.9 the map induces the identity map on homology. So for all we have Therefore, and must both be isomorphisms.   "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec-compelx-maps.html#exercise-8",
  "type": "Exercise",
  "number": "2.16",
  "title": "",
  "body": "Exercise 29. Let denote the projection map from to . The chain map is a quasi-isomorphism but not a homotopy equivalence. "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "sec-compelx-maps.html#remark-14",
  "type": "Remark",
  "number": "2.17",
  "title": "",
  "body": " Remark 2.12. The relation , meaning \"there is a quasi-isomorphism from to \", is not symmetric: in Exercise 29, there is no quasi-isomorphism going in the opposite direction of the one given.  "
},
{
  "id": "def-2.13",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.13",
  "type": "Definition",
  "number": "2.18",
  "title": "",
  "body": "  Given complexes and is a subcomplex of if is a submodule of for all , and the inclusion maps define a map of complexes . Given a subcomplex of , the quotient of by is the complex that has in homological degree , with differential induced by the differential on .   "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec-compelx-maps.html#exercise-9",
  "type": "Exercise",
  "number": "2.19",
  "title": "",
  "body": "Exercise 30. If is a subcomplex of , then the differential on satisfies . Therefore, induces a map of -modules for all , so that our definition of the differential on actually makes sense. "
},
{
  "id": "def-2.14",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.14",
  "type": "Definition",
  "number": "2.20",
  "title": "",
  "body": "  Given any map of complexes , the kernel of is the subcomplex of that we can assemble from the the kernels . More precisely, is the complex where the differentials are simply the corresponding restrictions of the differentials on . Similarly, the image of is the subcomplex of . where the differentials are given by restriction of the corresponding differentials in . The cokernel of is the quotient complex .   "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-compelx-maps.html#exercise-10",
  "type": "Exercise",
  "number": "2.21",
  "title": "",
  "body": "Exercise 31. Show that the kernel, image, and cokernel of a complex map are indeed complexes. "
},
{
  "id": "def-2.15",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.15",
  "type": "Definition",
  "number": "2.22",
  "title": "",
  "body": "  A complex in is a sequence of complexes of -modules and chain maps between them such that for all . A complex of complexes is a diagram of the form   where is the module in homological degree in the complex . The th column corresponds to the complex , and every row is also a complex. The vertical maps are the differentials on each individual complex; the horizontal maps are the differentials on the complex of complexes.   "
},
{
  "id": "def-2.16",
  "level": "2",
  "url": "sec-compelx-maps.html#def-2.16",
  "type": "Definition",
  "number": "2.23",
  "title": "",
  "body": "  Definition 2.16. A short exact sequence of complexes is an exact complex in of the form Equivalently, a short exact sequence of complexes is a commutative diagram   where the rows are exact and the columns are complexes.   "
},
{
  "id": "sec-ses",
  "level": "1",
  "url": "sec-ses.html",
  "type": "Section",
  "number": "2.2",
  "title": "Short Exact Sequences",
  "body": "Short Exact Sequences  In this section, we will discuss short exact sequences of modules in a bit more detail. We note, however, that everything we will discuss here can be extended for short exact sequences of complexes, and that the generalization is not too difficult: one just needs to replace modules with complexes and maps of modules by maps of complexes.   Example 2.17. Fix a ring , and let and be -modules. Consider the inclusion of into the first component of the direct sum, and the projection map onto the second component of the product. These two maps fit into a short exact sequence These are sometimes called trivial short exact sequences.   On the one hand, the short exact sequences that look like this one are very important; on the other hand, not all short exact sequences are of this type.    Definition 2.18. We say that a short exact sequence splits or is a split short exact sequence if it is isomorphic to where is the inclusion of the first component and is the projection onto the second component.    Splitting Lemma   Consider the short exact sequence of -modules. The following are equivalent:   There exists a homomorphism of -modules such that .    There exists a homomorphism of -modules such that .    The short exact sequence splits.       First, we will show that c implies a and b. If the sequence splits, then consider an isomorphism of complexes   meaning that the diagram commutes and , and are isomorphisms of -modules, is the inclusion in the first component, and is the projection onto the second component. Let be the projection onto the first component, and be the inclusion onto the first component. Now consider the maps and . Then and Therefore, c implies a and b.  Now suppose that a holds, and let's show that the sequence splits. First, we need to show that . Every can be written as where , and so . This shows that . Moreover, if , then , so , and . Now when we restrict to becomes injective. We claim it is also surjective, and thus an isomorphism. Indeed, for any we can pick such that , since is surjective, and we showed that we can write for some . Then Finally, note that , so we conclude that , via the isomorphism given by Since and , so , where is the inclusion on the first factor. If denotes the projection onto the second factor, . Together, these two facts say that the following is a map of complexes:   Since is an isomorphism, so is our map of complexes, and thus our original sequence is a split exact sequence. This shows that a implies .  Now assume b holds. Every can be written as where and so . This shows that . Moreover, if , then Therefore, . Now is injective, since , and thus . Since , we conclude that , via the isomorphism Finally, let denote the inclusion of the first factor, and denote the projection onto the second factor. By construction, . Moreover, so . Together, these say that the diagram   commutes, and must then be an isomorphism of short exact sequences.      Given a split short exact sequence maps and satisfying the conditions of the Splitting Lemma are called splittings.     Remark 2.21. In the split short exact sequence the canonical projection and the usual inclusion are splittings.   Exercise 32. Let be a field. Show that every short exact sequence of -vector spaces splits.  The Rank-Nulity Theorem can be recast in this setting as a consequence of the fact that every short exact sequence of -vector spaces splits.  Exercise 33. Prove the Rank-Nulity Theorem using Exercise 32: show that given any linear transformation of -vector spaces,   But over a general ring, not every short exact sequence splits.   Example 2.22. The short exact sequence is not split. Indeed, does not have any 2 -torsion elements, so it is not isomorphic to .  An alternative explanation is that there is no splitting to the inclusion . On the one hand, every -module map is given by multiplication by a fixed integer , so a splitting would be of the form for some fixed . On the other hand, our proposed splitting must send 2 to 1 , but there is no integer solution to .   More surprisingly, a short exact sequence of the form is not necessarily split, not unless is the inclusion of the first component and is the projection onto the second component, as the next example will show.   Example 2.23. Consider the short exact sequence where is the inclusion of the subgroup generated by 2, so , and is the quotient onto that subgroup, meaning . This is not a split short exact sequence, because . Now let be the direct sum of infinitely many copies of . Then and the sequence with and is still exact. The middle term is indeed isomorphic to the direct sum of the other two: And yet this is not a split exact sequence: if we had a splitting of , then its restriction to the first factor would give us a splitting of , which we know cannot exist, since does not split.   Given splittings and for a short exact sequence as in Lemma 2.19, we can quickly show that our short exact sequence splits using the Five Lemma. To prove the Five Lemma, one needs to use diagram chasing. Diagram chasing is a common technique in homological algebra, which essentially consists of tracing elements around in the diagram. We will see some examples of diagram chasing in the next section.  The Five Lemma Exercise 34 Consider the following commutative diagram of -modules with exact rows: Show that if , and are isomorphisms, then is an isomorphism.   Remark 2.24. Given a short exact sequence, suppose we have -module homomorphisms and    such that and . Then we get an induced map such that the diagram   commutes. The Five Lemma guarantees that must be an isomorphism, so our diagram is an isomorphism of short exact sequences.   There are many ways in which -Mod behaves better than the category of groups, and this is one of them.   Remark 2.25. The Splitting Lemma does not hold if we replace -modules with the category Grp of groups. For example, consider the symmetric group on 3 elements and the inclusion of the alternating group in . Notice that is precisely the kernel of the sign map which sends even permutations to 0 and odd permutations to 1 . Therefore, is a short exact sequence. When writing exact sequences of nonabelian groups such as this one, one sometimes uses for instead of 0, to indicate that trivial group. So our short exact sequence is   Moreover, this exact sequence is not split, since is not abelian but is, and thus . However, any group homomorphism defined by sending the generator to any two cycle is a splitting for our short exact sequence, meaning signo .  Funny enough, there is no splitting for the inclusion , since there are no nontrivial homomorphisms has no elements of order 2, so a group homomorphism must send every 2-cycle in must be sent to the identity, but 2-cycles generate .   We will return to the topic of split short exact sequences when we talk about projective and injective modules.  Exercise 35. Fix a ring . Show that if is a free -module, then every short exact sequence of -modules splits.  "
},
{
  "id": "example-25",
  "level": "2",
  "url": "sec-ses.html#example-25",
  "type": "Example",
  "number": "2.24",
  "title": "",
  "body": " Example 2.17. Fix a ring , and let and be -modules. Consider the inclusion of into the first component of the direct sum, and the projection map onto the second component of the product. These two maps fit into a short exact sequence These are sometimes called trivial short exact sequences.  "
},
{
  "id": "def-2.18",
  "level": "2",
  "url": "sec-ses.html#def-2.18",
  "type": "Definition",
  "number": "2.25",
  "title": "",
  "body": "  Definition 2.18. We say that a short exact sequence splits or is a split short exact sequence if it is isomorphic to where is the inclusion of the first component and is the projection onto the second component.   "
},
{
  "id": "lem-2.19",
  "level": "2",
  "url": "sec-ses.html#lem-2.19",
  "type": "Lemma",
  "number": "2.26",
  "title": "Splitting Lemma.",
  "body": "Splitting Lemma   Consider the short exact sequence of -modules. The following are equivalent:   There exists a homomorphism of -modules such that .    There exists a homomorphism of -modules such that .    The short exact sequence splits.       First, we will show that c implies a and b. If the sequence splits, then consider an isomorphism of complexes   meaning that the diagram commutes and , and are isomorphisms of -modules, is the inclusion in the first component, and is the projection onto the second component. Let be the projection onto the first component, and be the inclusion onto the first component. Now consider the maps and . Then and Therefore, c implies a and b.  Now suppose that a holds, and let's show that the sequence splits. First, we need to show that . Every can be written as where , and so . This shows that . Moreover, if , then , so , and . Now when we restrict to becomes injective. We claim it is also surjective, and thus an isomorphism. Indeed, for any we can pick such that , since is surjective, and we showed that we can write for some . Then Finally, note that , so we conclude that , via the isomorphism given by Since and , so , where is the inclusion on the first factor. If denotes the projection onto the second factor, . Together, these two facts say that the following is a map of complexes:   Since is an isomorphism, so is our map of complexes, and thus our original sequence is a split exact sequence. This shows that a implies .  Now assume b holds. Every can be written as where and so . This shows that . Moreover, if , then Therefore, . Now is injective, since , and thus . Since , we conclude that , via the isomorphism Finally, let denote the inclusion of the first factor, and denote the projection onto the second factor. By construction, . Moreover, so . Together, these say that the diagram   commutes, and must then be an isomorphism of short exact sequences.   "
},
{
  "id": "def-2.20",
  "level": "2",
  "url": "sec-ses.html#def-2.20",
  "type": "Definition",
  "number": "2.27",
  "title": "",
  "body": "  Given a split short exact sequence maps and satisfying the conditions of the Splitting Lemma are called splittings.   "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "sec-ses.html#remark-15",
  "type": "Remark",
  "number": "2.28",
  "title": "",
  "body": " Remark 2.21. In the split short exact sequence the canonical projection and the usual inclusion are splittings.  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec-ses.html#exercise-11",
  "type": "Exercise",
  "number": "2.29",
  "title": "",
  "body": "Exercise 32. Let be a field. Show that every short exact sequence of -vector spaces splits. "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "sec-ses.html#exercise-12",
  "type": "Exercise",
  "number": "2.30",
  "title": "",
  "body": "Exercise 33. Prove the Rank-Nulity Theorem using Exercise 32: show that given any linear transformation of -vector spaces,  "
},
{
  "id": "example-26",
  "level": "2",
  "url": "sec-ses.html#example-26",
  "type": "Example",
  "number": "2.31",
  "title": "",
  "body": " Example 2.22. The short exact sequence is not split. Indeed, does not have any 2 -torsion elements, so it is not isomorphic to .  An alternative explanation is that there is no splitting to the inclusion . On the one hand, every -module map is given by multiplication by a fixed integer , so a splitting would be of the form for some fixed . On the other hand, our proposed splitting must send 2 to 1 , but there is no integer solution to .  "
},
{
  "id": "example-27",
  "level": "2",
  "url": "sec-ses.html#example-27",
  "type": "Example",
  "number": "2.32",
  "title": "",
  "body": " Example 2.23. Consider the short exact sequence where is the inclusion of the subgroup generated by 2, so , and is the quotient onto that subgroup, meaning . This is not a split short exact sequence, because . Now let be the direct sum of infinitely many copies of . Then and the sequence with and is still exact. The middle term is indeed isomorphic to the direct sum of the other two: And yet this is not a split exact sequence: if we had a splitting of , then its restriction to the first factor would give us a splitting of , which we know cannot exist, since does not split.  "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec-ses.html#exercise-13",
  "type": "Exercise",
  "number": "2.33",
  "title": "The Five Lemma.",
  "body": "The Five Lemma Exercise 34 Consider the following commutative diagram of -modules with exact rows: Show that if , and are isomorphisms, then is an isomorphism. "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "sec-ses.html#remark-16",
  "type": "Remark",
  "number": "2.34",
  "title": "",
  "body": " Remark 2.24. Given a short exact sequence, suppose we have -module homomorphisms and    such that and . Then we get an induced map such that the diagram   commutes. The Five Lemma guarantees that must be an isomorphism, so our diagram is an isomorphism of short exact sequences.  "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "sec-ses.html#remark-17",
  "type": "Remark",
  "number": "2.35",
  "title": "",
  "body": " Remark 2.25. The Splitting Lemma does not hold if we replace -modules with the category Grp of groups. For example, consider the symmetric group on 3 elements and the inclusion of the alternating group in . Notice that is precisely the kernel of the sign map which sends even permutations to 0 and odd permutations to 1 . Therefore, is a short exact sequence. When writing exact sequences of nonabelian groups such as this one, one sometimes uses for instead of 0, to indicate that trivial group. So our short exact sequence is   Moreover, this exact sequence is not split, since is not abelian but is, and thus . However, any group homomorphism defined by sending the generator to any two cycle is a splitting for our short exact sequence, meaning signo .  Funny enough, there is no splitting for the inclusion , since there are no nontrivial homomorphisms has no elements of order 2, so a group homomorphism must send every 2-cycle in must be sent to the identity, but 2-cycles generate .  "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec-ses.html#exercise-14",
  "type": "Exercise",
  "number": "2.36",
  "title": "",
  "body": "Exercise 35. Fix a ring . Show that if is a free -module, then every short exact sequence of -modules splits. "
},
{
  "id": "sec-les",
  "level": "1",
  "url": "sec-les.html",
  "type": "Section",
  "number": "2.3",
  "title": "Long Exact Sequences",
  "body": "Long Exact Sequences  A long exact sequence is just what it sounds like: an exact sequence that is, well, long. Usually, we use the term long exact sequence to refer to any exact sequence, especially if it is not a short exact sequence. So in particular, a long exact sequence does not literally have to be that long.  Long exact sequences arise naturally in various ways, and are often induced by some short exact sequence. The first long exact sequence one encounters is the long exact sequence on homology. All other long exact sequences are, in some way, a special case of this one. The main tool we need to build it is the Snake Lemma.  Snake Lemma   Consider the commutative diagram of -modules   If the rows of the diagram are exact, then there exists an exact sequence Given , pick such that , and such that . Then The picture to keep in mind (and which explains the name of the lemma) is the following:     If , then by commutativity, so . Similarly, if then . So   We claim that the sequence obtained by restriction is exact. On the one hand, we already know that the original maps satisfy , so their restrictions must satisfy this as well, guaranteeing that On the other and, if is such that , then by exactness of the original sequence there exists such that ; we only need to check that we can choose such satisfying . An indeed, by commutativity, any with satisfies and since is injective, we must have . So we have shown that the following is an exact sequence:   Similarly, if , the commutativity of the diagram guarantees that , and if , then . So the maps restrict to maps which then induce maps To make the notation less heavy, we denote the induced maps on the quotients by and . Again, the fact that automatically gives us that the restrictions satisfy so we only need to check equality. Consider such that , meaning that , meaning that . Let be such that . Since is surjective, there exists such that , and by commutativity, Then . Let be such that . Now in coker we have This concludes the proof of exactness of and coker .  We still need to show the parts of the statement related to the connecting homomorphism . Our definition of can be visualized as follows:   Let's recap the process in words. First, we fix . Since is surjective, we can always pick such that . Since ker , by commutativity we have so . Therefore, there exists such that . In fact, since is injective, there exists a unique such that . Our definition of sets The fact that is a homomorphism of -modules follows from the fact that all the maps involved are homomorphisms of -modules: given , and such that we have So Therefore, . Similarly, given any , and , so . We now need to show the following:   Points 2) and 3) together say that the sequence is exact, and this will complete the proof.  First, let's show that is well-defined. Ultimately, our definition of only involves one choice, when we pick such that ; we need to show that does not depend on the choice of . Given such that , by exactness we have . Therefore, there exists such that . Notice that is such that Thus our definition says that . Since , we conclude that , so for any choice of . Now consider any . Again, to show is well-defined, we need only to show it does not depend on the choice of such that . Consider such that and such that Note that and since we must have Thus and this concludes our proof that is well-defined.  Now we show 2): that .  If , then the only such that is . Therefore, , so . On the other hand, let be such that . That means that for any such that we must have for some . Let be such that . Then     so . Since ,     We conclude that , and this shows 2 .  Now we show 3 ), that is, .  Let be such that . In , this says that , so we can choose such that . Using commutativity and the fact that , we have     This shows that , and thus . Finally, if and , then         The map in the is the connecting homomorphism.    The proof of the is what we call a diagram chase, for reasons that may be obvious by now: we followed the diagram in the natural way, and everything worked out in the end. The Five Lemma is another classical example of a diagram chase.  Now that we have the , we can construct the long exact sequence in homology:  Long Exact Sequence in Homology   Given a short exact sequence in      there are connecting homomorphisms such that     is an exact sequence.    For each , we have short exact sequences     The condition that and are maps of complexes implies, by Lemma 2.4, that and take cycles to cycles, so we get exact sequences     Again by Lemma 2.4, the condition that and are maps of complexes also implies that and both take boundaries to boundaries, so that we get exact sequences     Let be any complex. The boundary maps on induce maps that send to 0 , so we get induced maps . Applying this general fact to , and , and putting all this together, we have a commutative diagram with exact rows   For any complex ,     and     The now gives us exact sequences     Finally, we glue all these together to obtain the long exact sequence in homology.     Remark 2.29. It's helpful to carefully consider how to compute the connecting homomorphisms in the long exact sequence in homology, which we can easily put together from the proof of the . Suppose that . When we view as an element in , we can find such that , since is surjective by assumption. Since is a map of complexes, we have     so . In fact, note that , so     Thus there exists such that . Finally,     So in summary, the recipe goes as follows: given , we find such that and such that , and      We will soon see that long exact sequences appear everywhere, and that they are very helpful. Before we see more examples, we want to highlight a connection between long and short exact sequences.   Remark 2.30. Suppose that     is a long exact sequence. This long exact sequence breaks into the short exact sequences     The first map is simply the inclusion of the submodule ker into , while the second map is the canonical projection onto the quotient. While it is clear that is injective and is surjective, exactness at the middle is less obvious. This follows from the exactness of the original complex, which gives .   The long exact sequence in homology is natural.  Naturality of the long exact sequence in homology   Any commutative diagram in    with exact rows induces a commutative diagram with exact rows     The rows of the resulting diagram are the long exact sequences in homology induced by each row of the original diagram, as in . So the content of the theorem is that the maps induced in homology by , and make the diagram commute. The commutativity of   follows from the fact that is a functor, so we only need to check commutativity of the square   that involves the connecting homomorphisms and . Consider the following commutative diagram:   Given , we need to check that in . To compute , we find a lift such that , and with , and set . So . On the other hand, to compute , we start by finding such that . By commutativity of the right back square   we can choose , since     Next we take such that , and set .  By commutativity of the middle square   we have     By our choice of , we have     and by commutativity of the front left square   we have     So we can take . Finally, this means , as we wanted to prove.     Remark 2.32. Let     be a short exact sequence in . We can think of as saying that the induced maps on homology and and the connecting homomorphism are all natural transformations. More precisely, consider the category SES of short exact sequences of -modules, which is a full subcategory of . Homology gives us functors SES -Mod that given a short exact sequence return the -modules , or ). A map between two short exact sequences then induces -module homomorphisms between the corresponding homologies. With this framework, says that , and and the connecting homomorphism are all natural transformations between the corresponding homology functors.   "
},
{
  "id": "thm-2.26",
  "level": "2",
  "url": "sec-les.html#thm-2.26",
  "type": "Theorem",
  "number": "2.37",
  "title": "Snake Lemma.",
  "body": "Snake Lemma   Consider the commutative diagram of -modules   If the rows of the diagram are exact, then there exists an exact sequence Given , pick such that , and such that . Then The picture to keep in mind (and which explains the name of the lemma) is the following:     If , then by commutativity, so . Similarly, if then . So   We claim that the sequence obtained by restriction is exact. On the one hand, we already know that the original maps satisfy , so their restrictions must satisfy this as well, guaranteeing that On the other and, if is such that , then by exactness of the original sequence there exists such that ; we only need to check that we can choose such satisfying . An indeed, by commutativity, any with satisfies and since is injective, we must have . So we have shown that the following is an exact sequence:   Similarly, if , the commutativity of the diagram guarantees that , and if , then . So the maps restrict to maps which then induce maps To make the notation less heavy, we denote the induced maps on the quotients by and . Again, the fact that automatically gives us that the restrictions satisfy so we only need to check equality. Consider such that , meaning that , meaning that . Let be such that . Since is surjective, there exists such that , and by commutativity, Then . Let be such that . Now in coker we have This concludes the proof of exactness of and coker .  We still need to show the parts of the statement related to the connecting homomorphism . Our definition of can be visualized as follows:   Let's recap the process in words. First, we fix . Since is surjective, we can always pick such that . Since ker , by commutativity we have so . Therefore, there exists such that . In fact, since is injective, there exists a unique such that . Our definition of sets The fact that is a homomorphism of -modules follows from the fact that all the maps involved are homomorphisms of -modules: given , and such that we have So Therefore, . Similarly, given any , and , so . We now need to show the following:   Points 2) and 3) together say that the sequence is exact, and this will complete the proof.  First, let's show that is well-defined. Ultimately, our definition of only involves one choice, when we pick such that ; we need to show that does not depend on the choice of . Given such that , by exactness we have . Therefore, there exists such that . Notice that is such that Thus our definition says that . Since , we conclude that , so for any choice of . Now consider any . Again, to show is well-defined, we need only to show it does not depend on the choice of such that . Consider such that and such that Note that and since we must have Thus and this concludes our proof that is well-defined.  Now we show 2): that .  If , then the only such that is . Therefore, , so . On the other hand, let be such that . That means that for any such that we must have for some . Let be such that . Then     so . Since ,     We conclude that , and this shows 2 .  Now we show 3 ), that is, .  Let be such that . In , this says that , so we can choose such that . Using commutativity and the fact that , we have     This shows that , and thus . Finally, if and , then      "
},
{
  "id": "def-2.27",
  "level": "2",
  "url": "sec-les.html#def-2.27",
  "type": "Definition",
  "number": "2.38",
  "title": "",
  "body": "  The map in the is the connecting homomorphism.   "
},
{
  "id": "thm-2.28",
  "level": "2",
  "url": "sec-les.html#thm-2.28",
  "type": "Theorem",
  "number": "2.39",
  "title": "Long Exact Sequence in Homology.",
  "body": "Long Exact Sequence in Homology   Given a short exact sequence in      there are connecting homomorphisms such that     is an exact sequence.    For each , we have short exact sequences     The condition that and are maps of complexes implies, by Lemma 2.4, that and take cycles to cycles, so we get exact sequences     Again by Lemma 2.4, the condition that and are maps of complexes also implies that and both take boundaries to boundaries, so that we get exact sequences     Let be any complex. The boundary maps on induce maps that send to 0 , so we get induced maps . Applying this general fact to , and , and putting all this together, we have a commutative diagram with exact rows   For any complex ,     and     The now gives us exact sequences     Finally, we glue all these together to obtain the long exact sequence in homology.   "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "sec-les.html#remark-18",
  "type": "Remark",
  "number": "2.40",
  "title": "",
  "body": " Remark 2.29. It's helpful to carefully consider how to compute the connecting homomorphisms in the long exact sequence in homology, which we can easily put together from the proof of the . Suppose that . When we view as an element in , we can find such that , since is surjective by assumption. Since is a map of complexes, we have     so . In fact, note that , so     Thus there exists such that . Finally,     So in summary, the recipe goes as follows: given , we find such that and such that , and     "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "sec-les.html#remark-19",
  "type": "Remark",
  "number": "2.41",
  "title": "",
  "body": " Remark 2.30. Suppose that     is a long exact sequence. This long exact sequence breaks into the short exact sequences     The first map is simply the inclusion of the submodule ker into , while the second map is the canonical projection onto the quotient. While it is clear that is injective and is surjective, exactness at the middle is less obvious. This follows from the exactness of the original complex, which gives .  "
},
{
  "id": "thm-2.31",
  "level": "2",
  "url": "sec-les.html#thm-2.31",
  "type": "Theorem",
  "number": "2.42",
  "title": "Naturality of the long exact sequence in homology.",
  "body": "Naturality of the long exact sequence in homology   Any commutative diagram in    with exact rows induces a commutative diagram with exact rows     The rows of the resulting diagram are the long exact sequences in homology induced by each row of the original diagram, as in . So the content of the theorem is that the maps induced in homology by , and make the diagram commute. The commutativity of   follows from the fact that is a functor, so we only need to check commutativity of the square   that involves the connecting homomorphisms and . Consider the following commutative diagram:   Given , we need to check that in . To compute , we find a lift such that , and with , and set . So . On the other hand, to compute , we start by finding such that . By commutativity of the right back square   we can choose , since     Next we take such that , and set .  By commutativity of the middle square   we have     By our choice of , we have     and by commutativity of the front left square   we have     So we can take . Finally, this means , as we wanted to prove.   "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "sec-les.html#remark-20",
  "type": "Remark",
  "number": "2.43",
  "title": "",
  "body": " Remark 2.32. Let     be a short exact sequence in . We can think of as saying that the induced maps on homology and and the connecting homomorphism are all natural transformations. More precisely, consider the category SES of short exact sequences of -modules, which is a full subcategory of . Homology gives us functors SES -Mod that given a short exact sequence return the -modules , or ). A map between two short exact sequences then induces -module homomorphisms between the corresponding homologies. With this framework, says that , and and the connecting homomorphism are all natural transformations between the corresponding homology functors.  "
},
{
  "id": "sec-hom",
  "level": "1",
  "url": "sec-hom.html",
  "type": "Section",
  "number": "3.1",
  "title": "<span class=\"process-math\">\\(\\Hom\\)<\/span>",
  "body": " There's No Place Like    We shape our s and then our s shape us.   Winston Churchill   From now on, let's fix a ring . Recall that whenever we say an -module , we mean a left -module; any general facts about left modules can be naturally converted into statements about right -modules, under small appropriate corrections. When is commutative, left and right module structures agree, so the distinction is not relevant.  Our goal is to get to know the category -Mod, which as we are about to discover is a very nice category. One of the many nice things about -Mod is that the Hom-sets have an extra structure. (Roughly speaking, a locally small category where the Hom-sets are objects in some other category is called an enriched category).  To make the notation less heavy, we write instead of for the Hom-set between and in -Mod. The arrows in are all the -module homomorphisms from to . This is a locally small category, meaning that the Hom-sets are actual sets, but more even is true: the Hom-sets are actually abelian groups, and when is commutative, they are even -modules.  Given is the -module homomorphism defined by When is a commutative ring, given and is the -module homomorphism defined by     Let and be -modules. Then is an abelian group under the sum defined above.  Let and be -modules over a commutative . Then is an -module.   The main reason we need commutativity for to be a module is that given any and , we need to be an -module homomorphism, so in particular for any and any we need So This holds whenever , but not in general.   Some Hom-sets can easily be identified with other well-understood modules.  Let be a commutative ring. Let be an -module, and an ideal in . Then we have the following isomorphisms of -modules:    .     for any .     .      Additive Functors    To split yourself in two is just about the most radical thing you can do.   Ani DiFranco   Since -Mod is a locally small category, we saw in Definition 1.34 that there are two Hom-functors from -Mod to , the covariant functor -Mod Set and the contravariant functor -Mod Set. In light of , we can upgrade these functors to land in , or in -Mod when is commutative, not just in . Note that while there are two Hom-functors, we will sometimes refer to the Hom functor when talking about properties that are common to both of them.  A functor that lands in , or in particular, can have some additional good properties.  Additive Functor   Let and be rings. A functor -Mod -Mod is an additive functor if for all .    Note that to say that is a covariant additive functor is to say that for all and , the map induced by is a homomorphism of abelian groups. Similarly, a contravariant additive functor is one such that is a homomorphism of abelian groups. Notice moreover that this definition makes sense more generally in any category whose objects have an abelian group structure.  is Additive Show that and are both additive functors.  Note that in we were purposely vague about where and land: these are additive functors whether we consider them as functors with target or target -Mod, when appropriate.  Additive functors have many nice properties.  Properties of Additive Functors   Let Mod -Mod be an additive functor.   Let denote the -map between any two -modules and . Then is the .    Let denote the zero -module. Then is the zero -module.          As a function defined on each fixed is a group homomorphism, so it must send to .    An -module is the zero module if and only if the zero and identity maps on coincide. Let be the image of the zero -module via . On the one hand, any functor must send identity maps to identity maps, so the identity map on the zero module must be sent to the identity on . On the other hand, we have shown that the zero map must be sent to the zero map on , so the zero and identity maps on must coincide, so .        Note that the category of chain complexes also has a similar structure to -Mod: given two maps of complexes , we define a map of complexes : given by It is routine to check that this again gives a map of complexes, and that this operation gives the -sets in the structure of an abelian group. In fact, this abelian group structure can be upgraded to an -module structure when is commutative, by setting for all . This allows us to talk about additive functors to and from the category , and there is a version of in .   Homology is Additive Show that homology is an additive functor.  Most functors between categories or modules or chain complexes are additive. In fact, we will spend the rest of this chapter studying three very important additive functors: the two functors, and a third functor we have yet to define.  Additive Functors Preserve Direct Sums Let and be rings and let -Mod -Mod be an additive functor. Show that for all -modules and ,    satisfies a stronger version of this property.    For all -modules , there are isomorphisms of abelian groups Moreover, when is commutative, these are in fact isomorphisms of -modules.  In particular, and     For each , let be the canonical projection map. Consider the map We claim this map is the desired isomorphism. We leave it as an exercise to show that is a homomorphism of abelian groups, and a homomorphism of -modules when is commutative; we focus on proving that is a bijection. First, take . Define a map This makes the diagram   commute, so that . This shows that us surjective. Now let us show that is injective. Suppose is such that . For each , let , so . By assumption, , which means that for all , and thus for all . So . We conclude that is an isomorphism.  Now consider the map where is the inclusion of the th factor. We leave it as an exercise to prove that is a homomorphism of abelian groups, and that whenever is commutative, is in fact a homomorphism of -modules.  Given , let   Then , so for each and each , and . This shows that is surjective.  Now assume , which implies that is the zero map for each . Consider any . For each . On the other hand, , so . We conclude that , and is injective.    These two properties, however, are consequences of and : is additive, and additive functors preserve finite direct sums.  Show that the isomorphisms in are natural on both components. More precisely, given any other family of -modules such that for each there exists , a map there exist -module maps making the following diagrams commute: In fact, one can show that more generally, behaves well with limits and colimits.  Let be any ring and consider -modules and .   For any inverse system , there is a natural isomorphism     For any direct system or -modules, there is a natural isomorphism    Moreover, when is commutative, these are isomorphisms of modules.   Exact Functors    My biggest problem is retaining the exact information.   David Cross   Another important property of is how it interacts with exact sequences. First, an important note about general additive functors:   Let -Mod -Mod be an additive functor. Thanks to , if , then Thus must send complexes to complexes, and in fact, induces a functor , which we also call . Now if is a homotopy between two maps of complexes, must preserve the identities for all , so is a homotopy between and .   While additive functors send complexes to complexes, they don't have to preserve exactness. Functors that do preserve exactness are very special.  Exact Functors   An additive functor -Mod -Mod is an exact functor if it preserves short exact sequences. When is covariant, this means that every short exact sequence is taken to the short exact sequence   When is contravariant, this means that any short exact sequence is taken to the short exact sequence     Functors are Exact iff They Commute with Homology Show that an additive functor is exact if it commutes with homology, that is, for all complexes and all ,   As we will soon see, most functors are not exact. However, many functors of interest preserve some exactness.  Left and Right Exact Functors   A covariant additive functor -Mod -Mod is left exact if it takes every exact sequence of -modules to the exact sequence of -modules, and right exact if it takes every exact sequence of -modules to the exact sequence of -modules     Left and Right Exact Functors   A contravariant additive functor -Mod -Mod is left exact if it takes every exact sequence of -modules to the exact sequence of -modules, and right exact if it takes every exact sequence of -modules to the exact sequence of -modules     Exactness and SESs The definitions above all stay unchanged if for each condition we start with a short exact sequence. For example, a covariant additive functor is left exact if and only if for every short exact sequence of -modules, is exact.   Left exact covariant functors take kernels to kernels, while right exact covariant functors take cokernels to cokernels: the kernel of fits in an exact sequence and applying a left exact functor gives us an exact sequence Exactness tells us that is the kernel of .  Similarly, the cokernel of fits into an exact sequence which any right exact functor will take to an exact sequence Exactness says that is the cokernel of .  Similarly, left exact contravariant functors take cokernels to kernels, and right exact contravariant functors take kernels to cokernels. A left exact contravariant functor will take the exact sequence to an exact sequence and exactness tells us that is the kernel of .  A right exact contravariant functor will take the exact sequence to the exact sequence and exactness says that is the cokernel of .   Exactness is preserved by natural isomorphisms.   Suppose that -Mod -Mod are naturally isomorphic additive functors. We claim that is exact if and only if is exact. Let's prove it in the case when and are covariant. Given any short exact sequence applying each of our functors yields complexes of -modules which may or may not be exact. Our natural isomorphism gives us an isomorphism of complexes   Isomorphisms of complexes induce isomorphisms in homology, so the top sequence is exact if and only if the bottom sequence is exact. Thus preserves the short exact sequence if and only if does.  A similar argument shows that is left (respectively, right) exact if and only if is left (respectively, right) exact; we leave the details as an exercise.   However, an additive functor does not have to be left exact nor right exact. There are even some functors that preserve exactness in the middle.  Homology is Exact in the Middle  The homology functor is exact in the middle: given a short exact sequence the exactness of the long exact sequence in homology says in particular that is exact for all . On the other hand, we claim that the homology functor is neither left exact nor right exact. More precisely, might fail to be injective and might fail to be surjective. Finding a counterexample amounts to finding a short exact sequence of complexes such that the connecting homomorphism in the long exact sequence in homology is not the zero map.  For example, consider the following complexes and maps of complexes:   Applying gives us which is not injective, so is not exact. Similarly, applying gives which is not surjective, so is not exact. Thus homology is neither left exact nor right exact, though it is exact in the middle.   But in general, an additive functor might fail to preserve exactness even in the middle.   Fix a prime and consider the functor which on objects is defined by given a homomorphism of abelian groups , we get an induced homomorphism of abelian groups and is postcomposition with . Consider the short exact sequence where is the multiplication by map, which sends , and is the canonical quotient map by the subgroup generated by .  Note that is the submodule of of elements killed by , which is generated by the class of , so . Moreover, so is the the submodule of of elements killed by , which is generated by and isomorphic to , so . Now is the map induced by multiplication by , so it is the zero map. The map is the canonical quotient by the subgroup generated by ; any element in corresponds to choosing an element of order , and thus in the subgroup generated by , so applying always results in . We conclude that . Finally, this shows that applying to the original short exact sequence gives us the complex which is not exact anywhere.   One amazing fact, however, is that even if a functor is not exact, it must always preserve split short exact sequences.  Additive Functors Preserve Split Exact Sequences Show that additive functors preserve split short exact sequences.   is Left Exact    One should always aim at being interesting, rather than exact.   Voltaire   We are now ready for our first important example of a left exact functor: is left exact.  is Left Exact   Let be an R-module.   The covariant functor is left exact: for every exact sequence of -modules, the sequence is exact.    The contravariant functor is left exact: for every exact sequence of -modules, the sequence is exact.       To make the notation less heavy, we will write and similarly   Since additive functors send complexes to complexes, as outlined in , we at least know that and are functors, so in particular and      We have two things to show:   Suppose that is such that . By definition, this means that . But is injective, so for any  We conclude that , and is injective.    Let be in the kernel of . Then , so for each , . Then , so there exists such that . Since is injective, this element is unique for each . So setting gives us a well-defined function .  We claim that is in fact an -module homomorphism. To see that, notice that if and , then so that .  Similarly, given any , so . Finally, this element satisfies for all , so and .       Again, we have two things to show:  is injective:  If for some , then . Consider any . Since is surjective, there exists such that . Then , so .    Let be in , so that . Given any , there exists such that , since is surjective. Let be the function defined by for some with . This function is well-defined, since whenever , say , and thus . Moreover, we claim that is indeed a homomorphism of -modules. If , and , then , so   Finally, this element is such that satisfies for all , so , and .        So preserves kernels, and sends cokernels to kernels.    However, is not right exact in general.   Consider the short exact sequence of abelian groups where the first map is the inclusion of into , and the second map is the canonical projection. The elements in the abelian group are cosets of the form , where , and whenever . While says that is exact, we claim that this cannot be extended to a short exact sequence, since the map is not surjective. On the one hand, there are no nontrivial homomorphisms from to either nor , since there are no elements in nor of order . This shows that   On the other hand, is nonzero: to give a homomorphism of abelian groups is to choose an element in of order . Since is an element of order 2 in , the map sending in to in is nonzero. So after applying , we get the exact sequence So this shows that is not an exact functor, only left exact.   Similarly, we can show that is not exact:   Let's apply to the short exact sequence This time, says that is exact. We claim that the last map is not surjective. First, we claim that . Indeed, if is a homomorphism of abelian groups, then for all we have So is an integer that is divisible by every integer, which is impossible unless . We conclude that , and thus . So our exact sequence above is actually By , , so the last map in our sequence can't possibly be surjective, so our sequence is not a short exact sequence.  The other fun consequence is that and we have an exact sequence we can now conclude that    The last observation is a common trick: once we know we have an exact sequence involving certain modules we do not know, we can sometimes calculate them exactly by studying the other modules and maps in the exact sequence.  We can use the left exactness of Hom to compute some modules of interest:   Let be a commutative ring and be a finitely presented -module. This means that has a presentation with finitely many generators and relations, which translates into an exact sequence of the form   Since and are free modules, we can think of the map as multiplication by a matrix with rows and columns, after we fix a basis for and . Applying to the exact sequence above, we get an exact sequence By , and . Moreover, we claim that is multiplication by the transpose of .  First, note that given a basis for , we get a dual basis for , where   Similarly, we have a dual basis for ; we might as well assume that we picked the canonical basis in both cases, so that we can use similar notation on both.  Now the map is also given by multiplication by a matrix, now having rows and columns. To calculate its column, we need to calculate , which is given by precomposition with , so ; this reads off the th row of . Thus is indeed multiplication by , and we have an exact sequence   In particular, we have shown that is the kernel of multiplication by .    "
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
  "id": "sec-tensor",
  "level": "1",
  "url": "sec-tensor.html",
  "type": "Section",
  "number": "3.2",
  "title": "Tensor Products",
  "body": "Tensor Products  Biadditive Maps and First Properties    Tenser, said the Tensor. Tension, apprehension, and dissension have begun.   Alfred Bester     Definition 3.18. Fix a ring , and consider:    a right -module ,    a left -module ,    an abelian group .    A function is -biadditive if for all , all , and all we have               .    When is a commutative ring, suppose that is also an -module. We say that a function is -bilinear if for all , all , and all we have               .      Note that an -bilinear function is an -biadditive function that satisfies      Example 3.19. The product on is an -biadditive function . The first two rules follow from distributivity of multiplication over the sum; the final rule is a consequence of the associativity of multiplication.  When is commutative, this is an -bilinear function.     Definition 3.20. Let be a right -module and let be a left -module. The tensor product of and is an abelian group together with an -biadditive function with the following universal property: for every abelian group and every -biadditive map , there exists a unique group homomorphism such that the following diagram commutes:     We will now show that tensor products exist and are unique up to isomorphism; in particular, we can talk about the tensor product of and .    Lemma 3.21. Let be any ring, be a right -module, and a left -module. The tensor product of and is unique up to unique isomorphism. More precisely, if and are two tensor products, then there exists a unique isomorphism such that     Proof. First, note that the universal property of the tensor product implies that there exists a unique such that   commutes. Since the identity map is such a map, it must be the only such map.  Similarly, there are unique maps and such that   both commute. Stacking these up, we get commutative diagrams   Note that the identity maps on and are homomorphisms and that would make each of these triangles commute:   By uniqueness, must be the identity on and must be the identity on . In particular, and are isomorphic, and the isomorphisms and are unique.      Theorem 3.22. Given any right -modules and any left -module , their tensor product exists, and it is given by the abelian group defined as follows:    Generators: For each pair of elements and , we have a generator .    Relations: the generators of satisfy the following relations, where , , and :         Proof. Let be the free abelian group on the set . In what follows, we identify a pair with the corresponding basis element for . Let be the subgroup of generated by     Let , and let denote the class of in the quotient. We claim that this abelian group is a tensor product for and , together with the map     Notice is the restriction of the quotient map to the basis elements of . Moreover, by construction of , the following identities hold:     Together, these make an -biadditive map. The map that sends each pair to the corresponding basis element is -bilinear by construction. Moreover, there is a natural quotient map , and these maps make the diagram   commute.  Now suppose that is any other abelian group, and let by any -biadditive map. Since is the free -module on induces a homomorphism of abelian groups such that , meaning for all and all .  Finally, the fact that is bilinear implies that . Therefore, induces a group homomorphism on . All this fits in the following commutative diagram:   Finally, this map we constructed satisfies , and since is generated by such elements, is completely determined by the images of , and thus unique.    The construction in Theorem 3.22 gives us generators for . These are usually called simple tensors. So any element in is of the form     Such expressions are not unique. For a cheap example, consider the relations we used to construct from the abelian group on , which gives us nontrivial ways to write the 0 element in :     This makes things unexpectedly tricky. For starters, the tensor product of two nonzero modules might be zero nevertheless. Also, whenever we try to define some -module homomorphism from into some other -module, we must carefully check that our map is well-defined, which is in principle not an easy task. Therefore, the easiest way to define some -module homomorphism from is to give some -bilinear map from into our desired -module.  In summary: the tensor product of and is generated by the simple tensors , but it's important to remember (though we're all bound to forget once or twice) that not all elements in are simple tensors. Moreover, even if and are nonzero, could very well be zero.   Remark 3.23. Two group homomorphisms coincide if and only if they agree on simple tensors, since these are generators for .    Remark 3.24. In any tensor product , the simple tensor is the zero element, and     for all and .    Elements in Tensor Products    In the beginning God said, the four-dimensional divergence of an antisymmetric, second rank tensor equals zero, and there was light, and it was good. And on the seventh day he rested.   Michio Kaku   Let's see some examples of how tensor products can be zero.   Example 3.25. We claim that , despite the fact that both of these -modules are nonzero. To see that, simply note that given any and any ,     Since is generated by simple tensors, which are all 0 , we conclude that .    Example 3.26. Consider the abelian group . Again, this is very much nonzero, and yet we claim that . For any simple tensor,       Example 3.27. Let and be distinct prime integers. Then has inverse modulo , say , and has an inverse modulo , say . Given any simple tensor in      Since all simple tensors are 0 and is generated by simple tensors, we conclude that .   More generally, the following holds:  Exercise 47. Show that if , then .  Of course not all tensor products are zero. A good method for showing that a particular element in a module is nonzero is to give a homomorphism from sending to some nonzero element. We apply this technique to tensor products: to show that a particular element in is nonzero, we construct a homomorphism from that takes no some nonzero element. This is typically easier for simple tensors: we need an -biadditive map out of that sends the corresponding pair to a nonzero element.   Example 3.28. Consider the abelian group . The map     is -bilinear, and thus it induces a homomorphism . Via this map, , so is nonzero in , and .   Moreover, not all elements in a tensor product are simple tensors.  Exercise 48. Let and consider the ideal . Show that in , the element is not a simple tensor.   Bimodules and When Tensor Products are Modules    Envy, like a false mirror, distorts the symmetry of the sweetest form.   Norm Macdonald   We can sometimes give the structure of an -module.   Remark 3.29. Let be a commutative ring, and let and be -modules. We can give the structure of an -module, as follows: given and a simple tensor ,     We can then extend this linearly to all other elements of . We leave it as an exercise to check that this does indeed make the abelian group into an -module.   Alternatively, over a commutative ring we can define the tensor product as follows:    Definition 3.30. Let be a commutative ring and and be -modules. The tensor product of and is an -module together with an -bilinear map  with the following universal property: for every -module and every -bilinear map there exists a unique -module homomorphism such that the following diagram commutes:     One can now check that if we take the abelian group , which is the unique abelian group which satisfies the universal property of the tensor product (as defined for a general ring ), and endow it with the -module structure defined in Remark 3.29, the resulting -module satisfies the universal property in Definition 3.30, and the argument we gave in Lemma 3.21 can be repurposed to show that this is the unique -module satisfying this universal property.   Remark 3.31. We can express the universal property of the tensor product in the framework of Definition 1.87. For simplicity, assume that is a commutative ring. Consider the functor -Mod Set that sends an -module to the set of -bilinear maps , and a map of -modules to the function of sets induced by post-composition of functions. The universal property of the tensor product is encoded in the representable functor -Mod Set together with the bilinear map . Indeed, this says that induces a natural isomorphism between and by sending each -module to the bijection     The fact that this is a bijection says that for every -bilinear map there exists a unique -module homomorphism such that   commutes. So this is indeed the universal property we described before.   More generally, has a module structure when one of or is a bimodule.    Definition 3.32. Fix rings and . An -bimodule is an abelian group together with a left -module structure and a right -module structure such that for all , and ,     One sometimes writes to indicate is an -bimodule. An -bimodule is an -bimodule.     Example 3.33.  a) Let denote the ring of matrices with entries in a ring . We can also view as an -bimodule via left and right multiplication of matrices.  b) Any two-sided ideal of a ring is an -bimodule.  c) Let be a commutative ring and let be any left -module. Then is also a right -module under the same module structure, by setting     Moreover, is also an -bimodule using both of these structures at once.  d) Let be a ring homomorphism. We can view as an -bimodule via     for and , where the right hand side is just multiplication in . Similarly, can be viewed as an -bimodule and as an -bimodule.  e) Let be a commutative ring of prime characteristic , meaning that contains a copy of , or equivalently, that     Then is an -bimodule with the left module structure given by the Frobenius map     and right module structure given by the usual multiplication on . More precisely, given ,     where the right hand side is just multiplication in .   Exercise 49. Let be an -bimodule and a left -module. Consider as a left -module via   Then is a left -module via   The map   is left -linear, and for any left -module and left -linear -biadditive map , there is a unique left -linear map such that . Similarly, for a left -module and an -bimodule is a right -module via   Then is a right -module via   and the map   is right -linear, and for any -module and right -linear -biadditive map , there is a unique right -linear map such that .   The Tensor Product Functor  We can also take tensor products of maps.    Lemma 3.34. Let be a ring, be a homomorphism of right -modules, and be a homomorphism of left -modules. There exists a unique homomorphism of abelian groups such that     for all and . When is commutative, this map is a homomorphism of -modules. Moreover, if and are -bimodules and is left -linear, then is also a homomorphism of left -modules, and if and are -bimodules and is right -linear, then is also a homomorphism of right -modules.    Proof sketch. The function     is -biadditive, and -bilinear when is commutative, and right or left -linear in the bimodule case, so the universal property of tensor products in each case gives the desired homomorphism and its uniqueness.      Lemma 3.35. Given -module maps and , the composition of satisfies         Proof. It's sufficient to check that these maps agree on simple tensors, and indeed they both take to .   We are particularly interested in tensor products because of the tensor functor.    Theorem 3.36. Let be a right -module. There is an additive covariant functor     that takes each -module to , and each -module homomorphism to the homomorphism of abelian groups .  When is commutative, we can view as an additive functor -Mod.    Proof. Let . First, note that preserves identities, meaning , since the identity map on agrees with on simple tensors. Moreover, preserves compositions, since by Lemma 3.35 we have     Therefore, is a functor. To check that it is an additive functor, we need to prove that for all . It is sufficient to check that the maps and agree on simple tensors. Indeed,     We conclude that .      Definition 3.37. Given a ring and a right -module , the functor is the tensor product functor.    Note that we were purposely vague on the target of the tensor product functor: when is commutative, we get both a functor -Mod and a functor -Mod -Mod. The two functors are essentially the same: the tensor product functor is the composition of functor -Mod -Mod followed by the forgetful functor -Mod .  We can similarly define the tensor product functor ; when is commutative, it turns out that the two constructions are essentially the same.    Lemma 3.38 (Commutativity of tensor products). Let be a commutative ring. There is a natural isomorphism . In particular, for all -modules and we have       Proof. One can check (exercise!) that the map given by is -biadditive, and -bilinear if is commutative. The universal property of the tensor product gives us a homomorphism of abelian groups or -modules, depending on the case, such that the diagram   commutes. Similarly, we get a map and a commutative diagram   Then agrees with the identity on on simple tensors, so it is the identity. Similarly, is the identity on , and these are the desired isomorphisms.  The statement about naturality is more precisely the following: for every -module maps and , our isomorphisms and make the diagram   commute. To check this, it's sufficient to check commutativity on simple tensors, and indeed       Lemma 3.39 (Associativity of tensors). Given a right -module , an -bimodule , and a left -module ,       Proof. Fix . The map     is -biadditive, so it induces a homomorphism of abelian groups     This map is in fact a homomorphism of -modules when is commutative. Moreover,     is also -biadditive, and it induces a homomorphism that sends to . Similarly, we can define a homomorphism     The composition of these two homomorphisms in either order is the identity on simple tensors, and thus they are both isomorphisms.      Lemma 3.40. Let be any ring. There is a natural isomorphism between and the identity functor on -Mod. In particular, for every left -module there is an isomorphism of -modules       Proof. First, note that is an -bimodule, so is a left -module. The map     is -biadditive (by the distributive laws), -bilinear (by associativity of the action on a module), and -linear, so it induces a homomorphism of -modules . By definition, is surjective. Moreover, the map     is a homomorphism of -modules, since     For every , and for every simple tensor, . This shows that is an isomorphism.  Finally, given any , since is -linear we conclude that the diagram   commutes, so our isomorphism is natural.    Similarly to the Hom functor, tensor behaves well with respect to arbitrary direct sums.    Theorem 3.41. Let be a right -module, and let be an arbitrary family of left -modules. Then the map     is an isomorphism of abelian groups in general, of -modules in the commutative case, of modules if each is an -bimodule, and of right -modules if is an -bimodule. Moreover, this isomorphism is natural: given two families of left -modules and , and left -module homomorphisms , the -module homomorphisms     give a commutative diagram       Proof. First, note that the function     is -bilinear, so it induces a homomorphism     For each , let denote the inclusion map . The universal property of the coproduct (which in the case of -modules, means the direct sum) gives an -module homomorphism     which we obtain by assembling the -module homomorphisms . It is routine to check that is the inverse of , which must then be an isomorphism. Finally, we can check naturality by checking commutativity of the square above, element by element:      Remark 3.42. By commutativity of the tensor product, we also get natural isomorphisms      The following follows as a corollary of Lemma 3.40 and Theorem 3.41:  Exercise 50. Show that if and are free -modules on bases and , respectively, then is the free -module on basis   In particular,     Example 3.43. Let be any ring and consider . Let and . We claim that the element is not a simple tensor. Suppose, by contradiction, that there exist such that     Since is a basis for the free module , we can write     Substituting above, we see that     But by Exercise 50, is a basis for the free -module , so we can now compare coefficients: since     we must have     But since is a unit and , we must have ; similarly, since is a unit and , we must have . But we have both and that are units, which is a contradiction. We conclude that is not a simple tensor.   One of the reasons tensor products are useful is that we can use tensor products to extend module structures to ring extensions.   Remark 3.44. Let be a ring homomorphism. Since is an -bimodule, the abelian group has a left -module structure for every left -module . Thus - determines a functor from -modules to -modules.     Definition 3.45. Let be a ring homomorphism. The extension of scalars from to is the functor -Mod -mod: for each -module , we get an -module with     and for each -module homomorphism we get the -module homomorphism .    This functor is closely related to restriction of scalars: we will soon show that restriction and extension of scalars are adjoint functors.    Definition 3.46. Let be a ring homomorphism. The restriction of scalars functor from to is the functor -mod -Mod that takes each -module to the -module with underlying abelian group and -module structure     induced by . Moreover, for each -module homomorphism we get the module homomorphism defined by .    Exercise 51. Check that restriction of scalars as defined above is indeed a functor.   Tensor is Right Exact  Tensor is right exact.    Theorem 3.47. Let be a right -module. The functor is right exact, meaning that for every exact sequence     the sequence     is exact.    Proof. Since additive functors send complexes to complexes, . We have two more things to show:   we can find such that . Therefore,   .   : Let . We have already shown that , so . Let be the canonical projection. By definition, .  Consider the map     where is such that . First, we should check this map is well-defined. To see that, suppose that is another element with , so that . Then , so . Therefore, modulo , and is well-defined.  Moreover, one can check (exercise!) that is -biadditive, so it induces a homomorphism of -modules , which we will denote by . We will show that is a left inverse of , so is injective. And indeed, given and , we have     We conclude that is injective, and thus       However, tensor is not exact.   Example 3.48. Consider the short exact sequence     Applying the functor , we get an exact sequence     However, we claim that is not injective. On the one hand, by Lemma 3.40 we have an isomorphism . On the other hand, we have seen in Example 3.25 that , so the map cannot possibly be injective.   We can now show that extension of scalars turns an -module into the -module with the same presentation.   Remark 3.49. Let be a ring, be a right -module, and be a left -module. We can compute by taking a presentation of      and tensoring with to get     so is the cokernel of the map induced by . We can also compute by taking a presentation of      and tensoring with to get     so is isomorphic to the cokernel of the map induced by .    "
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
  "id": "example-33",
  "level": "2",
  "url": "sec-tensor.html#example-33",
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
  "id": "remark-26",
  "level": "2",
  "url": "sec-tensor.html#remark-26",
  "type": "Remark",
  "number": "3.34",
  "title": "",
  "body": " Remark 3.23. Two group homomorphisms coincide if and only if they agree on simple tensors, since these are generators for .  "
},
{
  "id": "remark-27",
  "level": "2",
  "url": "sec-tensor.html#remark-27",
  "type": "Remark",
  "number": "3.35",
  "title": "",
  "body": " Remark 3.24. In any tensor product , the simple tensor is the zero element, and     for all and .  "
},
{
  "id": "example-34",
  "level": "2",
  "url": "sec-tensor.html#example-34",
  "type": "Example",
  "number": "3.36",
  "title": "",
  "body": " Example 3.25. We claim that , despite the fact that both of these -modules are nonzero. To see that, simply note that given any and any ,     Since is generated by simple tensors, which are all 0 , we conclude that .  "
},
{
  "id": "example-35",
  "level": "2",
  "url": "sec-tensor.html#example-35",
  "type": "Example",
  "number": "3.37",
  "title": "",
  "body": " Example 3.26. Consider the abelian group . Again, this is very much nonzero, and yet we claim that . For any simple tensor,     "
},
{
  "id": "example-36",
  "level": "2",
  "url": "sec-tensor.html#example-36",
  "type": "Example",
  "number": "3.38",
  "title": "",
  "body": " Example 3.27. Let and be distinct prime integers. Then has inverse modulo , say , and has an inverse modulo , say . Given any simple tensor in      Since all simple tensors are 0 and is generated by simple tensors, we conclude that .  "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "sec-tensor.html#exercise-26",
  "type": "Exercise",
  "number": "3.39",
  "title": "",
  "body": "Exercise 47. Show that if , then . "
},
{
  "id": "example-37",
  "level": "2",
  "url": "sec-tensor.html#example-37",
  "type": "Example",
  "number": "3.40",
  "title": "",
  "body": " Example 3.28. Consider the abelian group . The map     is -bilinear, and thus it induces a homomorphism . Via this map, , so is nonzero in , and .  "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "sec-tensor.html#exercise-27",
  "type": "Exercise",
  "number": "3.41",
  "title": "",
  "body": "Exercise 48. Let and consider the ideal . Show that in , the element is not a simple tensor. "
},
{
  "id": "remark-28",
  "level": "2",
  "url": "sec-tensor.html#remark-28",
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
  "id": "remark-29",
  "level": "2",
  "url": "sec-tensor.html#remark-29",
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
  "id": "example-38",
  "level": "2",
  "url": "sec-tensor.html#example-38",
  "type": "Example",
  "number": "3.46",
  "title": "",
  "body": " Example 3.33.  a) Let denote the ring of matrices with entries in a ring . We can also view as an -bimodule via left and right multiplication of matrices.  b) Any two-sided ideal of a ring is an -bimodule.  c) Let be a commutative ring and let be any left -module. Then is also a right -module under the same module structure, by setting     Moreover, is also an -bimodule using both of these structures at once.  d) Let be a ring homomorphism. We can view as an -bimodule via     for and , where the right hand side is just multiplication in . Similarly, can be viewed as an -bimodule and as an -bimodule.  e) Let be a commutative ring of prime characteristic , meaning that contains a copy of , or equivalently, that     Then is an -bimodule with the left module structure given by the Frobenius map     and right module structure given by the usual multiplication on . More precisely, given ,     where the right hand side is just multiplication in .  "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "sec-tensor.html#exercise-28",
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
  "id": "proof-16",
  "level": "2",
  "url": "sec-tensor.html#proof-16",
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
  "id": "remark-30",
  "level": "2",
  "url": "sec-tensor.html#remark-30",
  "type": "Remark",
  "number": "3.56",
  "title": "",
  "body": " Remark 3.42. By commutativity of the tensor product, we also get natural isomorphisms     "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "sec-tensor.html#exercise-29",
  "type": "Exercise",
  "number": "3.57",
  "title": "",
  "body": "Exercise 50. Show that if and are free -modules on bases and , respectively, then is the free -module on basis   In particular,   "
},
{
  "id": "example-39",
  "level": "2",
  "url": "sec-tensor.html#example-39",
  "type": "Example",
  "number": "3.58",
  "title": "",
  "body": " Example 3.43. Let be any ring and consider . Let and . We claim that the element is not a simple tensor. Suppose, by contradiction, that there exist such that     Since is a basis for the free module , we can write     Substituting above, we see that     But by Exercise 50, is a basis for the free -module , so we can now compare coefficients: since     we must have     But since is a unit and , we must have ; similarly, since is a unit and , we must have . But we have both and that are units, which is a contradiction. We conclude that is not a simple tensor.  "
},
{
  "id": "remark-31",
  "level": "2",
  "url": "sec-tensor.html#remark-31",
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
  "id": "exercise-30",
  "level": "2",
  "url": "sec-tensor.html#exercise-30",
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
  "id": "example-40",
  "level": "2",
  "url": "sec-tensor.html#example-40",
  "type": "Example",
  "number": "3.64",
  "title": "",
  "body": " Example 3.48. Consider the short exact sequence     Applying the functor , we get an exact sequence     However, we claim that is not injective. On the one hand, by Lemma 3.40 we have an isomorphism . On the other hand, we have seen in Example 3.25 that , so the map cannot possibly be injective.  "
},
{
  "id": "remark-32",
  "level": "2",
  "url": "sec-tensor.html#remark-32",
  "type": "Remark",
  "number": "3.65",
  "title": "",
  "body": " Remark 3.49. Let be a ring, be a right -module, and be a left -module. We can compute by taking a presentation of      and tensoring with to get     so is the cokernel of the map induced by . We can also compute by taking a presentation of      and tensoring with to get     so is isomorphic to the cokernel of the map induced by .  "
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
  "id": "example-41",
  "level": "2",
  "url": "sec-localization.html#example-41",
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
  "id": "example-42",
  "level": "2",
  "url": "sec-localization.html#example-42",
  "type": "Example",
  "number": "3.68",
  "title": "",
  "body": " Example 3.52 (Most important localizations). Let be a commutative ring.    For and , we usually write for .    When is the set of nonzerodivisors on , we call the total ring of fractions of . When is a domain, this is just the fraction field of , and in this case this coincides with the localization at the prime , as described below.    For a prime ideal in , we generally write for , and call it the localization of at . Given an ideal in , we sometimes write to refer to , the image of via the canonical map . Notice that when we localize at a prime , the resulting ring is a local ring . We can think of the process of localization at as zooming in at the prime . Many properties of an ideal can be checked locally, by checking them for for each prime .    "
},
{
  "id": "remark-33",
  "level": "2",
  "url": "sec-localization.html#remark-33",
  "type": "Remark",
  "number": "3.69",
  "title": "",
  "body": " Remark 3.53. If is a domain, the equivalence relation defining the localization simplifies to . In particular, is a localization of .  "
},
{
  "id": "example-43",
  "level": "2",
  "url": "sec-localization.html#example-43",
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
  "id": "exercise-31",
  "level": "2",
  "url": "sec-localization.html#exercise-31",
  "type": "Exercise",
  "number": "3.73",
  "title": "",
  "body": "Exercise 52. Show that for all -module homomorphisms , is a homomorphism of modules over . "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "sec-localization.html#exercise-32",
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
  "id": "exercise-33",
  "level": "2",
  "url": "sec-localization.html#exercise-33",
  "type": "Exercise",
  "number": "3.76",
  "title": "",
  "body": "Exercise 54. Let be a commutative noetherian ring, be a multiplicative set, be a finitely generated -module, and an arbitrary -module. Show that   In particular, if is prime,   "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "sec-localization.html#exercise-34",
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
  "id": "exercise-35",
  "level": "2",
  "url": "sec-hom-tensor.html#exercise-35",
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
  "body": "Projective Modules  Definition, Free Modules are Projective  While Hom and tensor are not exact functors in general, , and can be exact functors for carefully chosen modules . In this chapter, we introduce these three classes of modules (projective, injective, and flat modules) and study their properties. Throughout, we consider general rings and left modules.  Projective Module   Let be a ring. An -module is projective if given any surjective -module homomorphism and any -module homomorphism , there exists an -module homomorphism such that the diagram   commutes. projective module      The commutativity of the diagram   says that , where is the induced by . Whenever this happens, we say that is a lifting of , and that lifts, or that factors through . lift    There are projective modules over any ring, as the next result shows; in fact, free modules are always projective.  Free Modules are Projective   Free modules are projective.    Let be a free -module. Suppose we are given -module homomorphisms and such that is surjective. Fix a basis for . Since is surjective, for each we can choose such that . Consider the function given by . The universal property of free modules says that there exists an -module homomorphism that coincides with for all basis elements. Now so agrees with for all basis elements. Since generates , we conclude that .    Projective modules are precisely those that make the covariant functor exact.    Let be an -module. The functor is exact if and only if is projective.    By  is left exact. The statement is that is projective if and only for any short exact sequence the induced map is surjective. Say we are given a surjective map   The induced map is surjective if and only if for every there exists a lifting of , meaning . By , the existence of such a for all such surjective maps is precisely the condition that is projective.     This is really the definition of what a projective module is, but for those that have not seen category theory, the definition given is used.     For any ring is exact. More generally, if is any free -module, then is exact.    By , free modules, and in particular, are projective. By , must be exact for any free -module .    However, not every projective module is free. But before we see such examples, we need to know a bit more about projective modules.   Direct Summands  First, we show that we can rephrase the condition that a module is projective or injective in terms of split exact sequences.  Projective Modules and Splitting   An -module is projective if and only if every short exact sequence splits.     Consider a short exact sequence   If is projective, the identity map on lifts to a map , meaning that   commutes. This says that our map  is a splitting for our short exact sequence, which must then be split, by Lemma 2.19.   Conversely, suppose that every short exact sequence splits, and consider any diagram   Let be a free module that surjects onto - for example, the free module on a set of generators of - and fix a surjection . By assumption, the short exact sequence splits, so by there exists such that . Now since is free, we can define an -module map that such that   commutes, by sending each basis element to any lift of in via . Now set , and note that so is a lift of by .    We have seen that free modules are projective; what other modules are projective?  Direct Summand   An -module is a direct summand of an -module if there exists an -module such that . direct summand      Remark 4.8. Saying that is a direct summand of is equivalent to giving a splitting of the inclusion map , meaning that . As we have argued in , such a splitting gives   Essentially repeating the argument we used in , every element in can be written as where and , and because if then .  Note that when we are dealing with graded modules over a graded ring, the kernels and images of graded maps are graded modules, and the equality is a graded direct sum of graded modules.   Projective iff Direct Summand of Free Module   An -module is projective if and only if is a direct summand of a free -module. In particular, a finitely generated -module is projective if and only if is a direct summand of for some .     Let be a projective module, and fix a free module surjecting onto . If is finitely generated, we can take for some . The short exact sequence must split by , so is a direct summand of .   Now suppose is a direct summand of a free module . In particular, we have an inclusion map that splits, so it comes together with a projection map such that . Given any diagram   we can define an -module homomorphism such that , so that the following diagram commutes:   Setting , we do indeed obtain , since      Remark 4.10. While every module is a quotient of a free module , so that we always have a surjection , not every module embeds into a free module; and even if is a submodule of some free module , the inclusion map is not necessarily split. On the other hand, as we showed in that is projective if and only if we can write it as a quotient of a free module , say , and splits, so that in fact embeds into and that map splits.     Let be any ring.   Every direct summand of a projective module is projective.    Every direct sum of projective modules is projective.          Suppose for some projective module . By , there exists a free -module and an -module such that . Then , and by this implies is projective.    Let be a family of projective modules. By , there exist free modules such that each is a direct summand of . Therefore, is a direct summand of , which is also free. By , this implies that is projective.       We are finally ready to give examples showing that projective modules are not necessarily free.  Projective but not Free Module  Example 4.12. The ring can be written as a direct sum of the ideals   Indeed, and , so . By , and are projective -modules. However, and are not free. This can be explained numerically: every finitely generated free -module is of the form , so it has elements for some , while and have and elements respectively.   Finally, to emphasize its importance we record here an easy result that we have used repeatedly at this point, and which will be very important later on.    For every -module , there exists a free module surjecting onto . If is finitely generated, we can take to be finitely generated.    We will often need only a weaker version of this: that every module is a quotient of a projective module.      Projective modules are exactly the modules that make exact.    Here are other equivalent characterizations of a projective module :   Given any surjective -module homomorphism and any -module homomorphism , there exists an -module homomorphism such that the diagram   commutes.     is the direct summand of a free module    Every short exact sequence splits.       Free modules are projective. Projective modules are free in commutative rings that are either local or graded.    For every module , there exists a free module surjecting into .     "
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
  "id": "remark-35",
  "level": "2",
  "url": "sec-projective.html#remark-35",
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
  "id": "remark-36",
  "level": "2",
  "url": "sec-projective.html#remark-36",
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
  "id": "example-44",
  "level": "2",
  "url": "sec-projective.html#example-44",
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
  "id": "outcomes-1",
  "level": "2",
  "url": "sec-projective.html#outcomes-1",
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
  "body": "Injective Modules  Definition and Baer's Criterion  Injective modules are dual to projectives.  Injective Module   An -module is injective if given an injective -module homomorphism and an -module homomorphism , there exist an -module homomorphism such that   commutes.    These are precisely the modules such that is exact.    An -module is injective if and only if is exact, meaning that for every short exact sequence we get an exact sequence     By , is left exact, so for any short exact sequence we get an exact sequence   So the content of the theorem is that is injective if and only if for every injective -module homomorphism , the induced map is surjective. Now notice that is surjective if and only if every lifts to some , meaning   commutes. That is precisely what we want for to be injective.    Giving examples of injective modules is much harder than giving examples of projective modules, but we will see some examples later. First, we prove some properties of injective modules.  The class of injectives modules is closed for products and finite direct sums.    Given any family of injective modules, is injective.    Let be the projection onto the th factor. Given any diagram   the fact that is injective gives us -module homomorphisms such that   commutes for each . Now the -module homomorphism makes the diagram   commute, so is injective.      If is an injective -module, then so are and .    Any diagram   can be extended to a map by composing with the inclusion of the first factor. Since is injective, there exists such that   commutes. Let be the projection onto , so that . Now if we set ,        Baer Criterion   An -module is injective if and only if every -module homomorphism from an ideal in can be extended to the whole ring, meaning that there exists making the diagram   commute.    On the one hand, if is injective then our condition is simply a special case of the definition of injective module. On the other hand, suppose that this condition holds, and consider any diagram   To simplify notation, let’s assume our map is indeed the inclusion of the submodule , so we can write for the image of in . Consider the set   First, notice is nonempty, since . Moreover, we can partially order by setting if and . So we have a nonempty partially ordered set; let’s show we can apply Zorn’s Lemma to it.  Given a chain in , meaning a sequence of nested submodules and maps that extend all with , let , and define   Since all the are homomorphisms of -modules, this map is indeed a map of -modules. Moreover, is well-defined, since the whenever . By construction, this map extends all the , so we conclude that is an upper bound for our chain. Moreover, follows immediately from our construction, and since each extends , so does . We conclude that , and more generally that any chain in has an upper bound in . So Zorn’s Lemma applies.  By Zorn’s Lemma, has a maximal element, say . We claim that . Suppose not, and let be an element not in . One can check that is an ideal in , and that is an -module homomorphism.  By assumption, we can extend to an -module homomorphism , which we will write as as well. Now the -module homomorphism is well-defined by construction, since any satisfies , and if then . Finally, this map agrees with on , and thus it agrees with on , so and . By the maximality of , we conclude that , and thus , which is a contradiction. We conclude that . Therefore, makes the diagram   commute.     Divisible Modules  It is very easy to see that every -module is a quotient of a free module. The dual statement is true as well, but it is a little more delicate.  Divisible Module   An -module is divisible if for every nonzero and every there exists such that .     Remark 4.22. Given , and an -module , the multiplication by map is an -module homomorphism. The module is divisible if and only if multiplication by is surjective for all nonzero .   Divisible Modules   The set of rational numbers , considered as a module over the ring of integers , is a divisible module. This is because for any nonzero integer , you can find a rational number such that is still a rational number.    Divisible Modules Closed Under Quotients   Any quotient of a divisible module is also divisible.    Let be a divisible -module and be a submodule of . Let and  . By assumption, there exists such that . The image of in is still a solution to , so indeed is divisible.    Closure Properties of Divisible Modules   Divisible modules are closed under taking submodules, quotients, direct sums, and localizations.    Injective Modules Divisible in Domains   Over a domain, every injective module is divisible.    Suppose that is an injective -module, where is a domain. Fix and . Since is a domain, we have for any . In particular, each element in can be written uniquely as for some . In particular, the map of -modules   is well-defined. Since is injective, we can extend this to a homomorphism . Finally, is an element such that , and is divisible.    This not true in general if we do not assume is a domain.  Injective but not Divisible Module  Example 4.25. Let be a field and . On the one hand, is not a divisible -module, since there is no such that . On the other hand, is actually an injective module over itself, although we do not have the tools to justify that this is indeed an injective -module.    The converse of does not hold in general, and quotients of injective modules are not necessarily injective.  Injective Modules not Closed Under Quotients Exercise 57. Let , where is a field, let be the fraction field of . The -module is divisible but not injective.  But the converse of does hold for some special classes of rings.  Injective iff Divisible in PID   Let be a principal ideal domain. An -module is injective if and only it is divisible.    Given , we only need to show that divisible modules are injective. By Baer’s Criterion, we only need to show that any map from an ideal to can be extended to the whole ring. So let be a divisible -module, and consider any map from an ideal to . If , we could extend our map by taking the map from to , so we might as well assume that . By assumption, for some , and since is divisible, there exists such that . Now consider the multiplication by map, For every , so extends . Therefore, by Theorem 4.18, is injective.    Injectives Closed Under Quotients in PIDs   Over a principal ideal domain, quotients of injective modules are injective.    If is injective, it is also divisible, by . Given any submodule , any , and a nonzero , there exists such that , and so this also holds in . Then is divisible, and thus injective by . Using fancy words you might learn in Commutative Algebra II, this ring is an example of a complete intersection, which is a subclass of Gorenstein rings. Moreover, - this is something you’d learn about in Commutative Algebra II. Now it turns out (and this is a nontrivial fact) that Gorenstein rings of dimension 0 are injective modules over themselves.     Given an injective abelian group, we can always use it to construct an injective -module over our favorite ring .    Given an injective abelian group and a ring is an injective -module.    Let . This abelian group is an -module, via   We claim that is actually an injective -module. By , it is sufficient to prove that is an exact functor. By , is naturally isomorphic to . This last functor is the composition of   On the one hand, is naturally isomorphic to the identity on -Mod, by , so it is exact. On the other hand, is an injective -module, so is exact by . The composition of exact functors is exact, and thus is exact.     Example 4.29. Since is a divisible abelian group, by for any ring the -module is injective.    Every Module Embeds into an Injective Module  When we talked about projective modules, we showed that every module is a quotient of a projective - in fact, every module is a quotient of a free module. The dual statement is true as well: that every module embeds into an injective module. We will soon see that these two statements are extremely important.  While the statement about projectives is relatively simple - it’s essentially a consequence of the universal property of free modules - the fact about injectives is a lot more delicate; the work we just did on divisible modules was precisely so we could show this deep and important fact.  First, we show that every abelian group can be embedded into an injective abelian group.    Every abelian group is a submodule of some injective abelian group.    On the one hand, is a quotient of some free abelian group, say . Now embeds in , and thus embeds into a quotient of . By Example 4.20, is an injective abelian group, and by Corollary is an injective abelian group, since is a noetherian ring. By , any quotient of is also injective, so we have shown that embeds into an injective abelian group, say .  In fact, the proof above can be repeated over any PID: if is a PID, we can show that any -module embeds into an injective module, and in fact embeds into some number of copies of the fraction field .    We can finally show that over any ring, every module can be embedded into an injective module.    Every -module is a submodule of some injective -module.    First, by we can view as a subgroup of some injective abelian group . Let be the inclusion map and .  By , is an injective -module. Since Hom is left exact, by , preserves the inclusion , so we have an inclusion . Now consider the map   This is an -module homomorphism:   Given , so .    Given , and , so .     Moreover, if then . So is injective, and thus composing with our previous inclusion gives us an inclusion of into the injective -module . However, the inclusion is a priori only a map of abelian groups, so we should check that is indeed -linear. In order to do this, we need to be careful (at least in the case when is not commutative) with how we defined the left -module structure on in Exercise 56: this is a situation where we view as a -bimodule and as a left -module, so is a left -module via   The map we need to show is -linear is Regarding as a simple inclusion, simply views the element as an element of ; to simplify notation, we drop the : so for each is the map given by For every , and ,   so . This shows that is an inclusion of -modules.    And finally, just like we did for projectives, we can characterize injectives in terms of split short exact sequences.    An -module is injective if and only if every short exact sequence splits.    Let be an injective -module, and consider any short exact sequence Since is injective, there exists a map making   commute, and such a gives a splitting for our short exact sequence.  Conversely, suppose that every short exact sequence splits, and consider a diagram   By , embeds into some injective -module , say by the inclusion . By assumption, the short exact sequence splits, so there exists a map such that . Since is injective, we can lift through , obtaining an -module homomorphism such that   commutes. Now satisfies    commutes.    Before we move on from injective modules, let us say a word about how the story continues. The next chapter is quite beautiful, and it is a shame we have no time to discuss it in detail this semester.  We proved above that every module is a submodule of some injective module. One can even do better and talk about the smallest injective module that embeds in; this is called the injective hull of . One could describe by saying that it is the intersection of all the injective modules that contain , but this is not a very practical description. Injective hulls can also be described through the theory of essential extensions, a topic which we do not have time to discuss this semester. We leave the definition here just for fun, but we do not have the time to talk about it at length.    Let . We say is an essential extension of if every nonzero submodule intersects nontrivially, meaning . More generally, an injective map is an essential extension if is an essential extension in the sense above.    One then shows that an -module is injective if and only if it has no proper essential extensions . This proves that a maximal essential extension of is injective, and that there are no other injective modules with of . Moreover, one can show that any two maximal essential extension of are isomorphic - and thus we can talk about the maximal essential extension of , up to isomorphism, which is  But the theory of injectives, and injective hulls in particular, is much more complicated than the theory of projectives. When is a finitely generated module, we can always find a finitely generated projective (even free!) module surjecting onto ; in contrast, the injective hull might not be finitely generated - in fact, is typically not finitely generated even when is cyclic.  The story of the structure of injective modules then continues in a beautiful way. Over a noetherian ring, it turns out that every injective module can be decomposed into a direct sum of injective modules of the form , where is a prime ideal in . Moreover, the injective modules are the indecomposable injective modules, so the basic building blocks of injective modules. One can in fact compute the injective hull of any finitely generated -module very explicitly. A lot of this was proved in Eben Matlis’ beautiful PhD thesis [Mat58], but sadly we do not have time for the details this semester. The details, however, are very important, for example to develop the theory of local cohomology - a topic which we will briefly mention later on.      Injective modules make exact.    The Baer Criterion tells us that a module is injective if and only if a map from an ideal to can be extended to all of .    In a domain injective modules are divisible and in a PID divisible modules are injective.    Every -module is a submodule of an injective module.     "
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
  "body": "Baer Criterion   An -module is injective if and only if every -module homomorphism from an ideal in can be extended to the whole ring, meaning that there exists making the diagram   commute.    On the one hand, if is injective then our condition is simply a special case of the definition of injective module. On the other hand, suppose that this condition holds, and consider any diagram   To simplify notation, let’s assume our map is indeed the inclusion of the submodule , so we can write for the image of in . Consider the set   First, notice is nonempty, since . Moreover, we can partially order by setting if and . So we have a nonempty partially ordered set; let’s show we can apply Zorn’s Lemma to it.  Given a chain in , meaning a sequence of nested submodules and maps that extend all with , let , and define   Since all the are homomorphisms of -modules, this map is indeed a map of -modules. Moreover, is well-defined, since the whenever . By construction, this map extends all the , so we conclude that is an upper bound for our chain. Moreover, follows immediately from our construction, and since each extends , so does . We conclude that , and more generally that any chain in has an upper bound in . So Zorn’s Lemma applies.  By Zorn’s Lemma, has a maximal element, say . We claim that . Suppose not, and let be an element not in . One can check that is an ideal in , and that is an -module homomorphism.  By assumption, we can extend to an -module homomorphism , which we will write as as well. Now the -module homomorphism is well-defined by construction, since any satisfies , and if then . Finally, this map agrees with on , and thus it agrees with on , so and . By the maximality of , we conclude that , and thus , which is a contradiction. We conclude that . Therefore, makes the diagram   commute.   "
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
  "id": "remark-37",
  "level": "2",
  "url": "sec-injective.html#remark-37",
  "type": "Remark",
  "number": "4.20",
  "title": "",
  "body": " Remark 4.22. Given , and an -module , the multiplication by map is an -module homomorphism. The module is divisible if and only if multiplication by is surjective for all nonzero .  "
},
{
  "id": "example-45",
  "level": "2",
  "url": "sec-injective.html#example-45",
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
  "id": "example-46",
  "level": "2",
  "url": "sec-injective.html#example-46",
  "type": "Example",
  "number": "4.25",
  "title": "Injective but not Divisible Module.",
  "body": "Injective but not Divisible Module  Example 4.25. Let be a field and . On the one hand, is not a divisible -module, since there is no such that . On the other hand, is actually an injective module over itself, although we do not have the tools to justify that this is indeed an injective -module.   "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "sec-injective.html#exercise-36",
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
  "body": "Injective iff Divisible in PID   Let be a principal ideal domain. An -module is injective if and only it is divisible.    Given , we only need to show that divisible modules are injective. By Baer’s Criterion, we only need to show that any map from an ideal to can be extended to the whole ring. So let be a divisible -module, and consider any map from an ideal to . If , we could extend our map by taking the map from to , so we might as well assume that . By assumption, for some , and since is divisible, there exists such that . Now consider the multiplication by map, For every , so extends . Therefore, by Theorem 4.18, is injective.   "
},
{
  "id": "lem-4.27",
  "level": "2",
  "url": "sec-injective.html#lem-4.27",
  "type": "Corollary",
  "number": "4.28",
  "title": "Injectives Closed Under Quotients in PIDs.",
  "body": "Injectives Closed Under Quotients in PIDs   Over a principal ideal domain, quotients of injective modules are injective.    If is injective, it is also divisible, by . Given any submodule , any , and a nonzero , there exists such that , and so this also holds in . Then is divisible, and thus injective by . Using fancy words you might learn in Commutative Algebra II, this ring is an example of a complete intersection, which is a subclass of Gorenstein rings. Moreover, - this is something you’d learn about in Commutative Algebra II. Now it turns out (and this is a nontrivial fact) that Gorenstein rings of dimension 0 are injective modules over themselves.    "
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
  "id": "example-47",
  "level": "2",
  "url": "sec-injective.html#example-47",
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
  "id": "outcomes-2",
  "level": "2",
  "url": "sec-injective.html#outcomes-2",
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
  "body": "Flat Modules  Definition  Finally, we turn to the modules that make the tensor product exact.  Flat Module   An -module is said to be flat if is an exact functor.     Remark 4.35. By , - is right exact. Therefore, is flat if and only if for every injective -module map ,    Direct Summands of Flat Modules are Flat   Given a family of -modules , the direct sum is flat if and only if every is flat. In particular, direct summands of flat modules are flat.    Given a family of -module homomorphisms , there is an -module homomorphism which is injective if and only if every is injective.  Let be an injective -module homomorphism. There is a commutative diagram where the horizontal maps are the isomorphisms from . In particular, is injective if and only if is injective. Moreover, is injective if and only if each component is injective, meaning is injective for all .  On the one hand, is flat if and only if for every injective map , the corresponding is injective. On the other hand, all the are flat if and only if for every injective map is injective for all , or equivalently, as explained above, if is injective for any given injective map . This translates into the equivalence we want to show.    All projectives are flat.  Every Projective Module is Flat   Let be any ring. Every projective -module is flat.    First, recall that is naturally isomorphic to the identity functor, by Lemma 3.40, and thus exact (see Remark 3.11). This shows that is flat, and thus any free module, being a direct sum of copies of , must also be flat by . Finally, every projective module is a direct summand of a free module, by . Direct summands of flat modules are flat, by , so every projective module is flat.    We can test whether a given module if flat by looking at the finitely generated submodules.  Flatness and Finitely Generated Submodules   If every finitely generated submodule of is flat, then is flat.    Let be an injective map of -modules. We want to show that is injective. Suppose that . We are going to construct a finitely generated submodule , with the inclusion, and an element such that and . Once we do that, our submodule is finitely generated, and thus flat by assumption, so is injective; therefore, and thus we must have . Therefore, is injective, and we conclude that is flat.  Let’s say that . In , we constructed the tensor product as a quotient of the free module on by the submodule with all the necessary relations we need to impose. This gives us a short exact sequence The fact that means we can rewrite this element as for some . This element is a linear combination of elements of finitely many . Let be all the -coordinates of those elements.  Now we take to be the finitely generated submodule of generated by and , and . Now and as desired.    The reason we needed to add in these extra elements is that a priori is not necessarily a submodule of , so we do not necessarily have in without adding in all relations that make it true.   Torsion Submodules  Torsion Submodule   Let be a domain and be an -module. The torsion submodule of is The elements of are called torsion elements , and we say that is torsion if . Finally, is torsion free if .    Closure Properties of Torsion Free Modules   Torsion free modules are closed under taking submodules, quotients, direct sums, and localizations.    Flat Implies Torision Free in Domains   If is a domain and is a flat -module, then is torsion free.    Let be the fraction field of , which is a torsion free -module. Now is a -vector space, so isomorphic to a direct sum of copies of . In particular, is torsion free as an -module. Since is flat, the inclusion induces an injective -module map and since , by , we conclude that is isomorphic to a submodule of . By , submodules of torsion free modules are also torsion free, so is torsion free.    In general, the converse does not hold.  Torsion Free but not Flat Module  Example 4.41. Let be a field and . Consider the ideal . This is a submodule of the torsion free module , and thus torsion free by . However, it is not flat. For example, when we apply to the inclusion we obtain a map of -vector spaces   This map cannot possibly be injective: is a -dimensional -vector space, while is -dimensional.   The converse does hold over a PID.  Flat iff Torsion Free in PID   If is a principal ideal domain, an -module is flat if and only if it is torsion free.     This is just a special case of .   Suppose is a torsion free finitely generated -module. The structure theorem for PIDs says that must be isomorphic to a direct sum of copies of cyclic modules. The cyclic module has torsion (all the elements are killed by ) unless . Therefore, must be isomorphic to a direct sum of copies of , and thus free. By , is projective, and by projectives are flat, so is flat.  Now let be any torsion free -module. All of the finitely generated submodules of are also torsion free by , and thus flat by what we have shown so far. By , must be flat.    Not all flat modules are projective.  Flat but not Projective Module  Example 4.43. The -module is torsion free and thus flat, by . However, is not a projective -module. Suppose by contradiction, that is a projective -module. By , must be a direct summand of a free module, say . Consider the inclusion , and pick such that the image of contains some element with a nonzero entry in the component. Now consider the projection onto the th factor. By assumption, the composition is nonzero. However, there are no nontrivial abelian group homomorphisms , contradicting the fact that is nonzero. We conclude that is not projective.   However, for finitely generated modules over a commutative noetherian local ring, every flat module is free, and thus flat, projective, and free all coincide. However, to prove that we need a little bit of commutative algebra, which we introduce in the next section.  Finally, here is a very important example: localization is flat.  Flatness of Localization   Let be a commutative ring, and a multiplicative subset of . Then is flat over .    By , tensoring with is localizing at . But localization is exact, so tensoring with is exact, and thus is a flat -module.     If is a domain then its fraction field is a flat module.                        "
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
  "id": "remark-38",
  "level": "2",
  "url": "sec-flat.html#remark-38",
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
  "body": "Flatness and Finitely Generated Submodules   If every finitely generated submodule of is flat, then is flat.    Let be an injective map of -modules. We want to show that is injective. Suppose that . We are going to construct a finitely generated submodule , with the inclusion, and an element such that and . Once we do that, our submodule is finitely generated, and thus flat by assumption, so is injective; therefore, and thus we must have . Therefore, is injective, and we conclude that is flat.  Let’s say that . In , we constructed the tensor product as a quotient of the free module on by the submodule with all the necessary relations we need to impose. This gives us a short exact sequence The fact that means we can rewrite this element as for some . This element is a linear combination of elements of finitely many . Let be all the -coordinates of those elements.  Now we take to be the finitely generated submodule of generated by and , and . Now and as desired.   "
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
  "id": "example-48",
  "level": "2",
  "url": "sec-flat.html#example-48",
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
  "id": "example-49",
  "level": "2",
  "url": "sec-flat.html#example-49",
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
  "id": "example-50",
  "level": "2",
  "url": "sec-flat.html#example-50",
  "type": "Example",
  "number": "4.47",
  "title": "",
  "body": " If is a domain then its fraction field is a flat module.  "
},
{
  "id": "outcomes-3",
  "level": "2",
  "url": "sec-flat.html#outcomes-3",
  "type": "Summary",
  "number": "4.3",
  "title": "",
  "body": "                   "
},
{
  "id": "commutative-local-rings",
  "level": "1",
  "url": "commutative-local-rings.html",
  "type": "Section",
  "number": "4.4",
  "title": "Commutative Local Rings",
  "body": "Commutative Local Rings  We have shown that   Over a local ring, these three notions actually coincide. To show this, we need a little bit of commutative algebra. First, some notation: when is a local ring, meaning has a unique maximal ideal , we write to denote the ring and its maximal ideal. Now note that for any -module , the module is annihilated by , so it is also a module over a ring , which is a field.  The following is a classical result in commutative algebra, known by some as Nakayama’s Lemma. As noted in [Mat89, page 8], Nakayama himself claimed that this should be attributed to Krull and Azumaya, but it’s not clear which of the three actually had the commutative ring statement first. So some authors (eg, Matsumura) prefer to refer to it as NAK. There are actually a range of statements, rather than just one, that go under the banner of Nakayama’s Lemma a.k.a. NAK.  Theorem . Let be a local ring, and be a finitely generated module. If , then .  The theorem above is the theorem most commonly referred to as NAK. The proof involves only elementary tools, and a fun linear algebra-inspired trick called the Determinantal Trick. While we will not include the details here, they can be found in any standard Commutative Algebra book. We will however use this result to prove another statement that is also commonly referred to as NAK, which allows us to talk about minimal generating sets for finitely generated modules over local rings.  Remark 4.46. Let be any commutative ring, and consider an -module and an ideal . If , meaning that for all and all , then can be given the structure of an -module, as follows: for any and any , The fact that kills is what makes this action well-defined. The fact that is actually an -module under this action is a consequence of the fact that is an -module; checking these details is routine, and we leave them as an exercise.  Notice that the structure of as an -module is essentially the same as its structure as an -module. There are many properties of as an -module that pass onto its module structure, and typically such results are easy to check.  Here is a special case of this: if is a commutative local ring, and is an -module, then the module is killed by , and thus it is also a module over . Now notice that is a field, so is actually a vector space over the field .  Theorem 4.47. Let be a commutative local ring, and be a finitely generated module. For , Thus, any generating set for consists of at least elements.  Proof. The implication is clear. For , given such that generate , consider     Since is generated by the image of , we have . By taking the quotient by , we see that     By Theorem 4.45, and thus .  As we mentioned above, this allows us to talk about minimal generating sets.  Definition 4.48. Let be a local ring, and a finitely generated module. A set of elements is a minimal generating set of if the images of form a basis for the vector space .  Note that every finitely generated module over a local ring has a minimal generating set, that every minimal generating set has the same number of elements, and that any set of generators for contains a minimal generating set, all thanks to plain old linear algebra. In particular, we can now define the following:  Definition 4.49. Let be a finitely generated module over a commutative local ring . The minimal number of generators of , denoted ,, is the number of elements in any minimal generating set for .  We now have all the key commutative algebra ingredients needed to show that for finitely generated modules over a noetherian local ring, projective free. However, the proof follows more easily with one more homological tool we haven’t developed yet, so we will hold off on proving this for now - in fact, you will soon be able to prove it easily, so this will be in the next problem set.  Exercise 58. Let be a commutative local ring, and let be a finitely presented module. Then     Kaplansky [Kap58] showed that this holds even for modules that are not necessarily finitely presented, but generated by countably many elements.  Definition 4.50. An -module is locally free if is free for every prime ideal .  Exercise 59. Let be a commutative ring, and be -modules, and be a prime ideal. Show that     Exercise 60. Let be a commutative ring, be a prime ideal, and be an -module. Let be as an -module via restriction of scalars. Then as -modules, we have an isomorphism     Exercise 61. Let be a commutative ring. Show that a homomorphism of -modules is surjective if and only if is surjective for all primes .  Exercise 62. Let be a noetherian ring, be a multiplicative set, be a finitely generated -module, and an arbitrary -module. Show that     In particular, if is prime,     Theorem 4.51. Let be a commutative noetherian ring and let be a finitely presented -module. Then     Proof. We already know that projectives are flat, by Theorem 4.37.  Suppose is flat. We claim that is flat for every prime ideal . First, note that , by Theorem 3.57; moreover, is a flat -module by Exercise 53 . Note moreover that any -module can also be viewed as an -module by extension of scalars along the canonical localization map. Now given any short exact sequence of -modules, say     tensoring with over can be done in two steps: first we view this as a short exact sequence of -modules, and tensor with , but is a flat -module, so     is exact. Then we tensor with , but this is also flat -module, so we get a short exact sequence again:     By Theorem 3.57 and Exercise 59, for each -module we have     But , by ??, so we conclude that     Thus     is exact, and is a flat -module.  So whenever is flat, is a flat -module for all primes . By Exercise must be free over for all primes , that is, is locally free.  Finally, suppose that is locally free. We want to show that is projective. So by Theorem 4.4, we need to show that for all surjective -module maps , the map is surjective. By Exercise 61 , it is enough to show that is surjective for all primes . By Exercise 62,     and     But i free, and thus projective by Theorem 4.3, so is surjective. Since this holds for all , by Exercise 61 we conclude that is surjective, and thus is projective.  Note that the noetherianity assumption is just so that finitely generated implies finitely presented; the statement is also true for a general commutative ring if instead of finitely generated modules we take finitely presented.                      "
},
{
  "id": "outcomes-4",
  "level": "2",
  "url": "commutative-local-rings.html#outcomes-4",
  "type": "Summary",
  "number": "4.4",
  "title": "",
  "body": "                   "
},
{
  "id": "ch-resolutions",
  "level": "1",
  "url": "ch-resolutions.html",
  "type": "Chapter",
  "number": "5",
  "title": "Resolutions",
  "body": "Resolutions  R = QQ[x,y,z] M = R^1\/(x*y, x*z, y*z) F = res M   Make sure the langauge is set to Macaulay2!!!  "
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
  "id": "exercise-37",
  "level": "2",
  "url": "sec-rings.html#exercise-37",
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
  "id": "remark-39",
  "level": "2",
  "url": "sec-rings.html#remark-39",
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
  "body": "Modules  You can learn more about the basic theory of (commutative) rings and -modules in any introductory algebra book, such as [DF04].    Definition A.9. Let be a ring with . A left -module is an abelian group together with an action of on , written as , such that for all and we have the following:     ,     ,     , and     .    A right -module is an abelian group together with an action of on , written as , such that for all and we have     ,     ,     , and     .      By default, we will be studying left -modules. To make the writing less heavy, we will sometimes say -module rather than left -module whenever there is no ambiguity.   Remark A.10. If is a commutative ring, then any left -module may be regarded as a right -module by setting . Likewise, any right -module may be regarded as a left -module. Thus for commutative rings, we just refer to modules, and not left or right modules.   The definitions of submodule, quotient of modules, and homomorphism of modules are very natural and easy to guess, but here they are.    If are -modules with compatible structures, we say that is a submodule of .  A map between -modules is a homomorphism of -modules if it is a homomorphism of abelian groups that preserves the -action, meaning for all and all . We sometimes refer to -module homomorphisms as -module maps, or maps of -modules. An isomorphism of -modules is a bijective homomorphism, which we really should think about as a relabeling of the elements in our module. If two modules and are isomorphic, we write .  Given an -module and a submodule , the quotient is an -module whose elements are the equivalence classes determined by the relation on given by  . One can check that this set naturally inherits an -module structure from the -module structure on , and it comes equipped with a natural canonical map induced by sending to its equivalence class.     Example A.12. The modules over a field are precisely all the -vector spaces. Linear transformations are precisely all the -module maps.   While vector spaces make for a great first example, be warned that many of the basic facts we are used to from linear algebra are often a little more subtle in commutative algebra. These differences are features, not bugs.   Example A.13. The -modules are precisely all the abelian groups.    Example A.14. When we think of the ring as a module over itself, the submodules of are precisely the ideals of .   First Isomorphism Theorem   Any -module homomorphism satisfies .    The first big noticeable difference between vector spaces and more general -modules is that while every vector space has a basis, most -modules do not.    A subset of an -module is a generating set, or a set of generators, if every element in can be written as a finite linear combination of elements in with coefficients in . A basis for an -module is a generating set for such that implies for all . An -module is free if it has a basis.     Remark A.17. Every vector space is a free module.    Remark A.18. Every free -module is isomorphic to a direct sum of copies of . Indeed, let’s construct such an isomorphism for a given free -module . Given a basis for , let   The condition that is a basis for can be restated into the statement that is an isomorphism of -modules.   One of the key things that makes commutative algebra so rich and beautiful is that most modules are in fact not free. In general, every -module has a generating set - for example, itself. Given some generating set for , we can always repeat the idea above and write a presentation for , but in general the resulting map will have a nontrivial kernel. A nonzero kernel element corresponds to a relation between the generators of .   Remark A.19. Given a set of generators for an -module , any homomorphism of modules is determined by the images of the generators.   We say that a module is finitely generated if we can find a finite generating set for . The simplest finitely generated modules are the cyclic modules.   Example A.20. An -module is cyclic if it can be generated by one element. Equivalently, we can write as a quotient of by some ideal . Indeed, given a generator for , the kernel of the map induced by is some ideal . Since we assumed that generates is automatically surjective, and thus induces an isomorphism .   Similarly, if an -module has generators, we can naturally think about it as a quotient of by the submodule of relations among those generators.  "
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
  "id": "remark-40",
  "level": "2",
  "url": "sec-modules.html#remark-40",
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
  "id": "example-51",
  "level": "2",
  "url": "sec-modules.html#example-51",
  "type": "Example",
  "number": "A.13",
  "title": "",
  "body": " Example A.12. The modules over a field are precisely all the -vector spaces. Linear transformations are precisely all the -module maps.  "
},
{
  "id": "example-52",
  "level": "2",
  "url": "sec-modules.html#example-52",
  "type": "Example",
  "number": "A.14",
  "title": "",
  "body": " Example A.13. The -modules are precisely all the abelian groups.  "
},
{
  "id": "example-53",
  "level": "2",
  "url": "sec-modules.html#example-53",
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
  "id": "remark-41",
  "level": "2",
  "url": "sec-modules.html#remark-41",
  "type": "Remark",
  "number": "A.18",
  "title": "",
  "body": " Remark A.17. Every vector space is a free module.  "
},
{
  "id": "remark-42",
  "level": "2",
  "url": "sec-modules.html#remark-42",
  "type": "Remark",
  "number": "A.19",
  "title": "",
  "body": " Remark A.18. Every free -module is isomorphic to a direct sum of copies of . Indeed, let’s construct such an isomorphism for a given free -module . Given a basis for , let   The condition that is a basis for can be restated into the statement that is an isomorphism of -modules.  "
},
{
  "id": "remark-43",
  "level": "2",
  "url": "sec-modules.html#remark-43",
  "type": "Remark",
  "number": "A.20",
  "title": "",
  "body": " Remark A.19. Given a set of generators for an -module , any homomorphism of modules is determined by the images of the generators.  "
},
{
  "id": "example-54",
  "level": "2",
  "url": "sec-modules.html#example-54",
  "type": "Example",
  "number": "A.21",
  "title": "",
  "body": " Example A.20. An -module is cyclic if it can be generated by one element. Equivalently, we can write as a quotient of by some ideal . Indeed, given a generator for , the kernel of the map induced by is some ideal . Since we assumed that generates is automatically surjective, and thus induces an isomorphism .  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
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

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
