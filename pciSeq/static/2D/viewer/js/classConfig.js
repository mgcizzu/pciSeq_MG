// Color scheme for the cell classes.
// IdentifiedType is some wider categorization. On the viewer, the donut chart at the bottom right is aggregated
// by IdentifiedType and these aggregated probabilities are shown on the table at the bottom left.

function classColorsCodes()
{
    var out = [

        {className: 'Pvalb.C1ql1.Cpne5', IdentifiedType: 'Axo-axonic', color: '#3A19BD'},
        {className: 'Pvalb.C1ql1.Npy', IdentifiedType: 'Axo-axonic', color: '#3A19BD'},
        {className: 'Pvalb.C1ql1.Pvalb', IdentifiedType: 'Axo-axonic', color: '#3A19BD'},
        {className: 'Sst.Nos1', IdentifiedType: 'Backprojection', color: '#3DCCFF'},
        {className: 'Pvalb.Tac1.Nr4a2', IdentifiedType: 'Basket', color: '#7757FA'},
        {className: 'Pvalb.Tac1.Syt2', IdentifiedType: 'Basket', color: '#7757FA'},
        {className: 'Pvalb.Tac1.Akr1c18', IdentifiedType: 'Bistratified', color: '#5938DB'},
        {className: 'Pvalb.Tac1.Sst', IdentifiedType: 'Bistratified', color: '#5938DB'},
        {className: 'Cck.Lypd1', IdentifiedType: 'Cck Calb1/Slc17a8*', color: '#FF0000'},
        {className: 'Cck.Calca', IdentifiedType: 'Cck Cxcl14-', color: '#FF0000'},
        {className: 'Cck.Lmo1.Npy', IdentifiedType: 'Cck Cxcl14-', color: '#FF0000'},
        {className: 'Cck.Sema5a', IdentifiedType: 'Cck Cxcl14-', color: '#FF0000'},
        {className: 'Cck.Cxcl14.Calb1.Igfbp5', IdentifiedType: 'Cck Cxcl14+', color: '#996E00'},
        {className: 'Cck.Cxcl14.Calb1.Kctd12', IdentifiedType: 'Cck Cxcl14+', color: '#996E00'},
        {className: 'Cck.Cxcl14.Calb1.Tac2', IdentifiedType: 'Cck Cxcl14+', color: '#996E00'},
        {className: 'Cck.Cxcl14.Calb1.Tnfaip8l3', IdentifiedType: 'Cck Cxcl14+', color: '#996E00'},
        {className: 'Cck.Cxcl14.Slc17a8', IdentifiedType: 'Cck Cxcl14+', color: '#996E00'},
        {className: 'Cck.Lmo1.Vip.Crh', IdentifiedType: 'Cck Vip Cxcl14-', color: '#FF0000'},
        {className: 'Cck.Lmo1.Vip.Fam19a2', IdentifiedType: 'Cck Vip Cxcl14-', color: '#FF0000'},
        {className: 'Cck.Lmo1.Vip.Tac2', IdentifiedType: 'Cck Vip Cxcl14-', color: '#FF0000'},
        {className: 'Cck.Cxcl14.Vip', IdentifiedType: 'Cck Vip Cxcl14+', color: '#996E00'},
        {className: 'Cacna2d1.Ndnf.Cxcl14', IdentifiedType: 'CGE NGF', color: '#FF00E6'},
        {className: 'Cacna2d1.Ndnf.Npy', IdentifiedType: 'CGE NGF', color: '#FF00E6'},
        {className: 'Cacna2d1.Ndnf.Rgs10', IdentifiedType: 'CGE NGF', color: '#FF00E6'},
        {className: 'Sst.Npy.Cort', IdentifiedType: 'Hippocamposeptal', color: '#1FADEB'},
        {className: 'Sst.Npy.Zbtb20', IdentifiedType: 'Hippocamposeptal', color: '#1FADEB'},
        {className: 'Sst.Npy.Mgat4c', IdentifiedType: 'Hippocamposeptal', color: '#1FADEB'},
        {className: 'Sst.Npy.Serpine2', IdentifiedType: 'Hippocamposeptal', color: '#1FADEB'},
        {className: 'Calb2.Cntnap5a.Igfbp6', IdentifiedType: 'IS1', color: '#BDA800'},
        {className: 'Calb2.Cntnap5a.Rspo3', IdentifiedType: 'IS1', color: '#BDA800'},
        {className: 'Calb2.Cntnap5a.Vip', IdentifiedType: 'IS1', color: '#BDA800'},
        {className: 'Vip.Crh.C1ql1', IdentifiedType: 'IS2', color: '#FAE52E'},
        {className: 'Vip.Crh.Pcp4', IdentifiedType: 'IS2', color: '#FAE52E'},
        {className: 'Calb2.Vip.Gpd1', IdentifiedType: 'IS3', color: '#DBC70F'},
        {className: 'Calb2.Vip.Igfbp4', IdentifiedType: 'IS3', color: '#DBC70F'},
        {className: 'Calb2.Vip.Nos1', IdentifiedType: 'IS3', color: '#DBC70F'},
        {className: 'Cacna2d1.Lhx6.Vwa5a', IdentifiedType: 'Ivy', color: '#994D91'},
        {className: 'Cacna2d1.Lhx6.Reln', IdentifiedType: 'MGE NGF', color: '#994D91'},
        {className: 'Calb2.Cryab', IdentifiedType: 'NGF/I-S transition', color: '#FF00E6'},
        {className: 'Astro.1', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Astro.2', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Astro.3', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Astro.4', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Astro.5', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Choroid', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Endo', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Eryth.1', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Eryth.2', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Microglia.1', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Microglia.2', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Oligo.1', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Oligo.2', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Oligo.3', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Oligo.4', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Oligo.5', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Vsmc', IdentifiedType: 'Non Neuron', color: '#FFFFFF'},
        {className: 'Sst.Pnoc.Calb1.Igfbp5', IdentifiedType: 'O/LM', color: '#008FCC'},
        {className: 'Sst.Pnoc.Calb1.Pvalb', IdentifiedType: 'O/LM', color: '#008FCC'},
        {className: 'Sst.Pnoc.Pvalb', IdentifiedType: 'O/LM', color: '#008FCC'},
        {className: 'Sst.Erbb4.Crh', IdentifiedType: 'O-Bi', color: '#0070AD'},
        {className: 'Sst.Erbb4.Rgs10', IdentifiedType: 'O-Bi', color: '#0070AD'},
        {className: 'Sst.Erbb4.Th', IdentifiedType: 'O-Bi', color: '#0070AD'},
        {className: 'PC.CA1.1', IdentifiedType: 'PC', color: '#00FF00'},
        {className: 'PC.CA1.2', IdentifiedType: 'PC', color: '#00FF00'},
        {className: 'PC.CA1.3', IdentifiedType: 'PC', color: '#00FF00'},
        {className: 'PC.Other1', IdentifiedType: 'PC Other1', color: '#73E500'},
        {className: 'PC.Other2', IdentifiedType: 'PC Other2', color: '#73E500'},
        {className: 'Ntng1.Rgs10', IdentifiedType: 'Radiatum retrohip', color: '#3D855A'},
        {className: 'Ntng1.Synpr', IdentifiedType: 'Radiatum retrohip', color: '#3D855A'},
        {className: 'Ntng1.Chrm2', IdentifiedType: 'Trilaminar', color: '#1F663B'},
        {className: 'Sst.Cryab', IdentifiedType: 'Unidentified', color: '#A6A6A6'},

        // ****************************************************************************************
        // ********************** Do not remove the lines below. **********************************
        // ****************************************************************************************

        // Zero class is the "none from the above" class. If the algorithm cannot find a good
        // transcriptomic class from the single cell data then the cell will be labelled as Zero class
        {className: 'Zero', IdentifiedType: 'Zero', color: '#000000'},

        // If a class is missing from the settings above, use these default settings
        {className: 'Generic', IdentifiedType: 'Generic', color: '#C0C0C0'},

        // The donut chart at the bottom right will aggregate all classes with prob < 2% under the Other
        // label (see line 278, donut.js)
        {className: 'Other', IdentifiedType: 'Other', color: '#C0C0C0'},



    ];

    return out
}