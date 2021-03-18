var documenterSearchIndex = {"docs":
[{"location":"backend.html#Backend","page":"Backend","title":"Backend","text":"","category":"section"},{"location":"backend.html#Contract","page":"Backend","title":"Contract","text":"","category":"section"},{"location":"backend.html","page":"Backend","title":"Backend","text":"Fermi.contract","category":"page"},{"location":"backend.html","page":"Backend","title":"Backend","text":"Fermi.contract!","category":"page"},{"location":"backend.html#IO","page":"Backend","title":"IO","text":"","category":"section"},{"location":"backend.html","page":"Backend","title":"Backend","text":"Fermi.Output.@output","category":"page"},{"location":"backend.html#Tensors","page":"Backend","title":"Tensors","text":"","category":"section"},{"location":"backend.html","page":"Backend","title":"Backend","text":"Fermi.AbstractTensor","category":"page"},{"location":"backend.html","page":"Backend","title":"Backend","text":"Fermi.PackedTensor","category":"page"},{"location":"backend.html#Fermi.PackedTensor","page":"Backend","title":"Fermi.PackedTensor","text":"PackedTensor{T} <: AbstractTensor where T <: Number\n\nSymmetry packed tesor. Not functional.\n\n\n\n\n\n","category":"type"},{"location":"backend.html","page":"Backend","title":"Backend","text":"Fermi.GeneratedTensor","category":"page"},{"location":"backend.html#Fermi.GeneratedTensor","page":"Backend","title":"Fermi.GeneratedTensor","text":"GeneratedTensor{T} <: AbstractTensor where T <: Number\n\nTensor for which elements are computed on the fly by generator. \n\n\n\n\n\n","category":"type"},{"location":"energy.html#Energy-computations","page":"Energy computations","title":"Energy computations","text":"","category":"section"},{"location":"energy.html","page":"Energy computations","title":"Energy computations","text":"Fermi.@energy","category":"page"},{"location":"energy.html#Fermi.@energy","page":"Energy computations","title":"Fermi.@energy","text":"Fermi.@energy\n\nMacro to call functions to compute energy given current options. Arguments may be passed using \"=>\" or \"<=\"\n\nExamples\n\nGenerating a RHF wave function\n\nrhf = @energy rhf\n\nUsing this wave function in a CCSD computations\n\n@energy rhf => CCSD\n\nor\n\n@energy CCSD <= rhf\n\nImplemented methods:\n\nRHF            Restricted Hartree-Fock.\nRMP2           Restricted Moller-Plesset PT order 2.\nRMP3           Restricted Moller-Plesset PT order 3.\nCASCI          Restricted configuration interaction within given active space.\nCCSD           Restricted Coupled-Cluster with Single and Double substitutions\nCCSD(T)        Restricted Coupled-Cluster with Single and Double substitutions and perturbative triples.\necCCSD         Restricted externally corrected CCSD. External correction from CASCI computation.\necCCSD(T)      Restricted externally corrected CCSDpT. External correction from CASCI computation.\n\n\n\n\n\n","category":"macro"},{"location":"geometry.html#Geometry","page":"Geometry","title":"Geometry","text":"","category":"section"},{"location":"geometry.html","page":"Geometry","title":"Geometry","text":"Fermi.Geometry.Atom","category":"page"},{"location":"geometry.html#Fermi.Geometry.Atom","page":"Geometry","title":"Fermi.Geometry.Atom","text":"Fermi.Atom\n\nObject storing information about an atom.\n\nFields:\n\nAtomicSymbol    Atomic symbol\nZ               Atomic number\nxyz             xyz array in Angstrom\n\n\n\n\n\n","category":"type"},{"location":"geometry.html","page":"Geometry","title":"Geometry","text":"Fermi.Geometry.Molecule","category":"page"},{"location":"geometry.html#Fermi.Geometry.Molecule","page":"Geometry","title":"Fermi.Geometry.Molecule","text":"Fermi.Molecule\n\nObject storing information about a molecule (group of atoms).\n\nFields:\n\natoms        Array with Fermi.Atom objects\ncharge       Charge of the molecule\nmultiplicity Multiplicity ``(2Ms + 1)``\nNα           Number of Alpha electrons\nNβ           Number of Beta electrons\nVnuc         Nuclear repulsion energy\n\n\n\n\n\n","category":"type"},{"location":"geometry.html","page":"Geometry","title":"Geometry","text":"Fermi.Geometry.get_atoms","category":"page"},{"location":"geometry.html#Fermi.Geometry.get_atoms","page":"Geometry","title":"Fermi.Geometry.get_atoms","text":"Fermi.get_atoms(molstring::String; unit::String=\"angstrom\")\n\nFrom a XYZ string, produces an array of Atom objects.\n\n\n\n\n\n","category":"function"},{"location":"geometry.html","page":"Geometry","title":"Geometry","text":"Fermi.Geometry.get_xyz","category":"page"},{"location":"geometry.html#Fermi.Geometry.get_xyz","page":"Geometry","title":"Fermi.Geometry.get_xyz","text":"Fermi.get_xyz(M::Molecule)\n\nReturns a XYZ string in angstrom for the given Molecule.\n\n\n\n\n\n","category":"function"},{"location":"integrals.html#Integrals-and-Orbitals","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"","category":"section"},{"location":"integrals.html#IntegralHelper","page":"Integrals and Orbitals","title":"IntegralHelper","text":"","category":"section"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"The Fermi.Integrals.IntegralHelper object is designed to provide easy access to molecular  integrals from Julia. ","category":"page"},{"location":"integrals.html#Creation","page":"Integrals and Orbitals","title":"Creation","text":"","category":"section"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"To create an IntegralHelper, you can simply call,","category":"page"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Fermi.Integrals.IntegralHelper()","category":"page"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"and one will be created based on the information in Fermi.CurrentOptions, which you may recall are set with @set.  If you want more control, you can pass keyword arguments for the Molecule and OrbDict to be used,","category":"page"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Fermi.Integrals.IntegralHelper(mol=mymol,orbs=myorbs)","category":"page"},{"location":"integrals.html#Use","page":"Integrals and Orbitals","title":"Use","text":"","category":"section"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Once an IntegralHelper object is created , integrals are simply accessed as,","category":"page"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"helper[\"S\"] #AO basis overlap\nhelper[\"T\"] #AO basis kinetic\nhelper[\"V\"] #AO basis nuclear attraction\nhelper[\"\\mu\"] #AO basis ERI\nhelper[\"B\"] #AO basis density fitted ERI (B(P,m,n))\n\nhelper[\"OOOO\"] # MO basis <ij|kl> TEI's \nhelper[\"OOVV\"] # MO basis <ij|ab> TEI's\nhelper[\"(OVOV)\"] # MO basis (ia|jb) TEI's **chemists notation**\nhelper[\"FOV\"] # MO basis Fock matrix, OV block\nhelper[\"BOV\"] # MO basis DF TEI's, (ia|P)","category":"page"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Direct access to the underlying orbitals is possible,","category":"page"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"helper.orbs[\"O\"]   # occupied orbitals, array of Orbital objects\nhelper.orbs[\"[O]\"] # occupied orbitals, collected into a matrix","category":"page"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"To obtain unit normalized (non-CCA) integrals for d and higher angular momentum functions, call Fermi.Integrals.normalize(h::IntegralHelper,true). Note that this will delete all current integrals.","category":"page"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Fermi.Integrals.IntegralHelper","category":"page"},{"location":"integrals.html#Fermi.Integrals.IntegralHelper","page":"Integrals and Orbitals","title":"Fermi.Integrals.IntegralHelper","text":"IntegralHelper{T}\n\nStructure to assist with computing and storing integrals.  Accesss like a dictionary e.g.,     ints[\"B\"] to get DF ERI integrals. A number of characters can be added to denote orbitals in various bases, such as MO or NO.      O               -> occ,alpha,ERI      o               -> occ,beta,ERI      V               -> vir,alpha,ERI      v               -> vir,beta,ERI      P               -> all,alpha,ERI      p               -> all,beta,ERI      B               -> DF-ERI      μ               -> ao,ERI      Ω               -> NO,occ,alpha      ω               -> NO,occ,beta      U               -> NO,vir,alpha      u               -> NO,vir,beta      S               -> AO,overlap      T               -> AO,kinetic      V               -> AO,nuclear\n\nFields\n\ncache::Dict{String,Array}                        previously computed integrals\nbname::Dict{String,String}                       basis set names for various purposes\nmol::Molecule                                    attached Molecule object.\norbs::Dict{String,O} where O < AbstractOrbitals  orbitals of various kinds\nbasis::Dict{String,Lints.BasisSetAllocated}      basis sets for various purposes\n\n\n\n\n\n","category":"type"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Fermi.Integrals.aokinetic","category":"page"},{"location":"integrals.html#Fermi.Integrals.aokinetic","page":"Integrals and Orbitals","title":"Fermi.Integrals.aokinetic","text":"aokinetic(molecule::Fermi.Molecule, basis::String)\n\nComputes AO basis kinetic energy ⟨μ|T̂|ν⟩ integrals for the given basis and molecule. Can be accessed at a higher level by calling\n\nhelper[\"T\"]\n\nwhere helper is bound to the desired molecule and basis set.\n\n\n\n\n\n","category":"function"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Fermi.Integrals.aooverlap","category":"page"},{"location":"integrals.html#Fermi.Integrals.aooverlap","page":"Integrals and Orbitals","title":"Fermi.Integrals.aooverlap","text":"aooverlap(molecule::Fermi.Molecule, basis::String)\n\nComputes AO basis overlap ⟨p|q⟩ integrals for the given basis and molecule. Can be accessed at a higher level by calling\n\nhelper[\"S\"]\n\nwhere helper is bound to the desired molecule and basis set.\n\n\n\n\n\n","category":"function"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Fermi.Integrals.aodipole","category":"page"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Fermi.Integrals.aonuclear","category":"page"},{"location":"integrals.html#Fermi.Integrals.aonuclear","page":"Integrals and Orbitals","title":"Fermi.Integrals.aonuclear","text":"aonuclear(molecule::Fermi.Molecule, basis::String)\n\nComputes AO basis nuclear attraction ⟨μ|V̂|ν⟩ integrals for the given basis and molecule. Can be accessed at a higher level by calling\n\nhelper[\"V\"]\n\nwhere helper is bound to the desired molecule and basis set.\n\n\n\n\n\n","category":"function"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Fermi.Integrals.aoeri","category":"page"},{"location":"integrals.html#Fermi.Integrals.aoeri","page":"Integrals and Orbitals","title":"Fermi.Integrals.aoeri","text":"aoeri(molecule::Fermi.Molecule, basis::String)\n\nComputes AO basis electron repulsion integrals ⟨μν|Ô₂|ρσ⟩ integrals for the given basis and molecule. Can be accessed at a higher level by calling\n\nhelper[\"μ\"]\n\nwhere helper is bound to the desired molecule and basis set.\n\n\n\n\n\n","category":"function"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Fermi.Integrals.dfaoeri","category":"page"},{"location":"integrals.html#Fermi.Integrals.dfaoeri","page":"Integrals and Orbitals","title":"Fermi.Integrals.dfaoeri","text":"dfaoeri(molecule::Fermi.Molecule, basis::String)\n\nComputes AO basis density fitted electron repulsion integrals ⟨μν|Ô₂|P⟩J(P,Q)^-1/2 integrals for the given basis and molecule. Note that the returned integrals DO NOT need to be combined with the Coulomb metric J(P,Q). In common notation, this is B(Q,μ,ν). Can be accessed at a higher level by calling\n\nhelper[\"B\"]\n\nwhere helper is bound to the desired molecule and basis set.\n\n\n\n\n\n","category":"function"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Fermi.Integrals.aux_ri!","category":"page"},{"location":"integrals.html#Fermi.Integrals.aux_ri!","page":"Integrals and Orbitals","title":"Fermi.Integrals.aux_ri!","text":"aux_ri!(I::IntegralHelper, ri=Fermi.CurrentOptions[\"rifit\"])\n\nClears the integral cache and switches auxiliary DF integrals to use the current RI fitting basis set. Used between DF-RHF and DF-post HF.\n\n\n\n\n\n","category":"function"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Fermi.Integrals.aux_jk!","category":"page"},{"location":"integrals.html#Fermi.Integrals.aux_jk!","page":"Integrals and Orbitals","title":"Fermi.Integrals.aux_jk!","text":"aux_ri!(I::IntegralHelper, jk=Fermi.CurrentOptions[\"jkfit\"])\n\nClears the integral cache and switches auxiliary DF integrals to use the current JK fitting basis set. Used to ensure JK integrals are used in DF-RHF.\n\n\n\n\n\n","category":"function"},{"location":"integrals.html","page":"Integrals and Orbitals","title":"Integrals and Orbitals","text":"Fermi.Integrals.getindex","category":"page"},{"location":"integrals.html#Base.getindex","page":"Integrals and Orbitals","title":"Base.getindex","text":"getindex(collection, key...)\n\nRetrieve the value(s) stored at the given key or index within a collection. The syntax a[i,j,...] is converted by the compiler to getindex(a, i, j, ...).\n\nExamples\n\njulia> A = Dict(\"a\" => 1, \"b\" => 2)\nDict{String,Int64} with 2 entries:\n  \"b\" => 2\n  \"a\" => 1\n\njulia> getindex(A, \"a\")\n1\n\n\n\n\n\n","category":"function"},{"location":"cc.html#Coupled-Cluster","page":"Coupled Cluster","title":"Coupled Cluster","text":"","category":"section"},{"location":"cc.html","page":"Coupled Cluster","title":"Coupled Cluster","text":"Fermi.CoupledCluster","category":"page"},{"location":"cc.html#Fermi.CoupledCluster","page":"Coupled Cluster","title":"Fermi.CoupledCluster","text":"Module for running CoupledCluster computations in Fermi.\n\n\n\n\n\n","category":"module"},{"location":"cc.html#CCSD","page":"Coupled Cluster","title":"CCSD","text":"","category":"section"},{"location":"cc.html","page":"Coupled Cluster","title":"Coupled Cluster","text":"Fermi.CoupledCluster.RCCSD","category":"page"},{"location":"cc.html#Fermi.CoupledCluster.RCCSD","page":"Coupled Cluster","title":"Fermi.CoupledCluster.RCCSD","text":"Fermi.CoupledCluster.RCCSD\n\nFermi struct that holds information about RCCSD wavefunctions\n\nFields\n\nCorrelationEnergy   CCSD correlation energy\nT1                  T1 amplitudes\nT2                  T2 amplitudes\n\nstruct tree:\n\nRCCSD <: AbstractCCWavefunction <: AbstractCorrelatedWavefunction <: AbstractWavefunction\n\n\n\n\n\n","category":"type"},{"location":"cc.html#ecCCSD","page":"Coupled Cluster","title":"ecCCSD","text":"","category":"section"},{"location":"cc.html","page":"Coupled Cluster","title":"Coupled Cluster","text":"Fermi.CoupledCluster.ecCCSD","category":"page"},{"location":"options.html#Options","page":"Options","title":"Options","text":"","category":"section"},{"location":"options.html#Basic-Use","page":"Options","title":"Basic Use","text":"","category":"section"},{"location":"options.html","page":"Options","title":"Options","text":"Fermi.@molecule","category":"page"},{"location":"options.html#Fermi.@molecule","page":"Options","title":"Fermi.@molecule","text":"Fermi.@molecule\n\nSet the molecule used in computations. String is save into Fermi.CurrentOptions\n\nExample\n\n@molecule {\nC                 -0.00000000     0.00000000    -0.00000000\nO                  0.00000000     0.00000000    -2.19732722\nO                 -0.00000000    -0.00000000     2.19732722\n}\n\n\n\n\n\n","category":"macro"},{"location":"options.html","page":"Options","title":"Options","text":"Fermi.@set","category":"page"},{"location":"options.html#Fermi.@set","page":"Options","title":"Fermi.@set","text":"Fermi.@set\n\nSet options for Fermi computations. It saves the options into Fermi.CurrentOptions.\n\nUsage:  @set A B\n\nA is set to B. By default A is taken as a string. B is evaluated at runtime. If the evaluation is not possible, B is converted to a string.\n\nExamples\n\n@set basis cc-pVDZ\n@set cc_max_iter 100\n@set e_conv 10^-9\n\nOne can also use the block syntax\n\n@set {\n    basis cc-pVDZ\n    cc_max_iter 100\n    e_conv 10^-9\n}\n\nNote that for the block syntax variables are not accepted because the evaluation of B is done at parse time.\n\nmybasis = 6-31g\n@set {\n    basis mybasis\n}\n\nWill set the basis to \"mybasis\" not \"6-31g\".\n\nNote for basis set: A * at the end of a line is considered an incomplete expression by Julia. Thus, for basis such as 6-31g* you should use quotes\n\n@set basis \"6-31g\"\n\n\n\n\n\n","category":"macro"},{"location":"options.html","page":"Options","title":"Options","text":"Fermi.@get","category":"page"},{"location":"options.html#Fermi.@get","page":"Options","title":"Fermi.@get","text":"Fermi.@get\n\nReturns the current value of an options. \n\nExamples\n\njulia> @get basis\n\"sto-3g\"      # Default\n\njulia> @set basis cc-pVDZ\njulia> @get basis\n\"cc-pVDZ\"\n\n\n\n\n\n","category":"macro"},{"location":"options.html","page":"Options","title":"Options","text":"Fermi.@reset","category":"page"},{"location":"options.html#Fermi.@reset","page":"Options","title":"Fermi.@reset","text":"Fermi.@reset(key=\"all\")\n\nRestores key option to default setting. If key == \"all\", restores all options to their default values.\n\n\n\n\n\n","category":"macro"},{"location":"hf.html#Hartree-Fock","page":"Hartree Fock","title":"Hartree Fock","text":"","category":"section"},{"location":"hf.html","page":"Hartree Fock","title":"Hartree Fock","text":"Fermi.HartreeFock.RHF","category":"page"},{"location":"hf.html#Fermi.HartreeFock.RHF","page":"Hartree Fock","title":"Fermi.HartreeFock.RHF","text":"Fermi.HartreeFock.RHF\n\nWave function object for Restricted Hartree-Fock methods\n\nHigh Level Interface\n\nRHF()\n\nComputes RHF using information from Fermi.CurrentOptions.\n\nFields:\n\nmolecule    Molecule object used to compute the RHF wave function\nenergy      RHF Energy\nndocc       Number of doubly occupied spatial orbitals\nnvir        Number of virtual spatial orbitals\nC           Array with MO coefficients\neps         Array with MO energies\n\nRelevant options\n\nThese options can be set with @set <option> <value>\n\nOption What it does Type choices [default]\nscf_alg picks SCF algorithm String \"df\" [\"conventional\"]\nscf_max_rms RMS density convergence criterion Float64 [10^-10]\nscf_max_iter Max number of iterations Int [50]\nbasis What basis set to use String [\"sto-3g\"]\njkfit What aux. basis set to use for JK String [\"auto\"]\noda Whether to use ODA Bool [True]\noda_cutoff When to turn ODA off (RMS) Float64 [1E-1]\noda_shutoff When to turn ODA off (iter) Int [20]\nscf_guess Which guess density to use  \"core\" [\"gwh\"]\n\nLower level interfaces\n\nRHF(molecule::Molecule, aoint::IntegralHelper, C::Array{Float64,2}, ERI::Array{Float64,N}, Λ::Array{Float64,2}) where N\n\nThe RHF kernel. Computes RHF on the given molecule with integral information defined in aoint. Starts from the given C matrix. \n\nstruct tree:\n\nRHF <: AbstractHFWavefunction <: AbstractReferenceWavefunction <: AbstractWavefunction\n\n\n\n\n\n","category":"type"},{"location":"index.html#Fermi-documentation","page":"Fermi documentation","title":"Fermi documentation","text":"","category":"section"},{"location":"index.html","page":"Fermi documentation","title":"Fermi documentation","text":"Welcome to the documentation for Fermi. See the hamburger menu for more details.","category":"page"}]
}
