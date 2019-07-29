ElementProvider = {

    self: this
    
    , init: function() {
        self.$data = [];
        this.load();
    }

    , load: function() {
        self.$data.push(new Element(1, 'H', 'hidrogênio', '1,0078'));
        self.$data.push(new Element(2, 'He', 'hélio', '4,0028'));
        self.$data.push(new Element(3, 'Li', 'lítio', '6,938'));
        self.$data.push(new Element(4, 'Be', 'berílio', '9,0122'));
        self.$data.push(new Element(5, 'B', 'boro', '10,086'));
        self.$data.push(new Element(6, 'C', 'carbono', '12,009'));
        self.$data.push(new Element(7, 'N', 'notrogênio', '14,006'));
        self.$data.push(new Element(8, 'O', 'oxigênio', '15,999'));
        self.$data.push(new Element(9, 'F', 'flúor', '18,998'));
        self.$data.push(new Element(10, 'Ne', 'neônio', '20,180'));

        self.$data.push(new Element(11, 'Na', 'sódio', '22,990'));
        self.$data.push(new Element(12, 'Mg', 'magnésio', '24,304'));
        self.$data.push(new Element(13, 'Al', 'alumínio', '24,304'));
        self.$data.push(new Element(14, 'Si', 'silício', '24,304'));
        self.$data.push(new Element(15, 'P', 'fósforo', '30,974'));
        self.$data.push(new Element(16, 'S', 'enxofre', '32,059'));
        self.$data.push(new Element(17, 'Cl', 'clor', '35,446'));
        self.$data.push(new Element(18, 'Ar', 'argônio', '39,948'));
        self.$data.push(new Element(19, 'K', 'potássio', '39,098'));
        self.$data.push(new Element(20, 'Ca', 'cálcio', '40,078'));

        self.$data.push(new Element(21, 'Sc', 'escândio', '44,956'));
        self.$data.push(new Element(22, 'Ti', 'titânio', '47,867'));
        self.$data.push(new Element(23, 'V', 'vanádio', '50,942'));
        self.$data.push(new Element(24, 'Cr', 'crômio', '51,996'));
        self.$data.push(new Element(25, 'Mn', 'manganês', '54,938'));
        self.$data.push(new Element(26, 'Fe', 'ferro', '55,845(2)'));
        self.$data.push(new Element(27, 'Co', 'cobalto', '58,933'));
        self.$data.push(new Element(28, 'Ni', 'níquel', '58,693'));
        self.$data.push(new Element(29, 'Cu', 'cobre', '63,546(3)'));
        self.$data.push(new Element(30, 'Zn', 'zinco', '65,38(2)'));

        self.$data.push(new Element(31, 'Ga', 'gálio', '69,723'));
        self.$data.push(new Element(32, 'Ge', 'germânio', '72,630(8)'));
        self.$data.push(new Element(33, 'As', 'arsênio', '74,922'));
        self.$data.push(new Element(34, 'Se', 'selênio', '78,971(8)'));
        self.$data.push(new Element(35, 'Br', 'bromo', '79,901'));
        self.$data.push(new Element(36, 'Kr', 'criptônio', '83,798(2)'));
        self.$data.push(new Element(37, 'Rb', 'rubídio', '85,468'));
        self.$data.push(new Element(38, 'Sr', 'estrôncio', '87,62'));
        self.$data.push(new Element(39, 'Y', 'ítrio', '88,906'));
        self.$data.push(new Element(40, 'Zr', 'zircônio', '91,224(2)'));

        self.$data.push(new Element(41, 'Nb', 'nióbio', '92,906'));
        self.$data.push(new Element(42, 'Mo', 'molibdênio', '95,95'));
        self.$data.push(new Element(43, 'Tc', 'tecnécio', '98'));
        self.$data.push(new Element(44, 'Ru', 'rutênio', '101,07(2)'));
        self.$data.push(new Element(45, 'Rh', 'ródio', '102,91'));
        self.$data.push(new Element(46, 'Pd', 'paládio', '106,42'));
        self.$data.push(new Element(47, 'Ag', 'prata', '107,87'));
        self.$data.push(new Element(48, 'Cd', 'cádmio', '112,41'));
        self.$data.push(new Element(49, 'In', 'índio', '114,82'));
        self.$data.push(new Element(50, 'Sn', 'estanho', '118,71'));

        self.$data.push(new Element(51, 'Sb', 'antimônio', '121,76'));
        self.$data.push(new Element(52, 'Te', 'telúrio', '127,60(3)'));
        self.$data.push(new Element(53, 'I', 'iodo', '126,90'));
        self.$data.push(new Element(54, 'Xe', 'xenônio', '131,29'));
        self.$data.push(new Element(55, 'Cs', 'césio', '132,91'));
        self.$data.push(new Element(56, 'Ba', 'bário', '137,33'));
        self.$data.push(new Element(57, 'La', 'lantânio', '138,91'));
        self.$data.push(new Element(58, 'Ce', 'cério', '140,12'));
        self.$data.push(new Element(59, 'Pr', 'praseodímio', '140,91'));
        self.$data.push(new Element(60, 'Nd', 'neodímio', '144,24'));

        self.$data.push(new Element(61, 'Pm', 'promécio', '145'));
        self.$data.push(new Element(62, 'Sm', 'samário', '150,36'));
        self.$data.push(new Element(63, 'Eu', 'európio', '151,96'));
        self.$data.push(new Element(64, 'Gd', 'gadolínio', '157,25(3)'));
        self.$data.push(new Element(65, 'Tb', 'térbio', '158,93'));
        self.$data.push(new Element(66, 'Dy', 'disprósio', '162,50'));
        self.$data.push(new Element(67, 'Ho', 'hôlmio', '164,93'));
        self.$data.push(new Element(68, 'Er', 'érbio', '167,26'));
        self.$data.push(new Element(69, 'Tm', 'túlio', '168,93'));
        self.$data.push(new Element(70, 'Yb', 'itérbio', '173,05'));

        self.$data.push(new Element(71, 'Lu', 'lutécio', '174,97'));
        self.$data.push(new Element(72, 'Hf', 'háfnio', '178,49'));
        self.$data.push(new Element(73, 'Ta', 'tântalo', '180,95'));
        self.$data.push(new Element(74, 'W', 'tungstênio', '183,84'));
        self.$data.push(new Element(75, 'Re', 'rênio', '186,21'));
        self.$data.push(new Element(76, 'Os', 'ósmio', '190,23(3)'));
        self.$data.push(new Element(77, 'Ir', 'irídio', '192,22'));
        self.$data.push(new Element(78, 'Pt', 'platina', '195,08'));
        self.$data.push(new Element(79, 'Au', 'ouro', '196,97'));
        self.$data.push(new Element(80, 'Hg', 'mercúrio', '200,59'));

        self.$data.push(new Element(81, 'Tl', 'tálio', '204,38'));
        self.$data.push(new Element(82, 'Pb', 'chumbo', '207,2'));
        self.$data.push(new Element(83, 'Bi', 'bismuto', '208,98'));
        self.$data.push(new Element(84, 'Po', 'polônio', '209'));
        self.$data.push(new Element(85, 'At', 'astato', '210'));
        self.$data.push(new Element(86, 'Rn', 'radônio', '222'));
        self.$data.push(new Element(87, 'Fr', 'frâncio', '223'));
        self.$data.push(new Element(88, 'Ra', 'rádio', '226'));
        self.$data.push(new Element(89, 'Ac', 'actínio', '227'));
        self.$data.push(new Element(90, 'Th', 'tório', '232,04'));

        self.$data.push(new Element(91, 'Pa', 'protactínio', '231,04'));
        self.$data.push(new Element(92, 'U', 'urânio', '238,03'));
        self.$data.push(new Element(93, 'Np', 'neptûnio', '237'));
        self.$data.push(new Element(94, 'Pu', 'plutônio', '244'));
        self.$data.push(new Element(95, 'Am', 'amerício', '243'));
        self.$data.push(new Element(96, 'Cm', 'cúrio', '247'));
        self.$data.push(new Element(97, 'Bk', 'berquélio', '247'));
        self.$data.push(new Element(98, 'Cf', 'califórnio', '251'));
        self.$data.push(new Element(99, 'Es', 'einstênio', '252'));
        self.$data.push(new Element(100, 'Fm', 'férmio', '257'));

        self.$data.push(new Element(101, 'Md', 'mendelévio', '258'));
        self.$data.push(new Element(102, 'No', 'nobélio', '259'));
        self.$data.push(new Element(103, 'Lr', 'laurêncio', '262'));
        self.$data.push(new Element(104, 'Rf', 'rutherfórdio', '267'));
        self.$data.push(new Element(105, 'Db', 'dúbnio', '268'));
        self.$data.push(new Element(106, 'Sg', 'seabórgio', '269'));
        self.$data.push(new Element(107, 'Bh', 'bóhrio', '270'));
        self.$data.push(new Element(108, 'Hs', 'hássio', '269'));
        self.$data.push(new Element(109, 'Mt', 'meitnério', '278'));
        self.$data.push(new Element(110, 'Ds', 'darmstádtio', '281'));

        self.$data.push(new Element(111, 'Rg', 'roentgênio', '281'));
        self.$data.push(new Element(112, 'Cn', 'copernício', '285'));
        self.$data.push(new Element(113, 'Nh', 'nihônio', '286'));
        self.$data.push(new Element(114, 'Fl', 'fleróvio', '289'));
        self.$data.push(new Element(115, 'Mc', 'moscóvio', '288'));
        self.$data.push(new Element(116, 'Lv', 'livermório', '293'));
        self.$data.push(new Element(117, 'Ts', 'tennesso', '294'));
        self.$data.push(new Element(118, 'Og', 'oganessônio', '294'));

        return self.$data;
    }

    , find: function(id) {
        return self.$data.find(el => el.atomicNumber === id);
    }

}