export const generalConfig = {
    appName: 'The king shopsr',
    platformName: 'The king shopsr',
    defaultLanguage: 'fr',
    roles: ['admin'],
}

export const navBarConfig = {
    menus: [
        {
            display: 'Les commandes',
            route: 'orders',
            icon: 'shopping_cart',
            color: '#c2a944'
        },{
            display: 'Les commandes spécifiques',
            route: 'specialsorders',
            icon: 'production_quantity_limits',
            color: '#449dc2'
        },
        {
            display: 'Les véhicules',
            route: 'cars',
            icon: 'directions_car_filled',
            color: '#c244ac'
        },
        {
            display: 'Les propriétaires',
            route: 'owners',
            icon: 'supervisor_account',
            color: '#bb2915'
        },
        {
            display: 'Les chauffeurs',
            route: 'drivers',
            icon: 'settings_accessibility',
            color: '#153cbb'
        },
        {
            display: 'Les prestataires',
            route: 'serviceproviders',
            icon: 'assignment_ind',
            color: '#212636'
        },
        {
            display: 'Les utilisateurs',
            route: 'users',
            icon: 'account_circle',
            color: '#213633'
        }
        ,{
            display: 'Les administrateurs',
            route: 'admins',
            icon: 'manage_accounts',
            color: '#330202'
        },{
            display: 'Les alertes',
            route: 'alertes',
            icon: 'warning',
            color: '#123302'
        },
        {
            display: 'La comptabilité',
            route: 'accounting',
            icon: 'point_of_sale',
            color: '#63508e'
        },
        
        {
            display: 'Gestion',
            route: 'management',
            icon: 'settings_input_component',
            color: '#000000'
        }
        ,
        {
            display: 'Les statistiques',
            route: 'statistics',
            icon: 'equalizer',
            color: '#2a1326'
        }
    ],

    topBar : [
        
        {
            display : 'Mon profile',
            route: 'profil',
            icon: 'account_circle',
            link: false
        }
    ]
};